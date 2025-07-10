import { IStatGroupItem } from '@shared/models/stat-group.model';
import { IHistoricalDate } from '@core/models/account.model';

export interface IWinnabilityFactor {
    name: string;
    value: number;
}

export interface IWinnabilityFactor {
    label: string;
    value: number;
}

export interface IWinnabilityData {
    score: number;
    level: number;
    historicalTrend: IHistoricalDate[];
    position: IStatGroupItem[];
    increasing: IWinnabilityFactor[];
    decreasing: IWinnabilityFactor[];
}
