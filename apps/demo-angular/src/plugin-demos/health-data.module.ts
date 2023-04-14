import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { HealthDataComponent } from './health-data.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: HealthDataComponent }])],
  declarations: [HealthDataComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HealthDataModule {}
