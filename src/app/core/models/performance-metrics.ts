export interface IPerformanceMetrics {
    winnability: IWinnabilityMetric;
    lossRatio: ILossRatioMetric;
    premiumGrowth: IPremiumGrowthMetric;
    exposureDistribution: IExposureItem[];
}

export interface IWinnabilityMetric {
    level: number;
}

export interface ILossRatioMetric {
    current: number;
    target: number;
}

export interface IPremiumGrowthMetric {
    yoyIncrease: number;
    current: number;
    target: number;
}

export interface IExposureItem {
    label: string;
    value: number;
}
