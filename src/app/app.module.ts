import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { RangeAreaChartComponent } from './components/range-area-chart/range-area-chart.component';
import { TableComponent } from './components/table/table.component';
import { AddEditDeviceComponent } from './pages/add-edit-device/add-edit-device.component';
import { DeviceTypesComponent } from './pages/device-types/device-types.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceDetailsComponent } from './pages/device-details/device-details.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { GridModule } from '@progress/kendo-angular-grid';
import { AddEditTypeComponent } from './pages/add-edit-type/add-edit-type.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';
import { CompiledLineChartComponent } from './components/compiled-line-chart/compiled-line-chart.component';
import { FlexLayoutModule } from "@angular/flex-layout";
// import { DevicesService } from "./devices.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarChartComponent,
    LineChartComponent,
    RangeAreaChartComponent,
    TableComponent,
    AddEditDeviceComponent,
    DeviceTypesComponent,
    DeviceListComponent,
    DeviceDetailsComponent,
    AddEditTypeComponent,
    SidenavComponent,
    CompiledLineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    ChartsModule,
    GridModule,
    LayoutModule,
    ButtonsModule,
    FormsModule,    
    FlexLayoutModule,
    HttpClientModule
  ],
  // DevicesService
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
