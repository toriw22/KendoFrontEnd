import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
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
import { FormsModule } from '@angular/forms'
import { FlexLayoutModule } from "@angular/flex-layout";
import { DevicesService } from "./devices.service";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { UploadModule } from '@progress/kendo-angular-upload';


@NgModule({
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
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    UploadModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LineChartComponent,
    TableComponent,
    AddEditDeviceComponent,
    DeviceTypesComponent,
    DeviceListComponent,
    DeviceDetailsComponent,
    AddEditTypeComponent,
    SidenavComponent,  
  ],
  providers: [ DevicesService ],
  bootstrap: [ AppComponent ] 
})
export class AppModule { }
