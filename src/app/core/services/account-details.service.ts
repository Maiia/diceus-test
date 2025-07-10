import { computed, Injectable, signal } from '@angular/core';
import {
    IAccountGroupsCount,
    IAccountNeedsAttention,
    IAccountSummary,
    IComplianceAndDocumentation,
    IPolicy,
} from '@core/models/account.model';
import { IPerformanceMetrics } from '@core/models/performance-metrics';
import { IWinnabilityData } from '@core/models/winnability';

import * as summery from '../../../assets/mocks/account/summary.json';
import * as needsAttention from '../../../assets/mocks/account/needs-attention.json';
import * as metrics from '../../../assets/mocks/account/metrics.json';
import * as policies from '../../../assets/mocks/account/policies.json';
import * as compliance from '../../../assets/mocks/account/compliance.json';
import * as winnability from '../../../assets/mocks/account/winnability.json';
import * as groupsCounts from '../../../assets/mocks/account/groups-counts.json';

@Injectable({
    providedIn: 'root',
})
export class AccountDetailsService {
    private readonly summerySignal = signal<IAccountSummary | null>(null);
    readonly summery = computed(() => this.summerySignal());

    private readonly needsAttentionSignal = signal<IAccountNeedsAttention[] | null>(null);
    readonly needsAttention = computed(() => this.needsAttentionSignal());

    private readonly performanceMetricsSignal = signal<IPerformanceMetrics | null>(null);
    readonly performanceMetrics = computed(() => this.performanceMetricsSignal());

    private readonly policiesSignal = signal<IPolicy[] | null>(null);
    readonly policies = computed(() => this.policiesSignal());

    private readonly complianceAndDocumentationSignal = signal<
        IComplianceAndDocumentation[] | null
    >(null);
    readonly complianceAndDocumentation = computed(() => this.complianceAndDocumentationSignal());

    private readonly winnabilitySignal = signal<IWinnabilityData | null>(null);
    readonly winnability = computed(() => this.winnabilitySignal());

    private readonly tabsGroupsCountSignal = signal<IAccountGroupsCount[] | null>(null);
    readonly tabsGroupsCount = computed(() => this.tabsGroupsCountSignal());

    constructor() {}

    getAccountSummary(): void {
        this.summerySignal.set((summery as any).default as IAccountSummary);
    }

    getNeedsAttention(): void {
        this.needsAttentionSignal.set((needsAttention as any).default as IAccountNeedsAttention[]);
    }

    getPerformanceMetrics(): void {
        this.performanceMetricsSignal.set((metrics as any).default as IPerformanceMetrics);
    }

    getPolicies(): void {
        this.policiesSignal.set((policies as any).default as IPolicy[]);
    }

    getComplianceAndDocumentation() {
        this.complianceAndDocumentationSignal.set(
            (compliance as any).default as IComplianceAndDocumentation[]
        );
    }

    getWinnability(): void {
        this.winnabilitySignal.set((winnability as any).default as IWinnabilityData);
    }

    getTabsGroupsCount(): void {
        this.tabsGroupsCountSignal.set((groupsCounts as any).default as IAccountGroupsCount[]);
    }
}
