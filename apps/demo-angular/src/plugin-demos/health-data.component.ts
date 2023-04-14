import { Component, NgZone } from '@angular/core';
import { DemoSharedHealthData } from '@demo/shared';
import {} from '@nativescript/health-data';

@Component({
  selector: 'demo-health-data',
  templateUrl: 'health-data.component.html',
})
export class HealthDataComponent {
  demoShared: DemoSharedHealthData;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedHealthData();
  }
}
