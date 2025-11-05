import React from 'react';
import styles from './index.module.css';

export const HelpDocumentation: React.FC = () => {
  const buttons = [
    { id: '1', label: 'BRD' },
    { id: '2', label: 'User Guide' },
    { id: '3', label: 'Access Process' },
    { id: '4', label: 'FID' },
  ];

  return (
    <div className={styles.container}>
      {/* 标题栏 */}
      <div className={styles.header}>
        <h2 className={styles.title}>Help documentation</h2>
        <a href="#" className={styles.moreLink}>
          More
        </a>
      </div>

      {/* 按钮网格 */}
      <div className={styles.buttonGrid}>
        {buttons.map((button) => (
          <button key={button.id} className={styles.docButton}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

