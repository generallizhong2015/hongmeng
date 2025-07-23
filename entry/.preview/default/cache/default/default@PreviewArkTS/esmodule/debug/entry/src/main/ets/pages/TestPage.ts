if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TestPage_Params {
    name?: string;
    age?: number;
}
import preferences from "@ohos:data.preferences";
import prompt from "@ohos:prompt";
class TestPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__name = new ObservedPropertySimplePU('' as string, this, "name");
        this.__age = new ObservedPropertySimplePU(0 as number, this, "age");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TestPage_Params) {
        if (params.name !== undefined) {
            this.name = params.name;
        }
        if (params.age !== undefined) {
            this.age = params.age;
        }
    }
    updateStateVars(params: TestPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__name.purgeDependencyOnElmtId(rmElmtId);
        this.__age.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__name.aboutToBeDeleted();
        this.__age.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __name: ObservedPropertySimplePU<string>;
    get name() {
        return this.__name.get();
    }
    set name(newValue: string) {
        this.__name.set(newValue);
    }
    private __age: ObservedPropertySimplePU<number>;
    get age() {
        return this.__age.get();
    }
    set age(newValue: number) {
        this.__age.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/TestPage.ets(12:5)", "entry");
            Column.width('100%');
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('存储数据');
            Text.debugLine("entry/src/main/ets/pages/TestPage.ets(13:7)", "entry");
            Text.fontColor(Color.Red);
            Text.fontSize(16);
            Text.padding(5);
            Text.backgroundColor({ "id": 16777371, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.borderRadius(10);
            Text.width('100');
            Text.onClick(() => {
                let context = getContext();
                let myPrefs = preferences.getPreferencesSync(context, { name: 'myPrefs' });
                myPrefs.put('name', '张三');
                myPrefs.put('age', 18);
                prompt.showToast({ message: '保存成功', duration: 2000 });
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('存储数据');
            Text.debugLine("entry/src/main/ets/pages/TestPage.ets(30:7)", "entry");
            Text.fontColor(Color.Red);
            Text.fontSize(16);
            Text.padding(5);
            Text.onClick(() => {
                let context = getContext();
                let myPrefs = preferences.getPreferencesSync(context, { name: 'myPrefs' });
                myPrefs.put('name', '李四');
                myPrefs.put('age', 108);
                prompt.showToast({ message: '更改成功', duration: 2000 });
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('获取数据');
            Text.debugLine("entry/src/main/ets/pages/TestPage.ets(42:7)", "entry");
            Text.fontColor(Color.Red);
            Text.fontSize(16);
            Text.padding(5);
            Text.onClick(() => {
                let context = getContext();
                let myPrefs = preferences.getPreferencesSync(context, { name: 'myPrefs' });
                let name = myPrefs.getSync('name', '') as string;
                let age = myPrefs.getSync('age', 0) as number;
                this.name = name;
                this.age = age;
                prompt.showToast({ message: '读取成功', duration: 2000 });
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('name: ' + this.name);
            Text.debugLine("entry/src/main/ets/pages/TestPage.ets(56:7)", "entry");
            Text.fontColor(Color.Black);
            Text.fontSize(12);
            Text.width('100');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('age: ' + this.age);
            Text.debugLine("entry/src/main/ets/pages/TestPage.ets(60:7)", "entry");
            Text.fontColor(Color.Black);
            Text.fontSize(12);
            Text.width('100');
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TestPage";
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "TestPage", new TestPage(undefined, {}));
    previewComponent();
}
else {
    registerNamedRoute(() => new TestPage(undefined, {}), "", { bundleName: "com.huawei.logindemo", moduleName: "entry", pagePath: "pages/TestPage", pageFullPath: "entry/src/main/ets/pages/TestPage", integratedHsp: "false", moduleType: "followWithHap" });
}
