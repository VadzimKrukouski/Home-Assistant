import {NgModule} from '@angular/core';
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

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'data', component: DataComponent},
  {path: 'start', component: StartComponent},
  {path: 'meters', component: MetersComponent},
  {path: 'formDataBills', component: BillsComponent},
  {path: 'bills', component: StartBillsComponent},
  {path: 'infoBills', component: BillsInfoComponent},
  {path: 'hot-water-data', component: HotWaterComponent},
  {path: 'cold-water-data', component: ColdWaterComponent},
  {path: 'electricity-data', component: ElectricityComponent},
  {path: 'monthStatistic', component:MonthInfoByTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
