if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Welcome_Params {
    voide?: Resource;
    currentProgressRate?: number;
    textContet?: string;
    createTime?: number;
    timenum?: number;
}
import router from "@ohos:router";
class Welcome extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__voide = new ObservedPropertyObjectPU({ "id": 16777392, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, this, "voide");
        this.__currentProgressRate = new ObservedPropertySimplePU(0, this, "currentProgressRate");
        this.__textContet = new ObservedPropertySimplePU('欢迎来到bitlong钱包', this, "textContet");
        this.__createTime = new ObservedPropertySimplePU(0, this, "createTime");
        this.__timenum = new ObservedPropertySimplePU(3, this, "timenum");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Welcome_Params) {
        if (params.voide !== undefined) {
            this.voide = params.voide;
        }
        if (params.currentProgressRate !== undefined) {
            this.currentProgressRate = params.currentProgressRate;
        }
        if (params.textContet !== undefined) {
            this.textContet = params.textContet;
        }
        if (params.createTime !== undefined) {
            this.createTime = params.createTime;
        }
        if (params.timenum !== undefined) {
            this.timenum = params.timenum;
        }
    }
    updateStateVars(params: Welcome_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__voide.purgeDependencyOnElmtId(rmElmtId);
        this.__currentProgressRate.purgeDependencyOnElmtId(rmElmtId);
        this.__textContet.purgeDependencyOnElmtId(rmElmtId);
        this.__createTime.purgeDependencyOnElmtId(rmElmtId);
        this.__timenum.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__voide.aboutToBeDeleted();
        this.__currentProgressRate.aboutToBeDeleted();
        this.__textContet.aboutToBeDeleted();
        this.__createTime.aboutToBeDeleted();
        this.__timenum.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __voide: ObservedPropertyObjectPU<Resource>;
    get voide() {
        return this.__voide.get();
    }
    set voide(newValue: Resource) {
        this.__voide.set(newValue);
    }
    private __currentProgressRate: ObservedPropertySimplePU<number>;
    get currentProgressRate() {
        return this.__currentProgressRate.get();
    }
    set currentProgressRate(newValue: number) {
        this.__currentProgressRate.set(newValue);
    }
    private __textContet: ObservedPropertySimplePU<string>;
    get textContet() {
        return this.__textContet.get();
    }
    set textContet(newValue: string) {
        this.__textContet.set(newValue);
    }
    private __createTime: ObservedPropertySimplePU<number>;
    get createTime() {
        return this.__createTime.get();
    }
    set createTime(newValue: number) {
        this.__createTime.set(newValue);
    }
    private __timenum: ObservedPropertySimplePU<number>;
    get timenum() {
        return this.__timenum.get();
    }
    set timenum(newValue: number) {
        this.__timenum.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Welcome.ets(14:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Welcome.ets(16:7)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Video.create({ src: this.voide, currentProgressRate: this.createTime });
            Video.debugLine("entry/src/main/ets/pages/Welcome.ets(17:9)", "entry");
            Video.width('100%');
            Video.height('100%');
            Video.autoPlay(true);
            Video.controls(false);
            Video.onPrepared(() => {
                console.info('开始播放');
            });
            Video.onUpdate(() => {
                console.info('播放中..');
            });
            Video.onFinish(() => {
                this.toLogin();
            });
        }, Video);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.textContet);
            Text.debugLine("entry/src/main/ets/pages/Welcome.ets(27:9)", "entry");
            Text.fontSize(15);
            Text.fontColor({ "id": 16777375, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.margin(10);
        }, Text);
        Text.pop();
        Stack.pop();
        Column.pop();
    }
    onPageShow(): void {
        const timer = setInterval(() => {
            if (this.timenum <= 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
    toLogin() {
        router.push({ url: 'pages/LoginPage' });
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Welcome";
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "Welcome", new Welcome(undefined, {}));
    previewComponent();
}
else {
    registerNamedRoute(() => new Welcome(undefined, {}), "", { bundleName: "com.huawei.logindemo", moduleName: "entry", pagePath: "pages/Welcome", pageFullPath: "entry/src/main/ets/pages/Welcome", integratedHsp: "false", moduleType: "followWithHap" });
}
