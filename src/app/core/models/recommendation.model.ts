export interface IAIRecommendation {
    id: string;
    title: string;
    description: string;
    ctaLabel: string;
    actionType: 'modal' | 'link' | 'backend';
    payload: any;
}
