import React, { useMemo } from 'react';
import type { EChartsOption } from 'echarts';
import { PieChart } from '../../components/business/PieChart';
import styles from './index.module.css';

export const OnlineContent: React.FC = () => {
  // 饼图配置 - 根据截图：大绿色段(87%), 黄色段, 小蓝色段
  const pieChartOption = useMemo<EChartsOption>(
    () => ({
      tooltip: {
        show: false,
      },
      series: [
        {
          name: 'Content Type',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
          startAngle: 90, // 从顶部开始
          itemStyle: {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth: 0,
          },
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          emphasis: {
            disabled: true,
          },
          // 根据截图：绿色段最大(87%)，然后是黄色段，蓝色段最小
          // 注意：饼图显示的是占比，不是绝对值
          data: [
            { 
              value: 87, 
              name: 'short video', 
              itemStyle: { 
                color: '#06C270',
              } 
            }, // 绿色 - 最大段，87%
            { 
              value: 10, 
              name: 'rich tex', 
              itemStyle: { 
                color: '#FFE600',
              } 
            }, // 黄色
            { 
              value: 3, 
              name: 'video', 
              itemStyle: { 
                color: '#3E7BFA',
              } 
            }, // 蓝色
          ],
          color: ['#06C270', '#FFE600', '#3E7BFA'],
        },
      ],
    }),
    []
  );

  return (
    <div className={styles.container}>
      {/* 标题栏 */}
      <div className={styles.header}>
        <h2 className={styles.title}>Online content</h2>
        <a href="#" className={styles.moreLink}>
          More
        </a>
      </div>

      {/* 统计信息 */}
      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Total Content:</div>
          <div className={styles.statValue}>425,783w+</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Added Daily:</div>
          <div className={styles.statValueSmall}>5,783</div>
        </div>
      </div>

      {/* 图表区域 */}
      <div className={styles.chartSection}>
        <div className={styles.chartWrapper}>
          <div className={styles.chartContainer}>
            <PieChart
              option={pieChartOption}
              height={106}
              className={styles.pieChart}
            />
            <div className={styles.percentage}>87%</div>
          </div>
        </div>

        {/* 图例和数据 */}
        <div className={styles.legendSection}>
          <div className={styles.legendRow}>
            <div className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: '#FF8800' }} />
              <span className={styles.legendText}>rich tex</span>
            </div>
            <div className={styles.legendData}>
              <span>507,312.9</span>
              <span className={styles.legendUnit}> w+</span>
            </div>
          </div>
          <div className={styles.legendRow}>
            <div className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: '#06C270' }} />
              <span className={styles.legendText}>short video</span>
            </div>
            <div className={styles.legendData}>78</div>
          </div>
          <div className={styles.legendRow}>
            <div className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: '#3E7BFA' }} />
              <span className={styles.legendText}>video</span>
            </div>
            <div className={styles.legendData}>7,316</div>
          </div>
        </div>
      </div>
    </div>
  );
};

