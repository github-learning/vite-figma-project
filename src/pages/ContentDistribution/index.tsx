import React from 'react';
import styles from './index.module.css';

export const ContentDistribution: React.FC = () => {
  const stats = [
    { label: 'Inline Content Collection:', value: '7,363' },
    { label: 'Place The Scene:', value: '2,415' },
    { label: 'Task In Progress:', value: '6,756' },
  ];

  return (
    <div className={styles.container}>
      {/* 标题栏 */}
      <div className={styles.header}>
        <h2 className={styles.title}>Content distribution</h2>
        <a href="#" className={styles.moreLink}>
          More
        </a>
      </div>

      {/* 统计信息 */}
      <div className={styles.statsSection}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statValue}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

