if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ImageItemView_Params {
    secondItem?: ItemData;
    listItemImage?: Resource;
    listItemTitle?: Resource;
    listItemOthers?: Resource;
}
interface GridItemView_Params {
    item?: ItemData;
    gridItemImg?: Resource;
    gridItemTitle?: Resource;
    gridItemPrompt?: Resource;
}
interface ListImageView_Params {
    currentDeviceSize?: string;
}
interface CenterGridView_Params {
}
interface SwiperView_Params {
    currentDeviceSize?: string;
}
interface HomePageView_Params {
    currentDeviceSize?: string;
}
import mainViewModel from "@bundle:com.huawei.logindemo/entry/ets/viewmodel/MainViewModel";
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
import StyleConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/StyleConstants";
import CommonUtils from "@bundle:com.huawei.logindemo/entry/ets/common/utils/CommonUtils";
import type ItemData from '../viewmodel/ItemData';
export default class HomePageView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentDeviceSize = this.createStorageProp('currentDeviceSize', CommonConstants.SM, "currentDeviceSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomePageView_Params) {
    }
    updateStateVars(params: HomePageView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentDeviceSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentDeviceSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentDeviceSize: ObservedPropertyAbstractPU<string>;
    get currentDeviceSize() {
        return this.__currentDeviceSize.get();
    }
    set currentDeviceSize(newValue: string) {
        this.__currentDeviceSize.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(StyleConstants.FULL_PARENT);
            Column.backgroundColor({ "id": 16777282, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize({ "id": 16777302, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.margin({
                left: this.currentDeviceSize === CommonConstants.LG ? { "id": 16777301, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } : { "id": 16777300, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                top: { "id": 16777300, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
            Text.alignSelf(ItemAlign.Start);
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Swiper component
                    SwiperView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomePageView.ets", line: 39, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SwiperView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Center grid component
                    CenterGridView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomePageView.ets", line: 41, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CenterGridView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // List image component
                    ListImageView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomePageView.ets", line: 43, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ListImageView" });
        }
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class SwiperView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentDeviceSize = this.createStorageProp('currentDeviceSize', CommonConstants.SM, "currentDeviceSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SwiperView_Params) {
    }
    updateStateVars(params: SwiperView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentDeviceSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentDeviceSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentDeviceSize: ObservedPropertyAbstractPU<string>;
    get currentDeviceSize() {
        return this.__currentDeviceSize.get();
    }
    set currentDeviceSize(newValue: string) {
        this.__currentDeviceSize.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.displayCount(CommonConstants.SWIPER_CACHE_COUNT);
            Swiper.autoPlay(true);
            Swiper.width(StyleConstants.COMMON_WIDTH);
            Swiper.itemSpace(this.currentDeviceSize === CommonConstants.SM ?
                0 : StyleConstants.ITEM_SPACE);
            Swiper.margin({ "id": 16777300, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Swiper.displayCount(this.currentDeviceSize === CommonConstants.SM ?
                StyleConstants.SWIPER_COUNT_ONE :
                (this.currentDeviceSize === CommonConstants.MD ?
                    StyleConstants.SWIPER_COUNT_TWO : StyleConstants.SWIPER_COUNT_THREE));
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.borderRadius({ "id": 16777352, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                    Image.syncLoad(true);
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getSwiperImages(), forEachItemGenFunction, (item: Resource) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class CenterGridView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CenterGridView_Params) {
    }
    updateStateVars(params: CenterGridView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.columnsTemplate(StyleConstants.GRID_COLUMNS);
            Grid.rowsTemplate(StyleConstants.GRID_ROWS);
            Grid.columnsGap({ "id": 16777306, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777307, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Grid.height(StyleConstants.HOME_GRID_HEIGHT);
            Grid.backgroundColor(Color.White);
            Grid.borderRadius({ "id": 16777311, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Grid.padding({
                top: { "id": 16777310, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                bottom: { "id": 16777310, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
            Grid.width(StyleConstants.COMMON_WIDTH);
            Grid.margin({ "id": 16777300, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new GridItemView(this, { item: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomePageView.ets", line: 88, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            item: item
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "GridItemView" });
                        }
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getCenterGridData(), forEachItemGenFunction, (item: ItemData) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ListImageView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentDeviceSize = this.createStorageProp('currentDeviceSize', CommonConstants.SM, "currentDeviceSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ListImageView_Params) {
    }
    updateStateVars(params: ListImageView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentDeviceSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentDeviceSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentDeviceSize: ObservedPropertyAbstractPU<string>;
    get currentDeviceSize() {
        return this.__currentDeviceSize.get();
    }
    set currentDeviceSize(newValue: string) {
        this.__currentDeviceSize.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777228, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontSize({ "id": 16777350, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.alignSelf(ItemAlign.Start);
            Text.margin({
                left: { "id": 16777300, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                top: { "id": 16777300, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: StyleConstants.IMAGE_LIST_SPACE });
            List.width(StyleConstants.COMMON_WIDTH);
            List.margin({ "id": 16777300, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            List.lanes(this.currentDeviceSize === CommonConstants.SM ?
                StyleConstants.LIST_COLUMN_TWO :
                (this.currentDeviceSize === CommonConstants.MD ?
                    StyleConstants.LIST_COLUMN_THREE : StyleConstants.LIST_COLUMN_FOUR));
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const secondItem = _item;
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
                        ListItem.margin({ right: { "id": 16777321, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
                        ListItem.borderRadius({ "id": 16777314, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        ListItem.onClick(() => {
                            if (!secondItem?.clickPrompt) {
                                return;
                            }
                            CommonUtils.showToastContent(secondItem.clickPrompt);
                        });
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new ImageItemView(this, { secondItem: secondItem }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomePageView.ets", line: 128, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            secondItem: secondItem
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "ImageItemView" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getListImageData(), forEachItemGenFunction, (secondItem: ItemData) => JSON.stringify(secondItem.id), false, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class GridItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.item = undefined;
        this.gridItemImg = undefined;
        this.gridItemTitle = undefined;
        this.gridItemPrompt = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: GridItemView_Params) {
        if (params.item !== undefined) {
            this.item = params.item;
        }
        if (params.gridItemImg !== undefined) {
            this.gridItemImg = params.gridItemImg;
        }
        if (params.gridItemTitle !== undefined) {
            this.gridItemTitle = params.gridItemTitle;
        }
        if (params.gridItemPrompt !== undefined) {
            this.gridItemPrompt = params.gridItemPrompt;
        }
    }
    updateStateVars(params: GridItemView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private item?: ItemData;
    private gridItemImg?: Resource;
    private gridItemTitle?: Resource;
    private gridItemPrompt?: Resource;
    aboutToAppear() {
        if (this.item !== undefined) {
            this.gridItemImg = this.item.img;
            this.gridItemTitle = this.item.title;
            this.gridItemPrompt = this.item.clickPrompt;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.onClick(() => {
                if (!this.gridItemPrompt) {
                    return;
                }
                CommonUtils.showToastContent(this.gridItemPrompt);
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.gridItemImg) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.gridItemImg);
                        Image.width({ "id": 16777309, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        Image.height({ "id": 16777309, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        Image.syncLoad(true);
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.gridItemTitle) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.gridItemTitle);
                        Text.fontSize({ "id": 16777324, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        Text.margin({ top: { "id": 16777308, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ImageItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.secondItem = undefined;
        this.listItemImage = undefined;
        this.listItemTitle = undefined;
        this.listItemOthers = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ImageItemView_Params) {
        if (params.secondItem !== undefined) {
            this.secondItem = params.secondItem;
        }
        if (params.listItemImage !== undefined) {
            this.listItemImage = params.listItemImage;
        }
        if (params.listItemTitle !== undefined) {
            this.listItemTitle = params.listItemTitle;
        }
        if (params.listItemOthers !== undefined) {
            this.listItemOthers = params.listItemOthers;
        }
    }
    updateStateVars(params: ImageItemView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private secondItem?: ItemData;
    private listItemImage?: Resource;
    private listItemTitle?: Resource;
    private listItemOthers?: Resource;
    aboutToAppear() {
        if (this.secondItem !== undefined) {
            this.listItemImage = this.secondItem.img;
            this.listItemTitle = this.secondItem.title;
            this.listItemOthers = this.secondItem.others;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.TopStart });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.listItemImage) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.listItemImage);
                        Image.objectFit(ImageFit.Cover);
                        Image.aspectRatio(StyleConstants.GRID_ASPECT_RATIO);
                        Image.syncLoad(true);
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({
                left: { "id": 16777316, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                top: { "id": 16777316, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.listItemTitle);
            Text.fontSize({ "id": 16777350, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.alignSelf(ItemAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.listItemOthers);
            Text.margin({ top: { "id": 16777312, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            Text.fontSize({ "id": 16777324, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontColor({ "id": 16777284, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
