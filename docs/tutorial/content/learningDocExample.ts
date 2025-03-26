const learningDocExample = {
  before: {
    code: `# React 컴포넌트 만들기

React 컴포넌트를 만드는 방법을 알아봅시다.

## 함수형 컴포넌트

함수형 컴포넌트는 다음과 같이 만듭니다.

function Welcome() {
  return <h1>Hello</h1>;
}

## Props 사용하기

props를 사용하면 컴포넌트에 데이터를 전달할 수 있습니다.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
    sections: [
      {
        code: "React 컴포넌트를 만드는 방법을 알아봅시다.",
        explanation: "문서의 목적과 학습 목표가 명확하지 않아요. 독자가 이 문서를 읽고 어떤 결과를 기대할 수 있는지 한눈에 파악하기 어려워요",
        lineStart: 3,
        lineEnd: 3,
      },
      {
        code: `function Welcome() {
  return <h1>Hello</h1>;
}`,
        explanation: "예제를 실행하기 어렵고, 실제 사용 맥락도 부족해요. 예제는 실제로 실행했을 때 작동하고, 이해도를 높이는 내용이어야 해요",
        lineStart: 9,
        lineEnd: 11,
      },
      {
        code: `## Props 사용하기

props를 사용하면 컴포넌트에 데이터를 전달할 수 있습니다.`,
        explanation: "갑자기 Props라는 개념이 나왔어요. 앞 부분과 이어지는 설명이 부족해서 단계별로 학습하기 어려워요 개념을 먼저 이해하고, 단계별로 따라 하면서 자연스럽게 학습할 수 있어야 해요.",
        lineStart: 13,
        lineEnd: 19,
      },
    ],
  },
  after: {
    code: `# React로 첫 컴포넌트 만들기

이 튜토리얼에서는 React 컴포넌트를 만들고 데이터를 전달하는 방법을 배워요.

## 학습 목표

- 함수형 컴포넌트의 기본 구조를 이해해요.  
- props를 사용해서 데이터를 전달하는 방법을 배워요.  
- 실제로 동작하는 컴포넌트를 만들어봐요.  

## 준비사항

- Node.js를 설치해요. (v14 이상)  
- 코드 에디터를 준비해요.  
- HTML과 JavaScript에 대한 기본 지식을 갖추고 있어야 해요.  

## 1단계. 프로젝트 설정하기

새로운 React 프로젝트를 만들어요.

\`\`\`bash
npx create-react-app my-first-component
cd my-first-component
\`\`\`

## 2단계. 첫 컴포넌트 만들기

\`src/Welcome.js\` 파일을 생성하고 다음 코드를 작성해요.

\`\`\`jsx
function Welcome() {
  return <h1>Hello</h1>;
}

export default Welcome;
\`\`\`

2. \`App.js\`에서 컴포넌트를 사용해요.

\`\`\`jsx
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
\`\`\`

## 3단계. Props 추가하기

1. \`Welcome\` 컴포넌트를 수정해서 Props로 데이터를 전달받도록 만들어요.

Props는 "Properties"의 줄임말로, 부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용해요. React에서는 컴포넌트를 함수처럼 사용할 수 있고 함수에 매개변수를 전달하듯 props를 전달할 수 있어요.  

Props의 특징은 다음과 같아요.

\- 단방향 데이터 흐름: 부모에서 자식으로만 전달돼요.  
\- 읽기 전용(Read-Only): 자식 컴포넌트에서는 props를 변경할 수 없어요.  
\- 유연성: 다양한 데이터 유형을 전달할 수 있어요 (문자열, 숫자, 객체 등).  

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

2. \`App.js\`에서 props를 전달해요.

다음과 같이 \`name\` prop에 \`Sara\`를 전달하면 "Hello, Sara"라고 출력되는 것을 확인할 수 있어요.

\`\`\`jsx
<Welcome name="Sara" />
\`\`\`
`,
    sections: [
      {
        code: `이 튜토리얼에서는 React 컴포넌트를 만들고 데이터를 전달하는 방법을 배워요.

## 학습 목표

- 함수형 컴포넌트의 기본 구조를 이해해요.  
- props를 사용해서 데이터를 전달하는 방법을 배워요.  
- 실제로 동작하는 컴포넌트를 만들어봐요.`,
        explanation:
          "문서의 목적과 학습 목표를 명확하게 제시했어요. 이제 학습자가 목표를 명확히 이해하고 학습 계획을 세울 수 있어요.",
        lineStart: 3,
        lineEnd: 9,
      },
      {
        code: `## 준비사항

- Node.js를 설치해요. (v14 이상)  
- 코드 에디터를 준비해요.  
- HTML과 JavaScript에 대한 기본 지식을 갖추고 있어야 해요.`,
        explanation:
          "학습을 시작하기 전에 필요한 도구와 사전 지식을 명확하게 안내했어요. 이제 학습자가 준비 과정에서 혼란을 겪지 않고 바로 실습을 시작할 수 있어요.",
        lineStart: 11,
        lineEnd: 15,
      },
      {
        code: `## 1단계. 프로젝트 설정하기

새로운 React 프로젝트를 만들어요. 먼저 \`my-first-component\`라는 프로젝트를 만들고, 프로젝트 디렉터리에 접근해요.

\`\`\`bash
npx create-react-app my-first-component
cd my-first-component
\`\`\``,
        explanation: "단계별로 명령어를 제공해서 프로젝트를 설정할 수 있도록 안내했어요. 이제 학습자가 단계별로 차근차근 따라가며 설정을 완료할 수 있어요.",
        lineStart: 17,
        lineEnd: 24,
      },{
        code: `Props는 "Properties"의 줄임말로, 부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용돼요. React에서는 컴포넌트를 함수처럼 사용할 수 있으며, 함수에 매개변수를 전달하듯 props를 전달할 수 있어요.
        
Props의 특징은 다음과 같아요.

\- 단방향 데이터 흐름: 부모에서 자식으로만 전달돼요.  
\- 읽기 전용(Read-Only): 자식 컴포넌트에서는 props를 변경할 수 없어요.  
\- 유연성: 다양한 데이터 유형(문자열, 숫자, 객체 등)을 전달할 수 있어요 
`,
        explanation: "Props의 개념과 특징을 명확하게 설명했어요. 앞 내용과도 자연스럽게 연결돼서 학습자가 props의 기본 개념을 확실히 이해할 수 있어요.",
        lineStart: 52,
        lineEnd: 62,
      }
    ],
  },
};
export default learningDocExample;