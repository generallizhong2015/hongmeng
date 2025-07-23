import { ComponentContent as ComponentContent } from "@ohos:arkui.node";
export class GlobalDialog {
    static contentNode: ComponentContent<GlobalDialogParam>;
    //显示弹窗
    static show(context: UIContext, dialogParam: GlobalDialogParam) {
        //ComponentContent对象有三个参数
        //参数1:UI 上下文
        //参数2：使用 wrapBuilder 包装 buildGlobalDialogComponent 函数，这个函数用于构建对话框的实际内容
        //参数3:传递给对话框的参数，包含内容文本和按钮的回调函数
        GlobalDialog.contentNode = new ComponentContent(context, wrapBuilder(buildGlobalDialogComponent), dialogParam);
        const promptAction = context.getPromptAction(); //通过 context 获取 promptAction，用于操作对话框显示
        //显示弹窗
        promptAction.openCustomDialog(GlobalDialog.contentNode, {
            alignment: DialogAlignment.Center,
            autoCancel: false, //点击弹窗外区域是否取消弹窗
        });
    }
    //关闭弹窗
    static close(context: UIContext) {
        const promptAction = context.getPromptAction();
        promptAction.closeCustomDialog(GlobalDialog.contentNode);
    }
    static loading(context: UIContext, dialogParam: GlobalDialogParam) {
        //ComponentContent对象有三个参数
        //参数1:UI 上下文
        //参数2：使用 wrapBuilder 包装 buildGlobalDialogComponent 函数，这个函数用于构建对话框的实际内容
        //参数3:传递给对话框的参数，包含内容文本和按钮的回调函数
        GlobalDialog.contentNode = new ComponentContent(context, wrapBuilder(buildLoading), dialogParam);
        const promptAction = context.getPromptAction(); //通过 context 获取 promptAction，用于操作对话框显示
        promptAction.openCustomDialog(GlobalDialog.contentNode, {
            alignment: DialogAlignment.Center,
            autoCancel: false, //点击弹窗外区域是否取消弹窗
        });
    }
    //关闭弹窗
    static Loadingclose(context: UIContext) {
        const promptAction = context.getPromptAction();
        promptAction.closeCustomDialog(GlobalDialog.contentNode);
    }
}
function buildGlobalDialogComponent(param: GlobalDialogParam, parent = null) {
    const __param__ = param;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Column.create();
        Column.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(51:3)", "entry");
        Column.backgroundColor({ "id": 16777376, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        Column.width('80%');
        Column.borderRadius(12);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Text.create(param.content);
        Text.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(52:5)", "entry");
        Text.fontSize(17);
        Text.fontColor("#181818");
        Text.lineHeight(24);
        Text.margin({
            bottom: 29,
            top: 29,
            left: 31,
            right: 31
        });
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Divider.create();
        Divider.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(60:5)", "entry");
        Divider.color("#D8D8D8");
        Divider.height(0.5);
    }, Divider);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        RowSplit.create();
        RowSplit.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(61:5)", "entry");
    }, RowSplit);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Text.create("取消");
        Text.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(62:7)", "entry");
        Text.fontSize(17);
        Text.fontColor("#181818");
        Text.fontWeight(FontWeight.Bold);
        Text.onClick(event => {
            param.onCancel();
        });
        Text.textAlign(TextAlign.Center);
        Text.padding({
            top: 15, bottom: 15
        });
        Text.width('50%');
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Text.create("确定");
        Text.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(75:7)", "entry");
        Text.fontSize(17);
        Text.fontColor({ "id": 16777380, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        Text.fontWeight(FontWeight.Bold);
        Text.onClick(event => {
            param.onConfirm();
        });
        Text.textAlign(TextAlign.Center);
        Text.padding({
            top: 15, bottom: 15
        });
        Text.width('50%');
    }, Text);
    Text.pop();
    RowSplit.pop();
    Column.pop();
}
function buildLoading(param: GlobalDialogParam, parent = null) {
    const __param__ = param;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Column.create();
        Column.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(94:3)", "entry");
        Column.backgroundColor({ "id": 16777376, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        Column.width('80%');
        Column.borderRadius(12);
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Row.create();
        Row.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(95:5)", "entry");
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Text.create("加载中...");
        Text.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(96:7)", "entry");
        Text.fontSize(17);
        Text.fontColor("#181818");
        Text.fontWeight(FontWeight.Bold);
        Text.textAlign(TextAlign.Center);
        Text.padding({
            top: 15, bottom: 15
        });
        Text.id('tv1');
        Text.align(Alignment.Center);
    }, Text);
    Text.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Row.create();
        Row.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(106:7)", "entry");
        Row.justifyContent(FlexAlign.End);
        Row.id('row1');
        Row.margin({ left: '60%' });
        Row.onClick(() => {
            param.onCancel();
        });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Image.create({ "id": 16777365, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        Image.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(107:9)", "entry");
        Image.width(20);
        Image.height(20);
    }, Image);
    Row.pop();
    Row.pop();
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, param = __param__) => {
        Text.create(param.content);
        Text.debugLine("entry/src/main/ets/dia/GlobalDialog.ets(114:5)", "entry");
        Text.fontSize(17);
        Text.fontColor("#181818");
        Text.lineHeight(24);
        Text.margin({
            bottom: 29,
            top: 29,
            left: 31,
            right: 31
        });
    }, Text);
    Text.pop();
    Column.pop();
}
interface GlobalDialogParam {
    content: string; //弹窗显示内容
    onConfirm: () => void; //确认按钮的回调函数
    onCancel: () => void; // 取消按钮的回调函数
}
