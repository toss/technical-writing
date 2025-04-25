const troubleShootingDocExample = {
  before: {
    code: `# Hydration 오류 해결하기

Next.js에서 클라이언트와 서버의 렌더링 결과가 불일치하면 Hydration 오류가 발생할 수 있어요. React에서는 \`useEffect\`를 활용해 특정 데이터를 클라이언트에서만 다르게 처리할 수 있습니다.

## 해결 방법

function TimeComponent() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return <p>현재 시간: {time}</p>;
}
  
\`useEffect\`를 사용하여 클라이언트에서만 특정 코드를 실행하도록 수정하고, 서버 렌더링과 클라이언트 렌더링이 동일한 결과를 출력하도록 코드를 수정해요.
`,
    sections: [
      {
        code: `# Next.js에서 Hydration 오류 해결하기

Next.js에서 클라이언트와 서버의 렌더링 결과가 불일치하면 Hydration 오류가 발생할 수 있습니다.`,
        explanation: "문서의 목표가 불분명해요. Hydration 오류가 무엇인지 정보가 없고, 해결 방법이 구조적으로 정리되지 않았어요.",
        lineStart: 1,
        lineEnd: 3
      },
      {
        code: `function TimeComponent() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return <p>현재 시간: {time}</p>;
}
  `,
        explanation: "설명과 코드 예제의 흐름이 자연스럽지 않아요. 코드가 먼저 등장해서 인지 부하가 생겨요.",
        lineStart: 7,
        lineEnd: 15
      }
    ]
  },
  after: {
    code: `# Next.js에서 Hydration 오류를 방지하는 방법

Next.js에서 서버와 클라이언트의 렌더링 결과가 다를 때 발생하는 Hydration 오류를 방지하는 방법을 알아볼게요.

## 문제

서버에서 생성된 HTML과 클라이언트에서 렌더링된 결과가 다르면 Hydration 오류가 발생할 수 있어요. 클라이언트가 전달받은 정적 HTML에 이벤트 핸들러나 동적인 기능을 부여하기 위해 JavaScript 코드를 실행하는 과정을 뜻해요. 예를 들어, \`Date.now()\`를 직접 사용하면 서버와 클라이언트에서 서로 다른 시간이 표시됩니다.

## 해결 방법

Hydration 오류를 방지하려면 클라이언트에서만 실행해야 하는 코드를 \`useEffect\`로 감싸야 해요.

### 잘못된 코드 (Hydration 오류 발생)

다음 코드에서는 서버와 클라이언트의 \`Date.now()\` 값이 다르기 때문에 오류가 발생해요.

function TimeComponent() {
  return <p>현재 시간: {Date.now()}</p>;
}

### 올바른 코드 (Hydration 오류 방지)

\`useEffect\`를 사용하여 클라이언트에서만 \`Date.now()\`를 업데이트하도록 수정해요.

function TimeComponent() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return <p>현재 시간: {time}</p>;
}

### 참고 문서

- [Next.js 공식 문서](https://nextjs.org/docs)`,
    sections: [
      {
        code: `# Next.js에서 Hydration 오류를 방지하는 방법

Next.js에서 서버와 클라이언트의 렌더링 결과가 다를 때 발생하는 Hydration 오류를 방지하는 방법을 알아봅니다.`,
        explanation: "문서의 목적과 해결하고자 하는 문제를 제목과 도입부에서 명확히 설명해요. 또, 'Hydration 오류'의 개념을 독자가 알 거라고 가정하지 않고, 개념 설명부터 시작해요.",
        lineStart: 5,
        lineEnd: 11
      },
      {
        code: `### 잘못된 코드 (Hydration 오류 발생)

다음 코드에서는 서버와 클라이언트의 \`Date.now()\` 값이 다르기 때문에 오류가 발생합니다.

function TimeComponent() {
  return <p>현재 시간: {Date.now()}</p>;
}`,
        explanation: "문제 상황을 구체적인 코드로 제시해요. 잘못된 사례를 먼저 보여주어 문제를 이해하기 쉽게 해요.",
        lineStart: 15,
        lineEnd: 19
      },
      {
        code: `### 올바른 코드 (Hydration 오류 방지)

\`useEffect\`를 사용하여 클라이언트에서만 \`Date.now()\`를 업데이트하도록 수정합니다.

function TimeComponent() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return <p>현재 시간: {time}</p>;
}`,
        explanation: "해결을 위한 올바른 구현 방법을 코드와 함께 상세히 설명해서 개선했어요.",
        lineStart: 23,
        lineEnd: 33
      }
    ]
  },
  description: "문서 작성 방식의 개선 사례를 통해 더 효과적인 기술 문서 작성법을 알아봅니다.",
  type: "learning"
}; 

export default troubleShootingDocExample;