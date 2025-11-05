import React, { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { HotListItem, type HotListItemData } from './HotListItem';
import { mockHotListData } from '../../utils/mockHotListData';
import styles from './index.module.css';

export const HotList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('content');
  const [activeFilter, setActiveFilter] = useState<string>('rich-text');

  const filterOptions = [
    { key: 'rich-text', label: 'rich tex' },
    { key: 'video', label: 'video' },
    { key: 'short-video', label: 'short video' },
  ];

  const tabItems: TabsProps['items'] = [
    {
      key: 'content',
      label: <span className={styles.tabLabelActive}>Content list</span>,
    },
    {
      key: 'author',
      label: <span className={styles.tabLabel}>Author list</span>,
    },
  ];

  return (
    <div className={styles.container}>
      {/* 标题栏 */}
      <div className={styles.header}>
        <h2 className={styles.title}>Hot list</h2>
        <a href="#" className={styles.moreLink}>
          More
        </a>
      </div>

      {/* 标签页切换 */}
      <div className={styles.tabsWrapper}>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={tabItems}
          className={styles.tabs}
        />
      </div>

      {/* 内容类型筛选 */}
      <div className={styles.filterWrapper}>
        {filterOptions.map((option) => (
          <div
            key={option.key}
            className={`${styles.filterItem} ${
              activeFilter === option.key ? styles.filterItemActive : ''
            }`}
            onClick={() => setActiveFilter(option.key)}
          >
            <span className={styles.filterText}>{option.label}</span>
          </div>
        ))}
      </div>

      {/* 列表标题 */}
      <div className={styles.listHeader}>
        <span className={styles.headerCell}>No</span>
        <span className={styles.headerCell}>Title</span>
        <span className={styles.headerCell}>Page View</span>
      </div>

      {/* 列表内容 */}
      <div className={styles.listContent}>
        {mockHotListData.map((item: HotListItemData, index: number) => (
          <HotListItem key={item.id} item={item} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

