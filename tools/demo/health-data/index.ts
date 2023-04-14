import { DemoSharedBase } from '../utils';
import { HealthData } from '@nativescript/health-data';
import { HealthDataType } from '@nativescript/health-data/common';
import { Dialogs } from '@nativescript/core';

export class DemoSharedHealthData extends DemoSharedBase {
  private healthData: HealthData;
  public resultToShow: string;
  private static TYPES: Array<HealthDataType> = [
    { name: 'height', accessType: 'read' },
    { name: 'weight', accessType: 'readAndWrite' }, // just for show
    { name: 'steps', accessType: 'read' },
    { name: 'distance', accessType: 'read' },
    { name: 'heartRate', accessType: 'read' },
    { name: 'fatPercentage', accessType: 'read' },
    { name: 'cardio', accessType: 'read' },
  ];

  constructor() {
    super();
    this.healthData = new HealthData();
  }

  testIt() {
    console.log('test health-data!');
  }

  isAvailable() {
    this.healthData
      .isAvailable(true)
      .then((available) => {
        this.resultToShow = available ? 'Health Data available' : 'Health Data not available :(';
        console.log(this.resultToShow);
      })
      .catch((e) => {});
  }

  isAuthorized() {
    this.healthData.isAuthorized([<HealthDataType>{ name: 'weight', accessType: 'read' }]).then((authorized) =>
      setTimeout(
        () =>
          Dialogs.alert({
            title: 'Authentication result',
            message: (authorized ? '' : 'Not ') + 'authorized for ' + JSON.stringify(DemoSharedHealthData.TYPES),
            okButtonText: 'Ok!',
          }),
        300
      )
    );
  }

  requestAuthForVariousTypes() {
    this.healthData
      .requestAuthorization(DemoSharedHealthData.TYPES)
      .then((authorized) =>
        setTimeout(
          () =>
            Dialogs.alert({
              title: 'Authentication result',
              message: (authorized ? '' : 'Not ') + 'authorized for ' + JSON.stringify(DemoSharedHealthData.TYPES),
              okButtonText: 'Ok!',
            }),
          300
        )
      )
      .catch((error) => console.log('Request auth error: ', error));
  }
}
