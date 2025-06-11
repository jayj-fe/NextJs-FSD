## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```js
/
├── app/                                 # ✅ Next.js 13+ App Router (Next 전용 폴더)
│  ├── home/   
│  │  └── pages.ts
│  ├── login/
│  │  └── pages.ts
│  ├── layout.tsx
│  └── page.tsx 
├── pages/                               # Stub: Next.js가 요구하는 pages 디렉토리 (CSR, API Route 등)
│  └── README.md
├── public/                              # 정적 파일
└── src/                                 # ✅ 실제 FSD 기반 소스코드 위치
    ├── app/                             # FSD의 "앱 초기화 계층" (라우터, Provider 등)
    │   ├── layouts/
    │   │  └── index.tsx
    │   └── providers/
    │       └── index.tsx
    ├── pages/                           # FSD pages folder - 라우트 단위 페이지 구성
    │   ├── home/
    │   │   ├── index.ts
    │   │   └── ui/
    │   │       └── HomePage.tsx
    │   └── login/
    │       ├── index.ts
    │       └── ui/
    │           └── LoginPage.tsx
    ├── widgets/                         # 페이지 구성 단위의 복합 UI(features + entities)
    │   ├── layout/
    │   │   ├── index.ts
    │   │   └── ui/
    │   │       └── Navbar.tsx
    │   └── login/
    │       ├── index.ts
    │       └── ui/
    │           └── Login.tsx
    ├── features/                         # 기능 단위: 사용자 행동 중심(무엇을 함)
    │   └── login/
    │       ├── index.ts
    │       ├── ui/
    │       │  ├── LoginForm.tsx        # 로그인 폼 컴포넌트
    │       │  ├── LoginError.tsx       # 로그인 에러 컴포넌트
    │       │  └── PasswordFind.tsx     # 패스워드 찾기 컴포넌트
    │       │  
    │       ├── lib/                    # 기능에 특화된 로직을 담는 훅         
    │       │  └── useLogin.ts
    │       ├── model/
    │       │  └── useLoginMutation.ts  # React-Query, SWR 용 서버 사이드 스테이트   
    │       └── stores/
    │           └── loginStore.ts        # 로그인 성공/실패 상태
    │
    ├── entities/                         # 도메인 모델 계층 : 데이터 중심(무엇)
    │   └── user/
    │       ├── lib/                     # User Api 가공
    │       │  └── UserAdaptor.ts 
    │       ├── api/                     # User Api 호출
    │       │  └── ApiUser.ts
    │       └── config/
    │           ├── model.ts             # User 타입, 예를 들어 { id: string; email: string; role: 'admin'}
    │           └── lib.ts               # isAdmin(user: User): boolean 같은 순수 함수로 유저 관련 도메인 규칙 포함
    │
    └── shared/                           # 공통 컴포넌트, 유틸, 스타일 등
        ├── ui/                           # 공통 UI 컴포넌트(Button, Modal)
        ├── lib/                          # 공통 유틸 함수
        ├── api/                          # 공통 API 설정
        ├── config/                       # 전역 설
        ├── constants/                    # routes, enums 등
        ├── types/                        # 전역 타입 정의
        └── hooks/                        # 전역 커스텀 훅
```

## Role for each function

| 파일 위치                         | 설명                                |
|----------------------------------|-----------------------------------|
| useLogin.ts                    | 로그인 실행 로직 (ApiUser, UserAdaptor, loginStore 활용) |
| useLoginMutation.ts            | React Query 기반 로그인 요청 (선택적 캐시 사용)           |
| loginStore.ts                  | 로그인 상태 저장 (user, error 등)                        |
| UserAdaptor.ts                 | 백엔드 응답 데이터 유효성 검사 및 보정                   |
| ApiUser.ts                    | 실제 API 호출 로직                                        |
| pages/login/ui/loginPage.tsx  | 페이지 진입 UI                                           |
| widgets/login/ui/Login.tsx    | 로그인 폼 UI 조립                                        |
| features/login/ui/LoginForm.tsx | 입력 UI 및 로그인 핸들러                                |
