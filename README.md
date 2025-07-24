# 🐶 Petdoctor AI (펫닥터 AI)
반려동물 보호자를 위한 AI 기반 증상 상담 및 동물병원 정보 제공 서비스

## 주요 기능
- **AI 챗봇 상담**  
  - 사용자가 증상, 키워드, 질문을 입력하면 Gemini AI가 답변 제공  
  - 감기 등 주요 키워드는 하드코딩된 안내문구로 대체(타이핑 효과/로딩 포함)
- **동물병원 검색**  
  - 카카오 로컬 API를 활용한 전국 동물병원 검색  
  - 시/도, 시/군/구, 키워드, 정렬 등 다양한 필터 지원
- **검색 결과/상세 페이지**  
  - 병원 리스트, 상세 정보, 지도(예시 이미지), 주차정보 등 제공
- **모바일/웹뷰 최적화 UI**  
  - 공통 헤더(로고+타이틀), 채팅형 답변, 버튼/필터 등 모바일 UX 반영
- **환경변수 기반 API 키 관리**  
  - 민감 정보는 .env로 분리, git에는 포함되지 않음

## 주요 기술스택
- **백엔드**: Node.js, Express, Axios
- **프론트엔드**: React, React Router
- **AI**: Google Gemini API
- **병원검색**: 카카오 로컬 API
- **기타**: .env, git, GitHub

## 주의사항
- `.env` 파일은 git에 올리지 마세요!
- API 키는 반드시 환경변수로만 관리하세요.
- 카카오/Gemini API 쿼터 및 사용 정책을 준수하세요.

<details>
<summary>📁 폴더 구조 보기</summary>

```plaintext
petdoctor-ai/
├── backend/               # Node.js + Express 백엔드
│   ├── index.js           # API 서버 (카카오 연동)
│   └── .env               # (직접 생성) 환경변수
├── frontend/              # React 프론트엔드
│   ├── src/
│   │   ├── App.js
│   │   ├── SearchPage.js
│   │   ├── ResultPage.js
│   │   ├── HospitalDetailPage.js
│   │   └── ...
│   └── public/            # 정적 파일, 예시 이미지 등
└── README.md

