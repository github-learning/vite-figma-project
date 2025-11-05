import React, { useMemo } from 'react';
import type { EChartsOption } from 'echarts';
import { ChartCard } from '../../components/business/ChartCard';
import styles from './index.module.css';

export const ContentData: React.FC = () => {
  // 蓝色和绿色堆叠区域图配置
  const contentDataOption = useMemo<EChartsOption>(
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
          name: 'Content exposure',
          type: 'line',
          data: [15000, 18000, 16000, 25000, 28000, 30000],
          smooth: true,
          lineStyle: {
            color: '#6093FF',
            width: 2,
          },
          itemStyle: {
            color: '#6093FF',
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
                { offset: 0, color: 'rgba(0, 84, 255, 0.29)' },
                { offset: 1, color: 'rgba(0, 84, 255, 0)' },
              ],
            },
          },
          symbol: 'circle',
          symbolSize: 8,
          showSymbol: true,
          z: 2,
        },
        {
          name: 'Content hits',
          type: 'line',
          data: [12000, 15000, 14000, 22000, 26000, 32000],
          smooth: true,
          lineStyle: {
            color: '#06C270',
            width: 2,
          },
          itemStyle: {
            color: '#06C270',
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
                { offset: 0, color: 'rgba(0, 255, 143, 0.29)' },
                { offset: 1, color: 'rgba(0, 255, 143, 0)' },
              ],
            },
          },
          symbol: 'circle',
          symbolSize: 8,
          showSymbol: true,
          z: 1,
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
              <path d="M14 16C14 13.7909 15.7909 12 18 12H26C28.2091 12 30 13.7909 30 16V28C30 30.2091 28.2091 32 26 32H18C15.7909 32 14 30.2091 14 28V16Z" fill="#FFFFFF" fillOpacity="0.2"/>
              <path d="M19 18H25C25.5523 18 26 18.4477 26 19V21C26 21.5523 25.5523 22 25 22H19C18.4477 22 18 21.5523 18 21V19C18 18.4477 18.4477 18 19 18Z" fill="#FFFFFF"/>
              <path d="M19 24H25C25.5523 24 26 24.4477 26 25V27C26 27.5523 25.5523 28 25 28H19C18.4477 28 18 27.5523 18 27V25C18 24.4477 18.4477 24 19 24Z" fill="#FFFFFF"/>
            </svg>
          </div>
          <h2 className={styles.title}>Content data</h2>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: '#06C270' }} />
            <span className={styles.legendText}>Content hits</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: '#6093FF' }} />
            <span className={styles.legendText}>Content exposure</span>
          </div>
        </div>
      </div>

      {/* 图表区域 */}
      <div className={styles.chartWrapper}>
        <ChartCard
          option={contentDataOption}
          height={243}
          className={styles.chart}
        />
      </div>
    </div>
  );
};

