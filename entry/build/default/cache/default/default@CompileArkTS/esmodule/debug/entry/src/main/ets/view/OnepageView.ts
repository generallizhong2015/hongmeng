if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface OnePageView_Params {
    currentIndex?: number;
    dynamicData?: string[];
    fixedData?: string[];
}
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
import { HttpUtil } from "@bundle:com.huawei.logindemo/entry/ets/httputil/HttpUtil";
export default class OnePageView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(CommonConstants.TAB_1, this, "currentIndex");
        this.__dynamicData = new ObservedPropertyObjectPU(['21111', '2111', '3111', '411', '5', '6', '7', '8', '9', '10'], this, "dynamicData");
        this.fixedData = ['固定项1', '固定项2', '固定项3'];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: OnePageView_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.dynamicData !== undefined) {
            this.dynamicData = params.dynamicData;
        }
        if (params.fixedData !== undefined) {
            this.fixedData = params.fixedData;
        }
    }
    updateStateVars(params: OnePageView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__dynamicData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__dynamicData.aboutToBeDeleted();
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
    private __dynamicData: ObservedPropertyObjectPU<string[]>;
    get dynamicData() {
        return this.__dynamicData.get();
    }
    set dynamicData(newValue: string[]) {
        this.__dynamicData.set(newValue);
    }
    private fixedData: string[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 顶部布局
            Row.create();
            // 顶部布局
            Row.width('100%');
            // 顶部布局
            Row.height('10%');
            // 顶部布局
            Row.margin({ left: 5 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('70%');
            Column.backgroundImage({ "id": 16777358, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('bitlong');
            Text.fontSize(12);
            Text.fontColor(Color.Green);
            Text.padding(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('$100000');
            Text.fontSize(12);
            Text.fontColor(Color.Red);
            Text.padding(10);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777397, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.width('20%');
            Image.margin(3);
        }, Image);
        // 顶部布局
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 主内容区域
            Column.create();
            // 主内容区域
            Column.layoutWeight(1);
            // 主内容区域
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Tab栏
            Row.create();
            // Tab栏
            Row.width('100%');
            // Tab栏
            Row.height(50);
            // Tab栏
            Row.backgroundColor('#e0e0e0');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.Start, index: this.currentIndex });
            Tabs.width('85%');
            Tabs.height(50);
            Tabs.onChange((index: number) => {
                this.currentIndex = index;
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '链上', CommonConstants.TAB_1, { "id": 16777379, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777378, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, ('nft'), CommonConstants.TAB_2, { "id": 16777379, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777378, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '通道', CommonConstants.TAB_3, { "id": 16777379, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777378, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 右侧图标
            Column.create();
            // 右侧图标
            Column.justifyContent(FlexAlign.Center);
            // 右侧图标
            Column.onClick(() => {
                console.info('点击了添加按钮');
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777395, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.width(24);
            Image.height(24);
        }, Image);
        // 右侧图标
        Column.pop();
        // Tab栏
        Row.pop();
        // 列表内容区域（关键修改）
        this.buildCurrentContent.bind(this)();
        // 主内容区域
        Column.pop();
        Column.pop();
    }
    buildCurrentContent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.currentIndex === CommonConstants.TAB_1) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.buildListContent.bind(this)();
                });
            }
            else if (this.currentIndex === CommonConstants.TAB_2) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`Tab${this.currentIndex}内容`);
                        Text.fontSize(16);
                        Text.margin(20);
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.height('100%');
                        Column.justifyContent(FlexAlign.Center);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`Tab${this.currentIndex}内容`);
                        Text.fontSize(16);
                        Text.margin(20);
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
        }, If);
        If.pop();
    }
    buildListContent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('97%');
            Row.backgroundColor({ "id": 16777290, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Row.borderRadius(3);
            Row.margin(5);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777394, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.width(20);
            Image.margin({ left: 10 });
            Image.onClick(() => {
                console.info('点击了添加按钮');
                // let uiContent=this.getUIContext()
                // uiContent.getRouter().pushUrl({url:'/pages/AddPage'})
                HttpUtil.get('https://mempool.space/api/v1/fees/recommended');
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('Btc');
            Text.fontSize(16);
            Text.margin(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.End);
            Row.width('100%');
            Row.padding(10);
            Row.margin({ right: 10 });
            Row.layoutWeight(1);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('1000');
            Text.fontColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.width('100%');
            List.layoutWeight(1);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
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
                        ListItem.width('97%');
                        ListItem.height(30);
                        ListItem.backgroundColor({ "id": 16777290, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        ListItem.borderRadius(3);
                        ListItem.margin(5);
                        ListItem.onClick(() => {
                            console.info('点击了列表项' + item);
                        });
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.width('100%');
                            Row.margin(0);
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": 16777394, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                            Image.width(20);
                            Image.margin({ left: 10 });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create('Btc');
                            Text.fontSize(16);
                            Text.margin({ left: 3 });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.justifyContent(FlexAlign.End);
                            Row.width('97%');
                            Row.padding({ right: 5 });
                            Row.layoutWeight(1);
                            Row.margin({ right: 5 });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.fontColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                            Text.margin({ right: 5 });
                        }, Text);
                        Text.pop();
                        Row.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.fixedData, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    TabBuilder(title: string, index: number, selectedImg: Resource, normalImg: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.Center);
            Column.height('100%');
            Column.width('100%');
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
        return "OnePageView";
    }
}
registerNamedRoute(() => new OnePageView(undefined, {}), "", { bundleName: "com.huawei.logindemo", moduleName: "entry", pagePath: "view/OnepageView", pageFullPath: "entry/src/main/ets/view/OnepageView", integratedHsp: "false", moduleType: "followWithHap" });
