const troubleShooting = {
    content: {
      code: `# \`Module not found: Can't resolve 'react'\` 에러 해결 방법
  
  이 문서는 \`Module not found: Can't resolve 'react'\` 에러가 발생했을 때,  
  오류 메시지와 로그를 분석하여 문제의 원인과 증상을 파악하고,  
  명확한 해결 방법을 제시하는 가이드입니다.
  
  ## 1. 패키지 설치 여부 확인
  
  React 패키지가 설치되어 있지 않거나, \`node_modules\` 디렉토리 내에서 찾을 수 없는 경우  
  이 에러가 발생할 수 있습니다. 터미널에서 아래 명령어를 실행하여 React 패키지의  
  설치 상태를 확인하세요.
  
  \`\`\`bash
  npm list react
  \`\`\`
  
  ## 2. 패키지 재설치 및 환경 점검
  
  문제가 지속되면, React 및 React-DOM 패키지를 재설치해 보세요. 또한,  
  \`node_modules\` 디렉토리와 \`package-lock.json\` 파일을 삭제한 후 다시 설치하면  
  환경 문제가 해결될 수 있습니다.
  
  \`\`\`bash
  npm install react react-dom
  
  # 또는 다음 명령어로 재설치
  rm -rf node_modules package-lock.json
  npm install
  
  # 이후 프로젝트를 실행하세요.
  npm start
  \`\`\`
  
  ## 3. [선택] Node.js 버전 확인 및 조정
  
  Node.js 버전이 호환되지 않는 경우에도 문제가 발생할 수 있습니다.  
  현재 Node.js 버전을 확인하고, 필요하다면 버전을 조정하세요.
  
  \`\`\`bash
  node -v
  nvm use 18
  \`\`\`
  `,
      sections: [
        {
          code: `# \`Module not found: Can't resolve 'react'\` 에러 해결 방법
  
  이 문서는 \`Module not found: Can't resolve 'react'\` 에러가 발생했을 때,  
  오류 메시지와 로그를 분석하여 문제의 원인과 증상을 파악하고,  
  명확한 해결 방법을 제시하는 가이드입니다.`,
          explanation: `기본 지식 제공: 이 부분은 에러의 근본 원인과 기본 개념에 대한 지식을 충분히 제공합니다.`,
          lineStart: 1,
          lineEnd: 4,
        },
        {
          code: `## 1. 패키지 설치 여부 확인
  
  React 패키지가 설치되어 있지 않거나, \`node_modules\` 디렉토리 내에서 찾을 수 없는 경우  
  이 에러가 발생할 수 있습니다. 터미널에서 아래 명령어를 실행하여 React 패키지의  
  설치 상태를 확인하세요.
  
  \`\`\`bash
  npm list react
  \`\`\``,
          explanation: `즉시 적용 가능한 해결 방법: 이 섹션은 React 패키지의 설치 여부를 확인함으로써,  
  즉각적으로 문제를 진단하고 대응할 수 있는 방법을 제공합니다.`,
          lineStart: 5,
          lineEnd: 12,
        },
        {
          code: `## 2. 패키지 재설치 및 환경 점검
  
  문제가 지속되면, React 및 React-DOM 패키지를 재설치해 보세요. 또한,  
  \`node_modules\` 디렉토리와 \`package-lock.json\` 파일을 삭제한 후 다시 설치하면  
  환경 문제가 해결될 수 있습니다.
  
  \`\`\`bash
  npm install react react-dom
  
  # 또는 다음 명령어로 재설치
  rm -rf node_modules package-lock.json
  npm install
  
  # 이후 프로젝트를 실행하세요.
  npm start
  \`\`\``,
          explanation: `환경별 차이 고려: 이 부분은 운영체제나 라이브러리 버전 차이를 감안하여,  
  재설치 및 환경 점검을 통해 문제를 해결할 수 있는 방법을 제시합니다.`,
          lineStart: 13,
          lineEnd: 22,
        },
        {
          code: `## 3. [선택] Node.js 버전 확인 및 조정
  
  Node.js 버전이 호환되지 않는 경우에도 문제가 발생할 수 있습니다.  
  현재 Node.js 버전을 확인하고, 필요하다면 버전을 조정하세요.
  
  \`\`\`bash
  node -v
  nvm use 18
  \`\`\``,
          explanation: `즉시 적용 가능한 해결 방법: 이 섹션은 Node.js 버전 확인과 조정을 통해,  
  빠르게 문제에 대응할 수 있도록 안내합니다.`,
          lineStart: 23,
          lineEnd: 29,
        },
      ],
    },
  };
  
  export default troubleShooting;
  