/**
 * Mock 数据生成工具
 */

// 生成随机数
const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 生成日期数组
export const generateDates = (days: number): string[] => {
  const dates: string[] = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    dates.push(date.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }));
  }
  return dates;
};

// 生成折线图数据
export const generateLineData = (count: number, min: number = 100, max: number = 1000) => {
  return Array.from({ length: count }, () => random(min, max));
};

// 生成柱状图数据
export const generateBarData = (count: number, min: number = 50, max: number = 500) => {
  return Array.from({ length: count }, () => random(min, max));
};

// 生成饼图数据
export const generatePieData = (categories: string[]) => {
  return categories.map((name) => ({
    name,
    value: random(100, 1000),
  }));
};

// 销售数据 Mock
export const mockSalesData = {
  // 最近7天销售趋势
  salesTrend: {
    dates: generateDates(7),
    values: generateLineData(7, 5000, 20000),
  },
  // 产品类别销售
  categorySales: {
    categories: ['电子产品', '服装', '食品', '家居', '图书'],
    values: generateBarData(5, 10000, 50000),
  },
  // 地区销售分布
  regionDistribution: generatePieData(['华北', '华东', '华南', '华西', '华中']),
  // 月度销售额
  monthlySales: {
    months: ['1月', '2月', '3月', '4月', '5月', '6月'],
    values: generateBarData(6, 50000, 200000),
  },
};

// 用户数据 Mock
export const mockUserData = {
  // 用户增长趋势
  userGrowth: {
    dates: generateDates(30),
    values: generateLineData(30, 1000, 5000),
  },
  // 用户来源分布
  userSource: generatePieData(['直接访问', '搜索引擎', '社交媒体', '广告投放', '其他']),
  // 活跃用户
  activeUsers: {
    dates: generateDates(7),
    values: generateBarData(7, 5000, 15000),
  },
};

// 统计卡片数据
export const mockStatsData = [
  {
    title: '总销售额',
    value: '¥1,234,567',
    trend: '+12.5%',
    trendType: 'up' as const,
    icon: '💰',
  },
  {
    title: '新增用户',
    value: '3,456',
    trend: '+8.2%',
    trendType: 'up' as const,
    icon: '👥',
  },
  {
    title: '订单数量',
    value: '5,678',
    trend: '+5.1%',
    trendType: 'up' as const,
    icon: '📦',
  },
  {
    title: '转化率',
    value: '23.45%',
    trend: '-2.3%',
    trendType: 'down' as const,
    icon: '📊',
  },
];

