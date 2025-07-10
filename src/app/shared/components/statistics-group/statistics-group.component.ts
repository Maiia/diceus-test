import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { IStatGroupItem } from '../../models/stat-group.model';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
    selector: 'app-statistics-group',
    imports: [ProgressBarComponent],
    templateUrl: './statistics-group.component.html',
    styleUrl: './statistics-group.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsGroupComponent {
    @Input() title: string = '';
    public items = input<IStatGroupItem[]>();
}
