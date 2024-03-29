import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
    { path: 'weather', component: WeatherComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [WeatherComponent],
    exports: [
        RouterModule
    ]
})
export class ApiModule { }