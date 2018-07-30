import { Directive, OnInit, OnDestroy } from '@angular/core';
import { DataBindingDirective, GridComponent } from '@progress/kendo-angular-grid';
import { DevicesService } from './devices.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[devicesBinding]'
})
export class DevicesBindingDirective extends DataBindingDirective implements OnInit, OnDestroy {
    private serviceSubscription: Subscription;

    constructor(private devices: DevicesService, grid: GridComponent) {
        super(grid);
    }

    public ngOnInit(): void {
        this.serviceSubscription = this.devices.subscribe((result) => {
            this.grid.loading = false;
            this.grid.data = result;
            this.notifyDataChange();
            console.log(result);
        });

        super.ngOnInit();

        this.rebind();
    }

    public ngOnDestroy(): void {
        if (this.serviceSubscription) {
            this.serviceSubscription.unsubscribe();
        }

        super.ngOnDestroy();
    }

    public rebind(): void {
        this.grid.loading = true;

        this.devices.query(this.state);
    }
}
