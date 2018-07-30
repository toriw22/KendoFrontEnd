import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddEditDeviceComponent } from './pages/add-edit-device/add-edit-device.component';
import { DeviceTypesComponent } from './pages/device-types/device-types.component';
import { AddEditTypeComponent } from './pages/add-edit-type/add-edit-type.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceDetailsComponent } from './pages/device-details/device-details.component';

const routes: Routes = [

  { path: 'add-edit', component: AddEditDeviceComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devices', component: DeviceListComponent },
  { path: 'details/:id', component: DeviceDetailsComponent }, 
  { path: 'device-types', component: DeviceTypesComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
