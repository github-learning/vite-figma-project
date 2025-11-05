import React, { useMemo } from 'react';
import type { EChartsOption } from 'echarts';
import { ChartCard } from '../../components/business/ChartCard';
import styles from './index.module.css';

export const UserData: React.FC = () => {
  // 黄色区域图配置
  const userDataOption = useMemo<EChartsOption>(
    () => ({
      grid: {
        left: '60px',
        right: '60px',
        top: '20px',
        bottom: '40px',
      },
      xAxis: {
        type: 'category',
        data: ['11-08', '11-09', '11-11', '11-13', '11-14', '11-15'],
        axisLabel: {
          fontSize: 12,
          fontFamily: 'Microsoft YaHei UI',
          color: '#FFFFFF',
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 60000,
        interval: 10000,
        axisLabel: {
          fontSize: 12,
          fontFamily: 'Microsoft YaHei UI',
          color: '#FFFFFF',
          formatter: (value: number) => {
            return value.toString();
          },
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: 'Active User',
          type: 'line',
          data: [20000, 25000, 22000, 35000, 45000, 55000],
          smooth: true,
          lineStyle: {
            color: '#FFE600',
            width: 2,
          },
          itemStyle: {
            color: '#FFE600',
            borderColor: '#FFFFFF',
            borderWidth: 2,
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(255, 230, 0, 0.55)' },
                { offset: 1, color: 'rgba(255, 230, 0, 0)' },
              ],
            },
          },
          symbol: 'circle',
          symbolSize: 8,
          showSymbol: true,
        },
      ],
      tooltip: {
        show: false,
      },
    }),
    []
  );

  return (
    <div className={styles.container}>
      {/* 标题栏 */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.iconWrapper}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="#2E3A59"/>
              <path d="M14 18C14 15.7909 15.7909 14 18 14H26C28.2091 14 30 15.7909 30 18V26C30 28.2091 28.2091 30 26 30H18C15.7909 30 14 28.2091 14 26V18Z" fill="#FFFFFF" fillOpacity="0.2"/>
              <path d="M22 16C19.7909 16 18 17.7909 18 20C18 22.2091 19.7909 24 22 24C24.2091 24 26 22.2091 26 20C26 17.7909 24.2091 16 22 16Z" fill="#FFFFFF"/>
              <path d="M15 28C15 25.7909 16.7909 24 19 24H25C27.2091 24 29 25.7909 29 28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className={styles.title}>User data</h2>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: '#FFE600' }} />
            <span className={styles.legendText}>Active User</span>
          </div>
        </div>
      </div>

      {/* 图表区域 */}
      <div className={styles.chartWrapper}>
        <ChartCard
          option={userDataOption}
          height={238}
          className={styles.chart}
        />
      </div>
    </div>
  );
};

