import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IBreadcrumb } from '@shared/models/breadcrumbs.model';

@Component({
    selector: 'app-breadcrumbs',
    imports: [RouterLink],
    templateUrl: './breadcrumbs.component.html',
    styleUrl: './breadcrumbs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
    @Input() items: IBreadcrumb[] = [];
}
