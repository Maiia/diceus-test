import { IMainTabGroup, MainTabKey, SubTabKey } from '@core/models/tab.model';

export const MAIN_TABS_GROUPS: IMainTabGroup[] = [
    {
        key: MainTabKey.DecisionSupport,
        label: 'Decision Support',
        subTabs: [
            { key: SubTabKey.Winnability, label: 'Winnability' },
            { key: SubTabKey.ExposureReview, label: 'Exposure Review & Suggested Coverage' },
            { key: SubTabKey.PortfolioStrategy, label: 'Portfolio Strategy Alignment' },
            { key: SubTabKey.BrokerAnalytics, label: 'Broker Analytics' },
        ],
    },
    {
        key: MainTabKey.RiskAssessment,
        label: 'Risk Assessment',
        subTabs: [],
    },
    {
        key: MainTabKey.DocumentsCompliance,
        label: 'Documents and Compliance',
        subTabs: [],
    },
];
