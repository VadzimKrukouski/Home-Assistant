import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataComponent} from './data/data.component';
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {StartComponent} from './start/start.component';
import {MetersComponent} from './meters/meters.component';
import {BillsComponent} from './bills/bills.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {DynamicFormPlusComponent} from './dynamic-form-plus/dynamic-form-plus.component';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MAT_MOMENT_DATE_FORMATS, MatMomentDateModule} from '@angular/material-moment-adapter';
import {MomentUtcDateAdapter} from "./adapters/MomentUtcDateAdapter";
import {StartBillsComponent} from './start-bills/start-bills.component';
import {BillsInfoComponent} from './bills/bills-info/bills-info.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {HotWaterComponent} from './meters/hot-water/hot-water.component';
import {ColdWaterComponent} from './meters/cold-water/cold-water.component';
import {ElectricityComponent} from './meters/electricity/electricity.component';
import {MonthInfoByTypeComponent} from './bills/month-info-by-type/month-info-by-type.component';
import {NavButtonComponent} from './buttons/nav-button/nav-button.component';
import { ChartButtonComponent } from './buttons/chart-button/chart-button.component';
import { AuthComponent } from './start/auth/auth.component';
import {securityInterceptor} from "./service/security/security-interceptor";
import { WaterComponent } from './meters/water/water.component';
import { IncomeComponent } from './income/income.component';
import {FormFieldComponent} from "./form-field/app-form-field/form-field.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { NavBarComponent } from './buttons/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    StartComponent,
    MetersComponent,
    BillsComponent,
    DynamicFormComponent,
    DynamicFormPlusComponent,
    StartBillsComponent,
    BillsInfoComponent,
    HotWaterComponent,
    ColdWaterComponent,
    ElectricityComponent,
    MonthInfoByTypeComponent,
    NavButtonComponent,
    ChartButtonComponent,
    AuthComponent,
    WaterComponent,
    IncomeComponent,
    FormFieldComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMomentDateModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
    provideHttpClient(withInterceptors([securityInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
