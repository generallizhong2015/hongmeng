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
            Tabs.debugLine("entry/src/main/ets/pages/NewMian.ets(13:5)", "entry");
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
                    this.TabBuilder.call(this, { "id": 16777308, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, CommonConstants.HOME_TAB_INDEX, { "id": 16777387, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777366, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/pages/NewMian.ets(14:7)", "entry");
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
                    this.TabBuilder.call(this, { "id": 16777330, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, CommonConstants.MINE_TAB_INDEX, { "id": 16777368, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777232, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/pages/NewMian.ets(20:7)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Stack.create();
                    Stack.debugLine("entry/src/main/ets/pages/NewMian.ets(27:9)", "entry");
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('这是第三个页面');
                    Text.debugLine("entry/src/main/ets/pages/NewMian.ets(28:11)", "entry");
                    Text.fontColor('app.color.main_page_selected');
                    Text.fontSize(20);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777368, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                    Image.debugLine("entry/src/main/ets/pages/NewMian.ets(29:11)", "entry");
                    Image.width('20%');
                    Image.height('20%');
                }, Image);
                Stack.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, { "id": 16777330, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, CommonConstants.MINE_TAB_INDEX, { "id": 16777368, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777232, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/pages/NewMian.ets(26:7)", "entry");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
    }
    TabBuilder(title: Resource, index: number, selectedImg: Resource, normalImg: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/NewMian.ets(43:5)", "entry");
            Column.justifyContent(FlexAlign.Center);
            Column.height(StyleConstants.FULL_PARENT);
            Column.width(StyleConstants.FULL_PARENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentIndex === index ? selectedImg : normalImg);
            Image.debugLine("entry/src/main/ets/pages/NewMian.ets(44:7)", "entry");
            Image.width({ "id": 16777235, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.height({ "id": 16777235, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("entry/src/main/ets/pages/NewMian.ets(47:7)", "entry");
            Text.margin({ top: { "id": 16777236, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            Text.fontSize({ "id": 16777290, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontColor(this.currentIndex === index ? { "id": 16777377, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } : { "id": 16777376, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
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
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "NewMain", new NewMain(undefined, {}));
    previewComponent();
}
else {
    registerNamedRoute(() => new NewMain(undefined, {}), "", { bundleName: "com.huawei.logindemo", moduleName: "entry", pagePath: "pages/NewMian", pageFullPath: "entry/src/main/ets/pages/NewMian", integratedHsp: "false", moduleType: "followWithHap" });
}
