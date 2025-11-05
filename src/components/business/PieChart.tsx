import React, { useRef, useEffect, useState } from 'react';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import styles from './PieChart.module.css';

export interface PieChartProps {
  option: EChartsOption;
  height?: number | string;
  className?: string;
  loading?: boolean;
}

export const PieChart: React.FC<PieChartProps> = ({
  option,
  height = 400,
  className = '',
  loading = false,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartInstance, setChartInstance] = useState<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // 初始化图表实例
    const chart = echarts.init(chartRef.current);
    setChartInstance(chart);

    // 设置配置项
    chart.setOption(option);

    // 响应式调整
    const handleResize = () => {
      chart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, []);

  // 当 option 变化时更新图表
  useEffect(() => {
    if (chartInstance && option) {
      chartInstance.setOption(option, true);
    }
  }, [option, chartInstance]);

  // 处理 loading 状态
  useEffect(() => {
    if (chartInstance) {
      if (loading) {
        chartInstance.showLoading('default', {
          text: '加载中...',
          color: '#3E7BFA',
          textColor: '#555770',
          maskColor: 'rgba(255, 255, 255, 0.8)',
        });
      } else {
        chartInstance.hideLoading();
      }
    }
  }, [loading, chartInstance]);

  return (
    <div
      ref={chartRef}
      className={`${styles.pieChart} ${className}`}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    />
  );
};

