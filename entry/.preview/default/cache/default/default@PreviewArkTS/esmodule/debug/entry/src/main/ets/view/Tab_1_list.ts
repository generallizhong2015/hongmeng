if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Tab_a_list_Params {
}
export default class Tab_a_list extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Tab_a_list_Params) {
    }
    updateStateVars(params: Tab_a_list_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("entry/src/main/ets/view/Tab_1_list.ets(6:5)", "entry");
            List.alignListItem(ListItemAlign.Center);
            List.width('100%');
            List.height('100%');
        }, List);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                itemCreation2(elmtId, isInitialRender);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("entry/src/main/ets/view/Tab_1_list.ets(7:7)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/view/Tab_1_list.ets(8:9)", "entry");
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('item1');
                    Text.debugLine("entry/src/main/ets/view/Tab_1_list.ets(9:11)", "entry");
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777220, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                    Image.debugLine("entry/src/main/ets/view/Tab_1_list.ets(10:11)", "entry");
                    Image.width(20);
                    Image.height(20);
                }, Image);
                Column.pop();
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Tab_a_list";
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "Tab_a_list", new Tab_a_list(undefined, {}));
    previewComponent();
}
else {
    registerNamedRoute(() => new Tab_a_list(undefined, {}), "", { bundleName: "com.huawei.logindemo", moduleName: "entry", pagePath: "view/Tab_1_list", pageFullPath: "entry/src/main/ets/view/Tab_1_list", integratedHsp: "false", moduleType: "followWithHap" });
}
