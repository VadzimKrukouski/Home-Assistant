import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataComponent} from "./data/data.component";
import {StartComponent} from "./start/start.component";
import {MetersComponent} from "./meters/meters.component";
import {BillsComponent} from "./bills/bills.component";
import {StartBillsComponent} from "./start-bills/start-bills.component";
import {BillsInfoComponent} from "./bills/bills-info/bills-info.component";
import {HotWaterComponent} from "./meters/hot-water/hot-water.component";
import {ColdWaterComponent} from "./meters/cold-water/cold-water.component";
import {ElectricityComponent} from "./meters/electricity/electricity.component";
import {MonthInfoByTypeComponent} from "./bills/month-info-by-type/month-info-by-type.component";
import {AuthComponent} from "./start/auth/auth.component";
import {AuthGuard} from "./service/security/auth.guard";

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'data', component: DataComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'start', component: StartComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'meters', component: MetersComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'formDataBills', component: BillsComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'bills', component: StartBillsComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'infoBills', component: BillsInfoComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'hot-water-data', component: HotWaterComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'cold-water-data', component: ColdWaterComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'electricity-data', component: ElectricityComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'monthStatistic', component:MonthInfoByTypeComponent, canActivate: [() => inject(AuthGuard).canActivate()]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
