const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// 카카오 동물병원 검색 API
const KAKAO_REST_API_KEY = 'KAKAO_REST_API_KEY 입력 필요';

app.get('/api/kakao/hospitals', async (req, res) => {
  const { query, x, y } = req.query;
  try {
    const response = await axios.get('https://dapi.kakao.com/v2/local/search/keyword.json', {
      params: {
        query: query || '동물병원',
        category_group_code: 'HP8',
        x, y,
        radius: 10000,
        size: 15
      },
      headers: {
        Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// Gemini 답변 API (API 키는 반드시 환경변수로만 사용)
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/ask', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
      {
        contents: [{ parts: [{ text: message }] }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          key: GEMINI_API_KEY,
        },
      }
    );
    const answer = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'AI 답변을 불러오지 못했습니다.';
    res.json({ answer });
  } catch (err) {
    console.error('Gemini API Error:', err.response ? err.response.data : err.message);
    res.json({ answer: 'AI 답변을 불러오지 못했습니다.', error: err.response ? err.response.data : err.message });
  }
});

app.listen(4000, () => {
  console.log('Backend server running on http://localhost:4000');
});
