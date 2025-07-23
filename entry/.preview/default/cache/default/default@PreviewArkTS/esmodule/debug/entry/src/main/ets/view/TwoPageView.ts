if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TwoPageView_Params {
}
export default class TwoPageView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TwoPageView_Params) {
    }
    updateStateVars(params: TwoPageView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/TwoPageView.ets(6:5)", "entry");
            Row.justifyContent(FlexAlign.Center);
            Row.width('100%');
            Row.height('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('这是第二个页面');
            Text.debugLine("entry/src/main/ets/view/TwoPageView.ets(7:7)", "entry");
            Text.fontColor('app.color.main_page_selected');
            Text.fontSize(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('这是第二个页面');
            Text.debugLine("entry/src/main/ets/view/TwoPageView.ets(8:7)", "entry");
            Text.fontColor('app.color.blue_text_color');
            Text.fontSize(20);
            Text.margin(10);
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TwoPageView";
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "TwoPageView", new TwoPageView(undefined, {}));
    previewComponent();
}
else {
    registerNamedRoute(() => new TwoPageView(undefined, {}), "", { bundleName: "com.huawei.logindemo", moduleName: "entry", pagePath: "view/TwoPageView", pageFullPath: "entry/src/main/ets/view/TwoPageView", integratedHsp: "false", moduleType: "followWithHap" });
}
