import UIAbility from "@ohos:app.ability.UIAbility";
import type Want from "@ohos:app.ability.Want";
import type AbilityConstant from "@ohos:app.ability.AbilityConstant";
import window from "@ohos:window";
import type { BusinessError as BusinessError } from "@ohos:base";
import deviceInfo from "@ohos:deviceInfo";
import Logger from "@bundle:com.huawei.logindemo/entry/ets/common/utils/Logger";
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
import { GlobalContext } from "@bundle:com.huawei.logindemo/entry/ets/common/utils/GlobalContext";
import { DatabaseManager } from "@bundle:com.huawei.logindemo/entry/ets/database/DatabaseManager";
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
            console.info('Database initialized successfully');
        })
            .catch((err: BusinessError) => {
            console.error(`Failed to initialize database. Code:${err.code}, message:${err.message}`);
        });
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
