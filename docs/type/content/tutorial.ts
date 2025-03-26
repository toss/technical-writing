const tutorial = {
before: {
    code: `# Next.js로 SSR 페이지 만들기

이 문서는 Next.js를 활용하여 서버 사이드 렌더링(SSR) 페이지를 만드는 방법을 안내합니다.

## 학습 목표

- Next.js 프로젝트를 생성하고 실행하는 방법을 배워요.
- getServerSideProps를 이용해 동적인 SSR 페이지를 구현해요.
- 서버 API를 통해 데이터를 받아와 페이지에 렌더링하는 방법을 익혀요.

## 1단계: 환경 설정

터미널에서 아래 명령어를 실행하여 Next.js 프로젝트를 생성하고 실행하세요.

\`\`\`bash
npx create-next-app my-next-app
cd my-next-app
npm run dev
\`\`\`

브라우저에서 \`http://localhost:3000\`을 열어 Next.js 기본 화면이 보이면 성공입니다.

## 2단계: SSR 페이지 추가하기

\`pages/server-side.js\` 파일을 생성하고 아래 코드를 입력하세요.

\`\`\`jsx
export async function getServerSideProps() {
  return {
      props: { time: new Date().toISOString() },
  };
}

export default function ServerSidePage({ time }) {
  return <h1>현재 서버 시간: {time}</h1>;
}
\`\`\`

브라우저에서 \`http://localhost:3000/server-side\`에 접속하여 현재 서버 시간이 업데이트되는지 확인하세요.

## 3단계: API 요청을 활용한 SSR

Next.js의 API 라우트를 이용해 데이터를 제공할 수 있습니다.  
\`pages/api/time.js\` 파일을 생성하고 아래 코드를 입력하세요.

\`\`\`jsx
export default function handler(req, res) {
  res.status(200).json({ time: new Date().toISOString() });
}
\`\`\`

브라우저에서 \`http://localhost:3000/api/time\`에 접속하여 JSON 형태의 시간이 출력되면 성공입니다.

## 다음 단계

- Next.js의 정적 사이트 생성(SSG) 및 ISR(Incremental Static Regeneration)에 대해 학습해보세요.
- Next.js의 라우팅 및 동적 라우트에 대해 더 깊게 알아보세요.
- API 라우트를 활용하여 더 복잡한 백엔드 로직을 구현해보세요.`,
    sections: [
    {
        explanation: "문서의 초반에 튜토리얼을 완료하면 달성할 목표를 명확하게 알려줘요.",
        lineStart: 5,
        lineEnd: 9,
    },
    {
        explanation: "단계별로 설명하고, 각 단계를 잘 완료했을 때 기대할 수 있는 결과도 명확하게 알려줘요. 그래야 독자 스스로 각 단계를 성공했는지 확인할 수 있어요.",
        lineStart: 11,
        lineEnd: 11,
    },
    {
        explanation: "실제로 활용할 수 있는 예제 코드를 제공해요.",
        lineStart: 27,
        lineEnd: 37,
    },
    {
      explanation: "다음 단계로 학습할 내용을 제시하는 것도 좋아요.",
      lineStart: 54,
      lineEnd: 60,
    },
    ],
},
};

export default tutorial;
