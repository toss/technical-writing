import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginOpenGraph } from 'rsbuild-plugin-open-graph';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '테크니컬 라이팅 가이드',
  icon: '/toss-logo.png',
  logo: {
    light: '/toss-logo.png',
    dark: '/toss-logo.png',
  },
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    [
      'meta',
      { property: 'og:description', content: '개발자를 위한 글쓰기 기본기' },
    ],
    ['meta', { property: 'og:url', content: 'https://technical-writing.dev/' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://static.toss.im/illusts/tech_writing_guide.png',
      },
    ],
  ],
  globalStyles: path.join(__dirname, './styles/index.css'),
  themeConfig: {
    darkMode: false,
    searchPlaceholderText: '검색',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/toss/technical-writing',
      },
    ],
    nav: [
      {
        text: '시작하기',
        link: '/overview',
        position: 'left',
      },
      {
        text: '튜토리얼',
        link: '/tutorial/basic-documents',
        position: 'left',
      },
      {
        text: 'AI와 함께 쓰기',
        link: '/tutorial/review-prompt',
        position: 'left',
      },
    ],
    sidebar: {
      '/': [
        {
          text: '시작하기',
          link: 'overview',
        },
        {
          text: '튜토리얼',
          items: [
            {
              text: '기본 문서 작성하기',
              link: '/tutorial/basic-documents',
            },
            {
              text: '문서 구조 만들기',
              link: '/tutorial/structure',
            },
            {
              text: 'AI와 함께 쓰기',
              link: '/tutorial/review-prompt',
            },
          ],
        },
        {
          text: 'Step 1. 문서 유형 정하기',
          items: [
            {
              text: '소개',
              link: 'type/index',
            },
            {
              text: '학습을 위한 문서',
              link: '/type/learning',
            },
            {
              text: '문제 해결을 위한 문서',
              link: '/type/problem-solving',
            },
            {
              text: '참조를 위한 문서',
              link: '/type/reference',
            },
            {
              text: '깊은 이해를 위한 문서',
              link: '/type/explanation',
            },
          ],
        },
        {
          text: 'Step 2. 정보 구조 만들기',
          collapsed: true,
          items: [
            {
              text: '소개',
              link: '/architecture/index',
            },
            {
              text: '한 페이지에서 하나만 다루기',
              link: '/architecture/one-thing-per-one-page',
            },
            {
              text: '가치를 먼저 제공하기',
              link: '/architecture/value-first-cost-later',
            },
            {
              text: '효과적인 제목 쓰기',
              link: '/architecture/heading',
            },
            {
              text: '개요 빠트리지 않기',
              link: '/architecture/overview',
            },
            {
              text: '예측 가능하게 하기',
              link: '/architecture/predictability',
            },
          ],
        },
        {
          text: 'Step 3. 문장 다듬기',
          collapsed: true,
          items: [
            {
              text: '소개',
              link: '/sentence/index',
            },
            {
              text: '문장의 주체를 분명하게 하기',
              link: '/sentence/subject',
            },
            {
              text: '필요한 정보만 남기기',
              link: '/sentence/compactness',
            },
            {
              text: '구체적으로 쓰기',
              link: '/sentence/concreteness',
            },
            {
              text: '자연스러운 한국어 표현 쓰기',
              link: '/sentence/natural-kor-expression',
            },
            {
              text: '일관되게 쓰기',
              link: '/sentence/consistency',
            },
          ],
        },
      ],
    },
  },
  markdown: {
    mdxRs: false,
    checkDeadLinks: true,
  },
});
