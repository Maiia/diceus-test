import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from '@features/components/header/avatar/avatar.component';
import { NavigationComponent } from '@features/components/header/navigation/navigation.component';
import { UserService } from '@core/services/user.service';
import { getInitials } from '@shared/helpers/user';

@Component({
    selector: 'app-header',
    imports: [FormsModule, AvatarComponent, NavigationComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    private readonly userService = inject(UserService);
    protected readonly getInitials = getInitials;
    public user = this.userService.user;
    public searchQuery = '';

    public onSearch() {
        console.log('Searching for:', this.searchQuery);
    }

    ngOnInit() {
        this.userService.getUser();
    }
}
