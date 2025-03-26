import React, { useState } from 'react';
import styles from './DocExample.module.css';

interface CodeSection {
  code: string;
  explanation: string;
  lineStart?: number;  // 하이라이트할 라인 시작
  lineEnd?: number;    // 하이라이트할 라인 끝
}

interface DocExampleProps {
  before: {
    code: string;
    sections?: CodeSection[];
  };
  after: {
    code: string;
    sections?: CodeSection[];
  };
  description?: string;
  type?: 'learning' | 'problem' | 'reference' | 'explanation';
}

const DocExample: React.FC<DocExampleProps> = ({ 
  before, 
  after, 
  description,
  type = 'learning' 
}) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  const [copied, setCopied] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentContent = activeTab === 'before' ? before : after;

  // 코드에 하이라이트 라인 추가하기
  const renderCodeWithHighlight = (code: string, sections?: CodeSection[]) => {
    if (!sections) return <code>{code}</code>;
  
    const lines = code.split('\n');
    const isAfterTab = activeTab === 'after';
  
    return (
      <code className={styles.codeBlock}>
        {lines.map((line, index) => {
          const lineNumber = index + 1;
          const highlightSection = sections.find(
            section =>
              lineNumber >= (section.lineStart || 0) &&
              lineNumber <= (section.lineEnd || 0)
          );
          const sectionIndex = sections.findIndex(
            section =>
              lineNumber >= (section.lineStart || 0) &&
              lineNumber <= (section.lineEnd || 0)
          );
  
          return (
            <span
              key={index}
              className={`${styles.codeLine} ${
                highlightSection
                  ? isAfterTab
                    ? styles.highlightGreen
                    : styles.highlightYellow
                  : ''
              } ${sectionIndex === hoveredSection ? styles.hovered : ''}`}
              onMouseEnter={() => highlightSection && setHoveredSection(sectionIndex)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {highlightSection && lineNumber === highlightSection.lineStart && (
                <span className={`${styles.sectionNumber} ${styles.codeBlockNumber}`}>
                  {sectionIndex + 1}
                </span>
              )}
              {line || '\u00A0'}
            </span>
          );
        })}
      </code>
    );
  };
  
  
  return (
    <div className={styles.container}>
      {description && (
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      )}

      <div className={styles.mainContent}>
        {/* 왼쪽: 코드 */}
        <div className={styles.codePanel}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'before' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('before')}
            >
              개선 전
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'after' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('after')}
            >
              개선 후
            </button>
          </div>

          <div className={styles.editor}>
            <div className={styles.editorHeader}>
              <div className={styles.editorControls}>
                <span className={styles.controlRed}></span>
                <span className={styles.controlYellow}></span>
                <span className={styles.controlGreen}></span>
              </div>
              <button 
                className={styles.copyButton} 
                onClick={() => handleCopy(currentContent.code)}
              >
                {copied ? (
                  <span className={styles.buttonContent}>
                    <CheckIcon /> 복사됐어요!
                  </span>
                ) : (
                  <span className={styles.buttonContent}>
                    <CopyIcon /> 복사
                  </span>
                )}
              </button>
            </div>

            <div className={styles.codeContent}>
              <pre>
                {renderCodeWithHighlight(currentContent.code, currentContent.sections)}
              </pre>
            </div>
          </div>
        </div>

        {/* 오른쪽: 설명 섹션들 */}
        <div className={styles.explanationPanel}>
          {currentContent.sections?.map((section, index) => (
            <div 
              key={index} 
              className={`${styles.explanationSection} ${index === hoveredSection ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>{index + 1}</span>
              </div>
              <div className={styles.explanationText}>
                {section.explanation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CopyIcon = () => (
  <svg 
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg 
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default DocExample;