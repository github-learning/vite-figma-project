import React from 'react';
import styles from './HotListItem.module.css';

export interface HotListItemData {
  id: string;
  title: string;
  pageView: number;
}

export interface HotListItemProps {
  item: HotListItemData;
  index: number;
}

export const HotListItem: React.FC<HotListItemProps> = ({ item, index }) => {
  // 格式化浏览量：转换为万+
  const formatPageView = (views: number): { value: string; unit: string } => {
    if (views >= 10000) {
      const wan = (views / 10000).toFixed(1);
      return { value: wan, unit: 'w+' };
    }
    return { value: views.toString(), unit: '' };
  };

  const pageView = formatPageView(item.pageView);

  return (
    <div className={styles.listItem}>
      {/* 编号 */}
      <div className={styles.indexWrapper}>
        <div className={styles.indexCircle}>
          <span className={styles.indexNumber}>{index}</span>
        </div>
      </div>

      {/* 标题 */}
      <div className={styles.titleWrapper}>
        <span className={styles.titleText}>{item.title}</span>
      </div>

      {/* 浏览量 */}
      <div className={styles.pageViewWrapper}>
        <span className={styles.pageViewValue}>{pageView.value}</span>
        {pageView.unit && <span className={styles.pageViewUnit}>{pageView.unit}</span>}
      </div>
    </div>
  );
};

