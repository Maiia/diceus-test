import { ChangeDetectionStrategy, Component, computed, input, Input, output } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IAccountGroupsCount } from '@core/models/account.model';
import { MAIN_TABS_GROUPS } from '@features/components/config/tab.config';

@Component({
    selector: 'app-tabs-menu',
    imports: [NgClass, ReactiveFormsModule, FormsModule],
    templateUrl: './tabs-menu.component.html',
    styleUrl: './tabs-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsMenuComponent {
    protected readonly mainTabGroups = MAIN_TABS_GROUPS;

    @Input() public selectedMainTab = 'decision-support';
    @Input() public selectedSubTab: string | null = null;
    public tabsGroupsCount = input<IAccountGroupsCount[]>([]);
    private tabsGroupsCountMap = computed(
        () => new Map(this.tabsGroupsCount().map(t => [t.key, t.count]))
    );

    public toggleMainTabEvent = output<string>();
    public selectSubTabEvent = output<string>();

    public toggleMainTab(tabKey: string): void {
        this.toggleMainTabEvent.emit(tabKey);
    }

    public getCountForTab(key: string): number {
        return this.tabsGroupsCountMap().get(key) ?? 0;
    }

    public selectSubTab(subTabKey: string): void {
        this.selectSubTabEvent.emit(subTabKey);
    }

    public getSubTabs(key: string) {
        return this.mainTabGroups.find(g => g.key === key)?.subTabs;
    }
}
