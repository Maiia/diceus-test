export interface IMainTabGroup {
    key: string;
    label: string;
    subTabs: ISubTab[];
}

export interface ISubTab {
    key: string;
    label: string;
}

export interface IMainTabCount {
    key: string;
    count: number;
}

export enum MainTabKey {
    DecisionSupport = 'decision-support',
    RiskAssessment = 'risk-assessment',
    DocumentsCompliance = 'documents-compliance',
}
export enum SubTabKey {
    Winnability = 'winnability',
    ExposureReview = 'exposure-review',
    PortfolioStrategy = 'portfolio-strategy',
    BrokerAnalytics = 'broker-analytics',
}
