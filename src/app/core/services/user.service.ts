import { computed, Injectable, signal } from '@angular/core';
import { IUser } from '@core/models/user.model';
import * as user from '../../../assets/mocks/dashboard/user.json';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private readonly userSignal = signal<IUser | null>(null);
    readonly user = computed(() => this.userSignal());

    constructor() {}

    getUser(): void {
        this.userSignal.set((user as any).default as IUser);
    }
}
