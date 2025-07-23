if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface homeTab_Params {
}
interface homeTop_Params {
    num?: string;
}
interface OnePageView_Params {
    currentIndex?: number;
    dynamicData?: string[];
    fixedData?: string[];
    num?: number;
}
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
import { DatabaseManager } from "@bundle:com.huawei.logindemo/entry/ets/database/DatabaseManager";
import { HttpUtil } from "@bundle:com.huawei.logindemo/entry/ets/httputil/HttpUtil";
import type { BusinessError as BusinessError } from "@ohos:base";
import prompt from "@ohos:prompt";
import type { FreeData } from "../interface/FreeData";
import ConfigHttp from "@bundle:com.huawei.logindemo/entry/ets/config/ConfigHttp";
export default class OnePageView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(CommonConstants.TAB_1, this, "currentIndex");
        this.__dynamicData = new ObservedPropertyObjectPU(['21111', '2111', '3111', '411', '5', '6', '7', '8', '9', '10'], this, "dynamicData");
        this.fixedData = ['固定项1', '固定项2', '固定项3'];
        this.__num = new ObservedPropertySimplePU(100000, this, "num");
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
        if (params.num !== undefined) {
            this.num = params.num;
        }
    }
    updateStateVars(params: OnePageView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__dynamicData.purgeDependencyOnElmtId(rmElmtId);
        this.__num.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__dynamicData.aboutToBeDeleted();
        this.__num.aboutToBeDeleted();
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
    private __num: ObservedPropertySimplePU<number>;
    get num() {
        return this.__num.get();
    }
    set num(newValue: number) {
        this.__num.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/OnepageView.ets(23:5)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new homeTop(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/OnepageView.ets", line: 24, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "homeTop" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Line.create();
            Line.debugLine("entry/src/main/ets/view/OnepageView.ets(26:7)", "entry");
            Line.backgroundColor({ "id": 16777371, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Line);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/OnepageView.ets(29:7)", "entry");
            Column.layoutWeight(1);
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Tab栏
            Row.create();
            Row.debugLine("entry/src/main/ets/view/OnepageView.ets(31:9)", "entry");
            // Tab栏
            Row.width('100%');
            // Tab栏
            Row.height(50);
            // Tab栏
            Row.backgroundColor('#e0e0e0');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.Start, index: this.currentIndex });
            Tabs.debugLine("entry/src/main/ets/view/OnepageView.ets(32:11)", "entry");
            Tabs.width('85%');
            Tabs.height(50);
            Tabs.onChange((index: number) => {
                this.currentIndex = index;
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '链上', CommonConstants.TAB_1, { "id": 16777368, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777232, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/view/OnepageView.ets(34:13)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, ('nft'), CommonConstants.TAB_2, { "id": 16777368, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777232, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/view/OnepageView.ets(40:13)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '通道', CommonConstants.TAB_3, { "id": 16777368, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777232, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/view/OnepageView.ets(46:13)", "entry");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 右侧图标
            Column.create();
            Column.debugLine("entry/src/main/ets/view/OnepageView.ets(59:11)", "entry");
            // 右侧图标
            Column.justifyContent(FlexAlign.Center);
            // 右侧图标
            Column.onClick(() => {
                console.info('点击了添加按钮');
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777397, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/OnepageView.ets(60:13)", "entry");
            Image.width(24);
            Image.height(24);
        }, Image);
        // 右侧图标
        Column.pop();
        // Tab栏
        Row.pop();
        // 列表内容区域（关键修改）
        this.buildCurrentContent.bind(this)();
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
                        Column.debugLine("entry/src/main/ets/view/OnepageView.ets(90:7)", "entry");
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`Tab${this.currentIndex}内容`);
                        Text.debugLine("entry/src/main/ets/view/OnepageView.ets(91:9)", "entry");
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
                        Column.debugLine("entry/src/main/ets/view/OnepageView.ets(96:7)", "entry");
                        Column.width('100%');
                        Column.height('100%');
                        Column.justifyContent(FlexAlign.Center);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`Tab${this.currentIndex}内容`);
                        Text.debugLine("entry/src/main/ets/view/OnepageView.ets(97:9)", "entry");
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
            Column.debugLine("entry/src/main/ets/view/OnepageView.ets(109:5)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/OnepageView.ets(110:7)", "entry");
            Row.width('97%');
            Row.backgroundColor({ "id": 16777377, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Row.borderRadius(3);
            Row.margin(5);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777399, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/OnepageView.ets(111:9)", "entry");
            Image.width(20);
            Image.margin({ left: 10 });
            Image.onClick(() => {
                console.info('点击了添加按钮http');
                let uiContent = this.getUIContext();
                // uiContent.getRouter().pushUrl({url:'/pages/AddPage'})
                HttpUtil.get(uiContent, ConfigHttp.httpUrl, {}, true)
                    .then((result) => {
                    console.info('请求结果2:', result);
                    const resultJson = JSON.parse(result) as FreeData;
                    console.info('解析后的JSON数据:', resultJson.fastestFee);
                });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('Btc');
            Text.debugLine("entry/src/main/ets/view/OnepageView.ets(124:9)", "entry");
            Text.fontSize(16);
            Text.margin(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/OnepageView.ets(127:9)", "entry");
            Row.justifyContent(FlexAlign.End);
            Row.width('100%');
            Row.padding(10);
            Row.margin({ right: 10 });
            Row.layoutWeight(1);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('1000');
            Text.debugLine("entry/src/main/ets/view/OnepageView.ets(128:11)", "entry");
            Text.fontColor({ "id": 16777378, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("entry/src/main/ets/view/OnepageView.ets(144:7)", "entry");
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
                        ListItem.backgroundColor({ "id": 16777377, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        ListItem.borderRadius(3);
                        ListItem.margin(5);
                        ListItem.onClick(() => {
                            console.info('点击了列表项' + item);
                            DatabaseManager.getInstance().saveDB();
                            prompt.showToast({ message: '保存成功', duration: 2000 });
                            // 正确使用 CustomDialog，并绑定 onClick 回调
                            CustomDialog;
                        });
                        ListItem.debugLine("entry/src/main/ets/view/OnepageView.ets(146:11)", "entry");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.debugLine("entry/src/main/ets/view/OnepageView.ets(147:13)", "entry");
                            Row.width('100%');
                            Row.margin(0);
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": 16777399, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                            Image.debugLine("entry/src/main/ets/view/OnepageView.ets(148:15)", "entry");
                            Image.width(20);
                            Image.margin({ left: 10 });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create('Btc');
                            Text.debugLine("entry/src/main/ets/view/OnepageView.ets(149:15)", "entry");
                            Text.fontSize(16);
                            Text.margin({ left: 3 });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.debugLine("entry/src/main/ets/view/OnepageView.ets(152:15)", "entry");
                            Row.justifyContent(FlexAlign.End);
                            Row.width('97%');
                            Row.padding({ right: 5 });
                            Row.layoutWeight(1);
                            Row.margin({ right: 5 });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.debugLine("entry/src/main/ets/view/OnepageView.ets(153:17)", "entry");
                            Text.fontColor({ "id": 16777378, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
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
            Column.debugLine("entry/src/main/ets/view/OnepageView.ets(194:5)", "entry");
            Column.justifyContent(FlexAlign.Center);
            Column.height('100%');
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentIndex === index ? selectedImg : normalImg);
            Image.debugLine("entry/src/main/ets/view/OnepageView.ets(195:7)", "entry");
            Image.width({ "id": 16777235, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.height({ "id": 16777235, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("entry/src/main/ets/view/OnepageView.ets(198:7)", "entry");
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
        return "OnePageView";
    }
}
class homeTop extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__num = new ObservedPropertySimplePU('100000', this, "num");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: homeTop_Params) {
        if (params.num !== undefined) {
            this.num = params.num;
        }
    }
    updateStateVars(params: homeTop_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__num.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__num.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __num: ObservedPropertySimplePU<string>;
    get num() {
        return this.__num.get();
    }
    set num(newValue: string) {
        this.__num.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 顶部布局
            Row.create();
            Row.debugLine("entry/src/main/ets/view/OnepageView.ets(215:5)", "entry");
            // 顶部布局
            Row.width('100%');
            // 顶部布局
            Row.height('10%');
            // 顶部布局
            Row.margin({ left: 5 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/OnepageView.ets(216:7)", "entry");
            Column.width('80%');
            Column.backgroundImage({ "id": 16777393, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('bitlong');
            Text.debugLine("entry/src/main/ets/view/OnepageView.ets(217:9)", "entry");
            Text.fontSize(12);
            Text.fontColor(Color.Green);
            Text.padding(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.num);
            Text.debugLine("entry/src/main/ets/view/OnepageView.ets(222:9)", "entry");
            Text.fontSize(12);
            Text.fontColor(Color.Red);
            Text.padding(10);
            Text.onClick(() => {
                this.num = '8000000';
            });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777394, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/OnepageView.ets(234:7)", "entry");
            Image.width('20%');
            Image.margin(3);
            Image.onClick(() => {
                let uiContent = this.getUIContext().getRouter();
                uiContent.pushUrl({ url: 'pages/AddPage' })
                    .then(() => {
                    console.info('页面跳转成功');
                })
                    .catch((err: BusinessError) => {
                    console.error('页面跳转失败', JSON.stringify(err));
                });
                prompt.showToast({ message: '跳转', duration: 2000 });
            });
        }, Image);
        // 顶部布局
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class homeTab extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: homeTab_Params) {
    }
    updateStateVars(params: homeTab_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "OnePageView", new OnePageView(undefined, {}));
    previewComponent();
}
else {
    registerNamedRoute(() => new OnePageView(undefined, {}), "", { bundleName: "com.huawei.logindemo", moduleName: "entry", pagePath: "view/OnepageView", pageFullPath: "entry/src/main/ets/view/OnepageView", integratedHsp: "false", moduleType: "followWithHap" });
}
