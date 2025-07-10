import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexStroke,
    ApexDataLabels,
    ApexMarkers,
    ApexYAxis,
    ApexGrid,
} from 'ngx-apexcharts';
import { ChartComponent } from 'ngx-apexcharts';
import { IHistoricalDate } from '@core/models/account.model';

@Component({
    selector: 'app-line-chart',
    imports: [ChartComponent],
    templateUrl: './line-chart.component.html',
    styleUrl: './line-chart.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent implements OnInit {
    @Input() data: IHistoricalDate[] = [];
    @Input() labels: string[] = [];

    public chartSeries: ApexAxisChartSeries = [];
    public chartOptions: Partial<{
        chart: ApexChart;
        xaxis: ApexXAxis;
        stroke: ApexStroke;
        dataLabels: ApexDataLabels;
        markers: ApexMarkers;
        yaxis: ApexYAxis;
        grid: ApexGrid;
    }> = {};

    ngOnInit() {
        this.chartSeries = [
            {
                name: 'Score',
                data: this.data.map(d => ({ x: d.date, y: d.value })),
            },
        ];

        this.chartOptions = {
            chart: {
                height: 88,
                type: 'line',
                toolbar: { show: false },
                zoom: { enabled: false },
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    format: 'MMM',
                    rotate: 0,
                    style: {
                        colors: '#aaa',
                        fontSize: '12px',
                    },
                },
                axisBorder: { show: false },
                axisTicks: { show: false },
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                show: false,
                min: 0,
                max: 120,
            },
            grid: {
                show: false,
            },
        };
    }
}
