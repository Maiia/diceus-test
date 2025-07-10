export interface ISection {
    from: number;
    to: number;
    label: SectionLabel;
}

export interface IGoals {
    progressGoals: IProgressBarGoal[];
    targetGoals: ISectionedBarGoal[];
}

export interface ISectionedBarGoal {
    title: string;
    current: number;
    target: number | [number, number];
    sections: ISection[];
}

export interface IProgressBarGoal {
    title: string;
    actual: number;
    total: number;
}

export type SectionLabel = 'good' | 'normal' | 'bad';
