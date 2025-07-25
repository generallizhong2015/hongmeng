/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UIAbility, Want, AbilityConstant } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError, deviceInfo } from '@kit.BasicServicesKit';
import Logger from '../common/utils/Logger';
import CommonConstants from '../common/constants/CommonConstants';
import { GlobalContext } from '../common/utils/GlobalContext';
import { relationalStore } from '@kit.ArkData';
import { DatabaseManager } from '../database/DatabaseManager';

/**
 * Lift cycle management of Ability.
 */
export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    GlobalContext.getContext().setObject('abilityWant', want);
    GlobalContext.getContext().setObject('launchParam', launchParam);
    if (deviceInfo.deviceType !== CommonConstants.TABLET_DEVICE_TYPE) {
      window.getLastWindow(this.context, (err, data) => {
        if (err.code) {
          Logger.error('Failed to obtain the top window. Cause: ' + JSON.stringify(err));
          return;
        }
        let orientation = window.Orientation.PORTRAIT;
        data.setPreferredOrientation(orientation, (err) => {
          if (err.code) {
            Logger.error('Failed to set window orientation. Cause: ' + JSON.stringify(err));
            return;
          }
          Logger.info('Succeeded in setting window orientation.');
        });
      });
    }
    DatabaseManager.getInstance().init(this.context)

      .then(() => {
        console.info('Database initialized successfully')
      })
      .catch((err:BusinessError) => {
        console.error(`Failed to initialize database. Code:${err.code}, message:${err.message}`)
      })
  }

  onWindowStageCreate(windowStage: window.WindowStage) {

    Logger.info(CommonConstants.TAG_ABILITY, 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/LoginPage', (err: BusinessError<void>, data) => {
      if (err.code) {
        Logger.error(CommonConstants.TAG_ABILITY, 'Load the content to failed ' + JSON.stringify(err));
        return;
      }
      Logger.info(CommonConstants.TAG_ABILITY, 'Loading the content to succeeded ' + JSON.stringify(data));
    });

  }
  onBackground(): void {
    Logger.info(CommonConstants.TAG_ABILITY, 'Ability onBackground');
  }

}