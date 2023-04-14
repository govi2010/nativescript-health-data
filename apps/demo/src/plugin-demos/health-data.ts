import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedHealthData } from '@demo/shared';
import {} from '@nativescript/health-data';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedHealthData {}
