import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WinnabilityPanelComponent } from '@features/components/account/account-details/winnability-panel/winnability-panel.component';
import { TabsMenuComponent } from '@features/components/account/account-details/tabs-menu/tabs-menu.component';
import { AccountDetailsService } from '@core/services/account-details.service';
import { RecommendationService } from '@core/services/recommendation.service';
import { MAIN_TABS_GROUPS } from '@features/components/config/tab.config';
import { IMainTabGroup, MainTabKey, SubTabKey } from '@core/models/tab.model';

@Component({
    selector: 'app-account-details',
    imports: [
        WinnabilityPanelComponent,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        FormsModule,
        TabsMenuComponent,
    ],
    templateUrl: './account-details.component.html',
    styleUrl: './account-details.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit {
    private readonly accountDetailsService = inject(AccountDetailsService);
    private readonly recommendationService = inject(RecommendationService);

    protected readonly MainTabKey = MainTabKey;
    protected readonly SubTabKey = SubTabKey;

    public winnability = this.accountDetailsService.winnability;
    public tabsGroupsCount = this.accountDetailsService.tabsGroupsCount;
    public aiRecommendations = this.recommendationService.aiRecommendations;

    public mainTabGroups: IMainTabGroup[] = MAIN_TABS_GROUPS;

    public selectedMainTab: string | null = 'decision-support';
    public selectedSubTab: string | null = 'winnability';

    ngOnInit() {
        this.accountDetailsService.getWinnability();
        this.accountDetailsService.getTabsGroupsCount();
        this.recommendationService.getAIRecommendations();
    }

    public toggleMainTab(tabKey: string): void {
        if (this.selectedMainTab === tabKey) {
            this.selectedMainTab = null;
            this.selectedSubTab = null;
        } else {
            this.selectedMainTab = tabKey;
            const subTabs = this.mainTabGroups.find(g => g.key === tabKey)?.subTabs || [];
            this.selectedSubTab = subTabs.length ? subTabs[0].key : null;
        }
    }

    public selectSubTab(subKey: string): void {
        this.selectedSubTab = subKey;
    }
}
