import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
    public forecasts: WeatherForecast[];

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.fetchApi();
    }

    reload() {
        this.forecasts = null;
        setTimeout(() => {
            this.fetchApi();
        }, 1000);
    }

    fetchApi() {
        this.http
            .get<WeatherForecast[]>(this.baseUrl + 'api/SampleData/WeatherForecasts')
            .subscribe(
                result => {
                    this.forecasts = result;
                },
                error => console.error(error)
            );
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
