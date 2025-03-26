const getStarted = {
  before: {
    code: `# React 시작하기  

React는 컴포넌트 기반으로 UI를 만들 수 있는 라이브러리예요. 여기서는 가장 기본적인 React 프로젝트를 실행해보고 동작 방식을 이해해요.

## React 실행하기

### 1️. 프로젝트 만들기

npx create-react-app my-app
cd my-app
npm start

개발 서버가 실행된 후, 브라우저에서 \`http://localhost:3000\`을 열어 React 기본 화면을 확인하세요.

## React에서 화면을 만드는 방법

React에서는 컴포넌트라는 개념을 사용해서 화면을 구성해요. 컴포넌트는 UI의 가장 작은 단위예요.

### 기본 컴포넌트 만들기

\`src/App.js\` 파일을 열고 내용을 아래처럼 바꿔보세요.

function App() {
  return <h1>안녕하세요! React를 시작해 봅시다.</h1>;
}

export default App;

파일을 저장한 후, 브라우저를 새로고침하면 React 기본 화면 대신 "안녕하세요! React를 시작해 봅시다."라는 문구가 표시됩니다.

## 직접 컴포넌트 만들기

1. \`src\` 폴더 안에 \`Welcome.js\` 파일을 생성하세요.
2. 다음 코드를 입력하고 저장하세요.

function Welcome({ name }) {
  return <h2>안녕하세요, {name}님!</h2>;
}

export default Welcome;

이제 \`App.js\`에서 새로운 \`Welcome\` 컴포넌트를 추가해보세요.

import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <h1>React 학습을 시작해봅시다!</h1>
      <Welcome name="주연" />
    </div>
  );
}

export default App;`,
    sections: [
      {
        code: `# React 시작하기  

React는 컴포넌트 기반으로 UI를 만들 수 있는 라이브러리예요. 가장 기본적인 React 프로젝트를 실행해보고 동작 방식을 이해해요.`,
        explanation: `필수 개념과 기본 사용법을 안내해요. 문서의 학습 목표를 명확히 제시해야 해요.`,
        lineStart: 1,
        lineEnd: 3,
      },
      {
        code: `### 1️. 프로젝트 만들기

npx create-react-app my-app
cd my-app
npm start`,
        explanation: `가장 기본적인 설치 및 기본 설정을 안내해요. 실행 후 결과를 확인하는 방법도 알려주세요.`,
        lineStart: 7,
        lineEnd: 13,
      },
      {
        code: `### 기본 컴포넌트 만들기

\`src/App.js\` 파일을 열고 내용을 아래처럼 바꿔보세요.

function App() {
  return <h1>안녕하세요! React를 시작해 봅시다.</h1>;
}

export default App;`,
        explanation: `사용자가 최소한의 코드로 바로 실행할 수 있도록 구성해요. 실행 결과를 확인하는 방법도 알려주세요. 각 단계를 잘 완료했을 때 기대할 수 있는 결과를 명확히 알려줘야 독자 스스로 각 단계를 성공했는지 확인할 수 있어요.`,
        lineStart: 23,
        lineEnd: 29,
      }
    ],
  },
  after: {
    code: `# React 시작하기

이 문서는 React를 처음 시작하는 사용자를 위해 기본적인 설치 및 설정 방법을 안내합니다.

## 학습 목표

- React 프로젝트를 설치하고 실행하는 방법을 배워요.
- 컴포넌트를 만들어 보고 기본 개념을 익혀요.
- 최소한의 코드로 바로 실행할 수 있도록 실습해요.

## 1단계: 프로젝트 생성 및 실행

터미널에서 다음 명령어를 실행하세요.

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

브라우저에서 \`http://localhost:3000\`을 열어 React 기본 화면을 확인하세요.

## 2단계: 기본 컴포넌트 만들기

\`src/App.js\` 파일을 열고 아래처럼 수정하세요.

\`\`\`jsx
function App() {
  return <h1>안녕하세요! React를 시작해 봅시다.</h1>;
}

export default App;
\`\`\`

파일을 저장한 후, 브라우저를 새로고침하여 변경 사항을 확인하세요.

## 3단계: 새로운 컴포넌트 추가하기

1. \`src/Welcome.js\` 파일을 생성하고 아래 코드를 입력하세요.

\`\`\`jsx
function Welcome({ name }) {
  return <h2>안녕하세요, {name}님!</h2>;
}

export default Welcome;
\`\`\`

2. \`App.js\`에서 \`Welcome\` 컴포넌트를 불러와 사용하세요.

\`\`\`jsx
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <h1>React 학습을 시작해봅시다!</h1>
      <Welcome name="주연" />
    </div>
  );
}

export default App;
\`\`\`

브라우저에서 "안녕하세요, 주연님!"이라는 문구가 보이면 컴포넌트가 정상적으로 추가된 것입니다.`,
    sections: [
      {
        code: `## 학습 목표

- React 프로젝트를 설치하고 실행하는 방법을 배워요.
- 컴포넌트를 만들어 보고 기본 개념을 익혀요.
- 최소한의 코드로 바로 실행할 수 있도록 실습해요.`,
        explanation: `필수 개념과 기본 사용법을 안내해요.  
학습 목표를 명확히 정의하여 독자가 기대할 수 있는 내용을 파악할 수 있도록 개선했어요.`,
        lineStart: 3,
        lineEnd: 7,
      },
      {
        code: `## 1단계: 프로젝트 생성 및 실행

터미널에서 다음 명령어를 실행하세요.

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

브라우저에서 \`http://localhost:3000\`을 열어 React 기본 화면을 확인하세요.`,
        explanation: `가장 기본적인 설치 및 기본 설정을 안내해요.  
실행 결과를 확인하는 방법을 명시하여 학습자의 이해도를 높였어요.`,
        lineStart: 8,
        lineEnd: 16,
      },
      {
        code: `## 2단계: 기본 컴포넌트 만들기

\`src/App.js\` 파일을 열고 아래처럼 수정하세요.

\`\`\`jsx
function App() {
  return <h1>안녕하세요! React를 시작해 봅시다.</h1>;
}

export default App;
\`\`\`

파일을 저장한 후, 브라우저를 새로고침하여 변경 사항을 확인하세요.`,
        explanation: `사용자가 최소한의 코드로 바로 실행할 수 있도록 구성해요.  
실행 후 변경 사항을 확인하는 단계를 추가했어요.`,
        lineStart: 17,
        lineEnd: 27,
      },
      {
        code: `## 3단계: 새로운 컴포넌트 추가하기

1. \`src/Welcome.js\` 파일을 생성하고 아래 코드를 입력하세요.

\`\`\`jsx
function Welcome({ name }) {
  return <h2>안녕하세요, {name}님!</h2>;
}

export default Welcome;
\`\`\``,
        explanation: `필수 개념과 기본 사용법을 안내해요.  
Props의 개념을 더 명확히 설명하여, 독자가 쉽게 이해할 수 있도록 개선했어요.`,
        lineStart: 28,
        lineEnd: 38,
      },
    ],
  },
};
export default getStarted;
