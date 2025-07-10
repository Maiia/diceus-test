import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@features/containers/header/header.component';
import { IconService } from '@core/services/icon/icon.service';
import { InlineSvgStrategy } from '@core/strategies/inline-svg.strategy';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    private iconService = inject(IconService);

    ngOnInit(): void {
        this.iconService.setStrategy(new InlineSvgStrategy());
    }
}
