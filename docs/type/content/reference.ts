const reference = {
  content: {
    code: `# \`fetch\` API

\`fetch\` 함수는 네트워크 리소스를 요청하고 응답을 처리하는 API예요. 비동기적으로 동작하고, \`Promise<Response>\` 객체를 반환해요. \`fetch\` 함수를 활용하면 클라이언트와 서버 간 데이터를 쉽게 주고받을 수 있어, REST API와 같은 서비스와의 통신을 효율적으로 처리할 수 있어요.
\`XMLHttpRequest\`보다 간결한 문법을 제공하고, \`async/await\`와 함께 사용하면 가독성이 뛰어나다는 장점도 있어요.

## 시그니처

\`\`\`typescript
fetch(input: RequestInfo, init?: RequestInit): Promise<Response>
\`\`\`

## 매개변수

- \`input\` (필수): 요청할 URL 또는 \`Request\` 객체예요.
- \`init\` (선택): 요청의 옵션을 담은 객체예요.
  - \`method\`: HTTP 요청 방식 (GET, POST, PUT, DELETE 등)
  - \`headers\`: 요청에 포함할 헤더 정보 (예: { 'Content-Type': 'application/json' })
  - \`body\`: 요청 본문 (예: JSON.stringify({ name: 'John' }))
  - \`mode\`: 요청 모드 (cors, no-cors, same-origin)
  - \`credentials\`: 쿠키 포함 여부 (omit, same-origin, include)
  - \`cache\`: 캐시 정책 (default, no-store, reload, force-cache 등)
  - \`redirect\`: 리디렉션 처리 방식 (follow, error, manual)

## 반환값

\`fetch\`는 \`Promise<Response>\` 객체를 반환해요.

  - \`ok\`: 응답이 성공(200~299)했는지 여부 (true / false)
  - \`status\`: HTTP 상태 코드 (200, 404, 500 등)
  - \`headers\`: 응답 헤더 (Headers 객체)
  - \`json\`(): 응답을 JSON으로 변환 (Promise<object>)
  - \`text\`(): 응답을 문자열로 변환 (Promise<string>)
  - \`blob\`(): 응답을 Blob 객체로 변환 (Promise<Blob>)


## 사용 예제

### 기본 GET 요청

\`\`\`javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('네트워크 응답이 올바르지 않아요.');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('오류 발생:', error));
\`\`\`


### POST 요청 예제

\`\`\`javascript
fetch('https://api.example.com/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John', age: 30 }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('요청이 실패했어요.');
    }
    return response.json();
  })
  .then(data => console.log('서버 응답:', data))
  .catch(error => console.error('오류 발생:', error));
\`\`\`

### async/await 사용

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
      throw new Error('네트워크 응답이 올바르지 않아요.');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('오류 발생:', error);
  }
}

fetchData();
\`\`\`
`,
    sections: [
        {
            "explanation": "fetch 함수에 대해 간단히 설명해요. 기능 뿐만 아니라 이 함수가 제공하는 가치를 설명해요.",
            "lineStart": 3,
            "lineEnd": 4
        },
        {
            "explanation": "함수의 시그니처를 설명해요. 시그니처를 작성하면 함수의 입력값과 반환값을 직관적으로 파악할 수 있어요. 이를 통해 개발자는 함수의 동작 방식을 빠르게 이해하고, 올바른 매개변수를 전달할 수 있어요.",
            "lineStart": 8,
            "lineEnd": 10
        },
        {
            "explanation": "fetch 함수의 매개변수와 반환값을 정리해요. Response 객체의 주요 속성을 나열하고, 반환값을 다루는 방법을 쉽게 이해할 수 있도록 했습니다.",
            "lineStart": 12,
            "lineEnd": 30
        },
        {
            "explanation": "기본적인 사용 예제를 제공해요. fetch를 활용하여 데이터를 가져오는 방법과 오류 처리를 함께 설명했습니다.",
            "lineStart": 38,
            "lineEnd": 71
        },
        {
            "explanation": "기본 예제 뿐 아니라 독자가 활용할 수 있도록 추가로 참고할만한 코드 예제도 추가할 수 있어요.",
            "lineStart": 73,
            "lineEnd": 92
        },
    ]
  },
};

export default reference;
