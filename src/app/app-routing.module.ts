import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddEditDeviceComponent } from './pages/add-edit-device/add-edit-device.component';
import { DeviceTypesComponent } from './pages/device-types/device-types.component';
import { AddEditTypeComponent } from './pages/add-edit-type/add-edit-type.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceDetailsComponent } from './pages/device-details/device-details.component';

const routes: Routes = [

  //add new device
  { path: 'add-edit', component: AddEditDeviceComponent, 
  //edit existing device
    // children: [
    //   { path: ':id', component: AddEditDeviceComponent }, 
    // ]
  },
  { path: 'dashboard', component: DashboardComponent },
  //view all devices in a table
  { path: 'devices', component: DeviceListComponent },
  { path: 'details/:id', component: DeviceDetailsComponent }, 
      //view all device types in a table
  { path: 'device-types', component: DeviceTypesComponent },
      //add new or edit existing device type
        // children: [
        //   { path: '{{ :type }}', component: AddEditTypeComponent }, 
        // ]
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
