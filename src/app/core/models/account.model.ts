export interface IMyAccount {
    accountName: string;
    accountType: string;
    line: string;
    broker: string;
    renewalDate: string;
    premium: number;
    ratedPremium: number;
    lossRatio: number;
    appetite: 'LOW' | 'MEDIUM' | 'HIGH';
    status: 'Active' | 'Inactive' | 'Pending';
    triage: number;
    winnability: number;
}

export type IAccountStatus = 'Submitted' | 'Review' | 'Quote' | 'Bind' | 'Issue' | 'Renew';

export interface IAccountSummary {
    name: string;
    type: string;
    address: string;
    broker: string;
    underwriter: string;
    accountNumber: string;
    logoUrl: string;
    accountStatus: IAccountStatus;
}

export interface IPolicy {
    id: string;
    name: string;
    premium: number | null;
    effectiveDate: string | null;
    expirationDate?: string | null;
    status?: 'Active' | 'Pending' | 'Expired';
    expiringTech?: number;
    expiringPremium?: number;
    renewalToTech?: number;
    renewalTech?: number;
    renewalPremium?: number;
    rateChange?: number | null;
    isRateChangeNegative?: boolean;
    lossRatio?: number | null;
    icon: string;
}

export interface IComplianceAndDocumentation {
    title: string;
    completed: boolean;
}

export type AccountEventType = 'survey' | 'loss-control' | 'claims-review';

export interface IAccountNeedsAttentionBase {
    type: AccountEventType;
    entityId: string;
}

export interface ISurveyEvent extends IAccountNeedsAttentionBase {
    type: 'survey';
    title: string;
    date: string;
}

export interface ILossControlEvent extends IAccountNeedsAttentionBase {
    type: 'loss-control';
    date: string;
}

export interface IClaimsReviewEvent extends IAccountNeedsAttentionBase {
    type: 'claims-review';
    openClaims: number;
    amount: number;
}

export type IAccountNeedsAttention = ISurveyEvent | ILossControlEvent | IClaimsReviewEvent;

export interface IAccountSummaryEventView {
    title: string;
    subtitle: string;
    linkText: string;
    linkUrl: string;
}

export interface IHistoricalDate {
    date: string;
    value: number;
}

export interface IAccountGroupsCount {
    key: string;
    count: number;
}
