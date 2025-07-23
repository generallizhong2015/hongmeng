if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface NewMain_Params {
    currentIndex?: number;
}
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
import StyleConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/StyleConstants";
import OnePageView from "@bundle:com.huawei.logindemo/entry/ets/view/OnepageView";
import TwoPageView from "@bundle:com.huawei.logindemo/entry/ets/view/TwoPageView";
class NewMain extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(CommonConstants.HOME_TAB_INDEX, this, "currentIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: NewMain_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
    }
    updateStateVars(params: NewMain_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.End, index: this.currentIndex });
            Tabs.onChange((index: number) => {
                this.currentIndex = index;
            });
            Tabs.barMode(BarMode.Fixed);
            Tabs.scrollable(false);
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new OnePageView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/NewMian.ets", line: 15, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "OnePageView" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, CommonConstants.HOME_TAB_INDEX, { "id": 16777372, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777371, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new TwoPageView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/NewMian.ets", line: 21, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "TwoPageView" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, { "id": 16777251, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, CommonConstants.MINE_TAB_INDEX, { "id": 16777379, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777378, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Stack.create();
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('这是第三个页面');
                    Text.fontColor('app.color.main_page_selected');
                    Text.fontSize(20);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777379, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                    Image.width('20%');
                    Image.height('20%');
                }, Image);
                Stack.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, { "id": 16777251, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, CommonConstants.MINE_TAB_INDEX, { "id": 16777379, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777378, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
    }
    TabBuilder(title: Resource, index: number, selectedImg: Resource, normalImg: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.Center);
            Column.height(StyleConstants.FULL_PARENT);
            Column.width(StyleConstants.FULL_PARENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentIndex === index ? selectedImg : normalImg);
            Image.width({ "id": 16777298, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.height({ "id": 16777298, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.margin({ top: { "id": 16777299, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            Text.fontSize({ "id": 16777353, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontColor(this.currentIndex === index ? { "id": 16777290, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } : { "id": 16777289, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "NewMain";
    }
}
registerNamedRoute(() => new NewMain(undefined, {}), "", { bundleName: "com.huawei.logindemo", moduleName: "entry", pagePath: "pages/NewMian", pageFullPath: "entry/src/main/ets/pages/NewMian", integratedHsp: "false", moduleType: "followWithHap" });
