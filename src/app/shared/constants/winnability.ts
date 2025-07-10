export enum WinnabilityLevel {
    Unknown = 0,
    Low = 1,
    Medium = 2,
    Strong = 3,
    VeryStrong = 4,
}

export const WinnabilityLabelMap: Record<WinnabilityLevel, string> = {
    [WinnabilityLevel.Unknown]: 'Unknown',
    [WinnabilityLevel.Low]: 'Low',
    [WinnabilityLevel.Medium]: 'Medium',
    [WinnabilityLevel.Strong]: 'Strong',
    [WinnabilityLevel.VeryStrong]: 'Very Strong',
};
