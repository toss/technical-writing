import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginOpenGraph } from 'rsbuild-plugin-open-graph';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '테크니컬 라이팅 가이드',
  icon: '/toss-logo.png',
  lang: 'ko',
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
        link: '/tutorial',
        position: 'left',
      },
      {
        text: 'AI와 함께 쓰기',
        link: '/ai-writing/index',
        position: 'left',
      },
      {
        text: '좋은 문서의 기준',
        link: '/metric/index',
        position: 'left',
      },
    ],
    sidebar: {
      '/': [
        {
          text: '시작하기',
          link: '/overview',
        },
        {
          text: '이해하기',
          items: [
            {
              text: '문서 유형 알아보기',
              link: '/comprehension/doc-type'
            }
          ]
        },
        {
          text: '튜토리얼',
          link: '/tutorial',
        },
        {
          text: '문서 작성 준비하기',
          items: [
            {
              text: '소개',
              link: '/arrange/index',
            },
            {
              text: '문서 구조 만들기',
              link: '/arrange/type',
            },
            {
              text: '자료 모으기',
              link: '/arrange/material',
            },
          ],
        },
        {
          text: 'AI와 함께 쓰기',
          collapsed: true,
          items: [
            {
              text: '소개',
              link: '/ai-writing/index',
            },
            {
              text: '규칙 만들기',
              link: '/ai-writing/rule',
            },
            {
              text: '페이지 목차 만들기',
              link: '/ai-writing/table-of-content',
            },
            {
              text: '초안 작성하기',
              link: '/ai-writing/draft',
            },
          ],
        },
        {
          text: '검토하기',
          collapsed: true,
          items: [
            {
              text: '소개',
              link: '/review/index',
            },
            {
              text: '스스로 검토하기',
              link: '/review/self',
            },
            {
              text: 'AI와 함께 리뷰하기',
              link: '/review/ai',
            },
          ],
        },
        {
          text: '더 알아보기',
          collapsed: true,
          items: [
            {
              text: '소개',
              link: '/supplement/index',
            },
            {
              text: '시각자료 만들기',
              link: '/supplement/visual-material',
            },
            {
              text: '예제 코드 만들기',
              link: '/supplement/example-code',
            },
          ],
        },
        {
          text: '좋은 문서의 기준',
          collapsed: true,
          items: [
            {
              text: '소개',
              link: '/metric/index',
            },
            {
              text: '가독성',
              items: [
                {
                  text: '예시1',
                  link: '/metric/1'
                },
                {
                  text: '예시2',
                  link: '/metric/2'
                }
              ]
            },
            {
              text: '명확성',
              items: [
                {
                  text: '예시3',
                  link: '/metric/3'
                },
                {
                  text: '예시4',
                  link: '/metric/4'
                }
              ]
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
