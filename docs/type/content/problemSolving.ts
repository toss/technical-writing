const problemSolving = {
  howToGuideDocExample: {
    content: {
      code: `# React에서 자동 재시도 기능 통합 가이드

자동 재시도 로직을 React 컴포넌트에 통합하여 API 요청 실패 시 자동으로 재시도하는 기능을 구현하는 방법을 알려드려요.

이 기능으로 네트워크 불안정 상황에서도 안정적인 데이터 요청을 보장하여 사용자 경험을 개선할 수 있어요.

## UI 구현하기

다음 예제는 자동 재시도 로직을 활용해 API 데이터를 불러오고, 로딩 상태와 오류 처리를 포함한 UI를 구현하는 코드입니다.

\`\`\`jsx
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", {}, 3, 1000)
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>데이터 로딩 중...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div>
          <h2>API 데이터</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
\`\`\`
`,
    sections: [
      {
        explanation:
          "이 문서의 목표와 타겟 독자를 명확히 정의했어요. 이 가이드는 '자동 재시도 기능 구현'이라는 구체적인 과제에 초점을 두고 있으며, 네트워크 불안정 상황에서도 안정적인 데이터 요청이 가능한 애플리케이션을 만드는 것이 최종 목표입니다. 독자는 이 문서를 통해 해당 기능의 구현 방법뿐만 아니라, 구현의 필요성과 효과에 대해서도 이해할 수 있습니다.",
        lineStart: 3,
        lineEnd: 5,
      },
      {
        explanation:
          "자동 재시도 로직(`fetchWithRetry`)을 활용해 API 데이터를 안정적으로 요청하고 그 결과를 상태(state)에 반영하는 방법을 상세히 알려줘요.",
        lineStart: 9,
        lineEnd: 48,
      },
    ],
  },
},
  troubleShootingDocExample: {
    content: {
      code: `# "Module not found: Can't resolve 'react'" 에러 해결 가이드

"Module not found: Can't resolve 'react'" 에러가 발생했을 때 해결 방법을 알려드려요.

## 1. 패키지 설치 여부 확인

이 에러는 React 패키지가 설치되어 있지 않거나, \`node_modules\` 디렉토리 내에 해당 모듈이 존재하지 않을 때 발생합니다.  
터미널에서 아래 명령어를 실행하여 React 패키지가 설치되어 있는지 확인하세요.

\`\`\`bash
npm list react
\`\`\`

## 2. 패키지 재설치 및 환경 점검

문제가 계속된다면, React 및 React-DOM 패키지를 재설치해 보세요.  

\`node_modules\` 디렉토리와 \`package-lock.json\` 파일을 삭제한 후 다시 설치하면, 환경 관련 문제가 해결될 가능성이 높습니다.

\`\`\`bash
# React 및 React-DOM 재설치
npm install react react-dom

# 또는, 재설치 절차:
rm -rf node_modules package-lock.json
npm install

# 이후 프로젝트 실행
npm start
\`\`\`

## 3. [선택] Node.js 버전 확인 및 조정

Node.js 버전이 호환되지 않는 경우에도 이 에러가 발생할 수 있어요. 현재 Node.js 버전을 확인하고, 필요하다면 호환되는 버전으로 전환하세요.

\`\`\`bash
node -v
nvm use 18
\`\`\`
`,
    sections: [
      {
        explanation:
          "첫 번째 단계에서 문제의 가장 기본적인 원인을 신속하게 진단할 수 있도록 안내해서 빠르게 문제를 해결할 수 있도록 도와줘요.",
        lineStart: 5,
        lineEnd: 12,
      },
      {
        explanation:
          "다른 해결 방법도 제안해서 해결 가능성을 높여요. 또, \`npm start\`를 실행하는 단계를 포함하여 최종적으로 문제가 해결되었는지 확인할 수 있도록 구성했어요.",
        lineStart: 14,
        lineEnd: 30,
      }],
    },
   }
  }

export default problemSolving;
