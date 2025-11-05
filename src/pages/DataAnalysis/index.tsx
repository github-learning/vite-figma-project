import React, { useMemo } from 'react';
import { Row, Col, Typography } from 'antd';
import type { EChartsOption } from 'echarts';
import { ChartCard } from '../../components/business/ChartCard';
import { StatCard } from '../../components/business/StatCard';
import { mockSalesData, mockUserData, mockStatsData } from '../../utils/mockData';
import styles from './index.module.css';

const { Title, Text } = Typography;

export const DataAnalysis: React.FC = () => {
  // 销售趋势折线图配置
  const salesTrendOption = useMemo<EChartsOption>(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: mockSalesData.salesTrend.dates,
        axisLine: {
          lineStyle: {
            color: '#DADCE1',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#DADCE1',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#F0F0F0',
          },
        },
      },
      series: [
        {
          name: '销售额',
          type: 'line',
          smooth: true,
          data: mockSalesData.salesTrend.values,
          itemStyle: {
            color: '#3E7BFA',
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(62, 123, 250, 0.3)',
                },
                {
                  offset: 1,
                  color: 'rgba(62, 123, 250, 0.05)',
                },
              ],
            },
          },
        },
      ],
    }),
    []
  );

  // 产品类别销售柱状图配置
  const categorySalesOption = useMemo<EChartsOption>(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: mockSalesData.categorySales.categories,
        axisLine: {
          lineStyle: {
            color: '#DADCE1',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#DADCE1',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#F0F0F0',
          },
        },
      },
      series: [
        {
          name: '销售额',
          type: 'bar',
          data: mockSalesData.categorySales.values,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#3E7BFA',
                },
                {
                  offset: 1,
                  color: '#6BA3FF',
                },
              ],
            },
          },
        },
      ],
    }),
    []
  );

  // 地区分布饼图配置
  const regionDistributionOption = useMemo<EChartsOption>(
    () => ({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: ¥{c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'middle',
      },
      series: [
        {
          name: '销售地区',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 8,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            formatter: '{b}\n{d}%',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: true,
          },
          data: mockSalesData.regionDistribution,
          color: ['#3E7BFA', '#06C270', '#FF8800', '#FF3B3B', '#9966FF'],
        },
      ],
    }),
    []
  );

  // 月度销售额柱状图配置
  const monthlySalesOption = useMemo<EChartsOption>(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: mockSalesData.monthlySales.months,
        axisLine: {
          lineStyle: {
            color: '#DADCE1',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#DADCE1',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#F0F0F0',
          },
        },
      },
      series: [
        {
          name: '销售额',
          type: 'bar',
          data: mockSalesData.monthlySales.values,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#06C270',
                },
                {
                  offset: 1,
                  color: '#4DD89A',
                },
              ],
            },
          },
        },
      ],
    }),
    []
  );

  // 用户增长趋势折线图配置
  const userGrowthOption = useMemo<EChartsOption>(
    () => ({
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: mockUserData.userGrowth.dates,
        axisLine: {
          lineStyle: {
            color: '#DADCE1',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#DADCE1',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#F0F0F0',
          },
        },
      },
      series: [
        {
          name: '用户数',
          type: 'line',
          smooth: true,
          data: mockUserData.userGrowth.values,
          itemStyle: {
            color: '#06C270',
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(6, 194, 112, 0.3)',
                },
                {
                  offset: 1,
                  color: 'rgba(6, 194, 112, 0.05)',
                },
              ],
            },
          },
        },
      ],
    }),
    []
  );

  // 用户来源分布饼图配置
  const userSourceOption = useMemo<EChartsOption>(
    () => ({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'middle',
      },
      series: [
        {
          name: '用户来源',
          type: 'pie',
          radius: '65%',
          center: ['60%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 8,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            formatter: '{b}\n{d}%',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: true,
          },
          data: mockUserData.userSource,
          color: ['#3E7BFA', '#06C270', '#FF8800', '#9966FF', '#FF3B3B'],
        },
      ],
    }),
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={2} className={styles.title}>
          数据分析
        </Title>
        <Text type="secondary" className={styles.subtitle}>
          实时数据监控与分析
        </Text>
      </div>

      {/* 统计卡片 */}
      <Row gutter={[16, 16]} className={styles.statsRow}>
        {mockStatsData.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <StatCard
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              trendType={stat.trendType}
              icon={stat.icon}
            />
          </Col>
        ))}
      </Row>

      {/* 图表区域 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <ChartCard
            title="销售趋势"
            option={salesTrendOption}
            height={350}
            className={styles.chartCard}
          />
        </Col>
        <Col xs={24} lg={12}>
          <ChartCard
            title="产品类别销售"
            option={categorySalesOption}
            height={350}
            className={styles.chartCard}
          />
        </Col>
        <Col xs={24} lg={12}>
          <ChartCard
            title="地区销售分布"
            option={regionDistributionOption}
            height={350}
            className={styles.chartCard}
          />
        </Col>
        <Col xs={24} lg={12}>
          <ChartCard
            title="月度销售额"
            option={monthlySalesOption}
            height={350}
            className={styles.chartCard}
          />
        </Col>
        <Col xs={24} lg={12}>
          <ChartCard
            title="用户增长趋势"
            option={userGrowthOption}
            height={350}
            className={styles.chartCard}
          />
        </Col>
        <Col xs={24} lg={12}>
          <ChartCard
            title="用户来源分布"
            option={userSourceOption}
            height={350}
            className={styles.chartCard}
          />
        </Col>
      </Row>
    </div>
  );
};
