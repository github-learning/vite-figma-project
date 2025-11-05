import React from 'react';
import { Card, Statistic } from 'antd';
import type { StatisticProps } from 'antd';
import styles from './StatCard.module.css';

export interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  trendType?: 'up' | 'down';
  icon?: React.ReactNode;
  className?: string;
  prefix?: StatisticProps['prefix'];
  suffix?: StatisticProps['suffix'];
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  trendType = 'up',
  icon,
  className = '',
  prefix,
  suffix,
}) => {
  const trendStyle: React.CSSProperties = {
    color: trendType === 'up' ? 'var(--color-success)' : 'var(--color-error)',
    fontSize: '14px',
    fontWeight: 500,
  };

  return (
    <Card className={`${styles.statCard} ${className}`} hoverable>
      <Statistic
        title={<span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{title}</span>}
        value={value}
        prefix={icon || prefix}
        suffix={trend ? (
          <span style={trendStyle}>
            {trendType === 'up' ? '↑' : '↓'} {trend}
          </span>
        ) : suffix}
        valueStyle={{ 
          fontSize: 24, 
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}
      />
    </Card>
  );
};
