import CommonConstants from "../common/constants/CommonConstants";
import StyleConstants from "../common/constants/StyleConstants";
import { DatabaseManager } from "../database/DatabaseManager";
import { Note } from "../database/Note";
import { HttpUtil } from "../httputil/HttpUtil";
import { BusinessError } from "@kit.BasicServicesKit";
import { prompt } from "@kit.ArkUI";
import { FreeData } from "../interface/FreeData";
import ConfigHttp from "../config/ConfigHttp";


@Component
@Entry
@Preview
export default struct OnePageView {
  @State currentIndex: number = CommonConstants.TAB_1;
  @State dynamicData: string[] = ['21111', '2111', '3111', '411', '5', '6', '7', '8', '9', '10'];
  private fixedData: string[] = ['固定项1', '固定项2', '固定项3'];
  @State num: number = 100000;

  build() {

    Column() {
      homeTop()

      Line().backgroundColor($r('app.color.home_grid_fontColor'))


      Column() {
        // Tab栏
        Row() {
          Tabs({ barPosition: BarPosition.Start, index: this.currentIndex }) {
            // Tab1
            TabContent() {
            } // 空内容，实际列表在下方
            .tabBar(this.TabBuilder('链上', CommonConstants.TAB_1,
              $r('app.media.ic_mine_selected'), $r('app.media.ic_mine_normal')));

            // Tab2
            TabContent() {
            } // 空内容
            .tabBar(this.TabBuilder(('nft'), CommonConstants.TAB_2,
              $r('app.media.ic_mine_selected'), $r('app.media.ic_mine_normal')));

            // Tab3
            TabContent() {
            } // 空内容
            .tabBar(this.TabBuilder('通道', CommonConstants.TAB_3,
              $r('app.media.ic_mine_selected'), $r('app.media.ic_mine_normal')));
          }
          .width('85%')
          .height(50)
          .onChange((index: number) => {
            this.currentIndex = index;
          });


          // 右侧图标
          Column() {
            Image($r('app.media.img_add_item'))
              .width(24)
              .height(24);
          }
          .justifyContent(FlexAlign.Center)
          .onClick(() => {
            console.info('点击了添加按钮')
          });

        }
        .width('100%')
        .height(50)
        .backgroundColor('#e0e0e0');


        // 列表内容区域（关键修改）
        this.buildCurrentContent();
      }
      .layoutWeight(1)
      .width('100%');
    }
    .width('100%')
    .height('100%');
  }

  @Builder
  buildCurrentContent() {
    if (this.currentIndex === CommonConstants.TAB_1) {
      this.buildListContent();
    } else if (this.currentIndex === CommonConstants.TAB_2) {
      Column() {
        Text(`Tab${this.currentIndex}内容`)
          .fontSize(16)
          .margin(20);
      }
    } else {
      Column() {
        Text(`Tab${this.currentIndex}内容`)
          .fontSize(16)
          .margin(20);
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.Center);
    }
  }

  @Builder
  buildListContent() {
    Column() {
      Row() {
        Image($r('app.media.icon_btc1')).width(20).margin({ left: 10 }).onClick(() => {
          console.info('点击了添加按钮http')

          let uiContent=this.getUIContext()
          // uiContent.getRouter().pushUrl({url:'/pages/AddPage'})
          HttpUtil.get(uiContent,ConfigHttp.httpUrl,{},true)
          .then((result) => {
            console.info('请求结果2:', result)
            const resultJson = JSON.parse(result) as FreeData;
            console.info('解析后的JSON数据:', resultJson.fastestFee);
          })

        })
        Text('Btc')
          .fontSize(16)
          .margin(10);
        Row() {
          Text('1000')
            .fontColor($r('app.color.mine_button_color'))
        }
        .justifyContent(FlexAlign.End)
        .width('100%')
        .padding(10)
        .margin({ right: 10 })
        .layoutWeight(1)

      }
      .width('97%')
      .backgroundColor($r('app.color.main_page_selected'))
      .borderRadius(3)
      .margin(5);


      List() {
        ForEach(this.fixedData, (item: string) => {
          ListItem() {
            Row() {
              Image($r('app.media.icon_btc1')).width(20).margin({ left: 10 })
              Text('Btc')
                .fontSize(16)
                .margin({ left: 3 });
              Row() {
                Text(item)
                  .fontColor($r('app.color.mine_button_color')).margin({ right: 5 })
              }
              .justifyContent(FlexAlign.End)
              .width('97%')
              .padding({ right: 5 })
              .layoutWeight(1)
              .margin({ right: 5 })

            }
            .width('100%')
            .margin(0);

          }
          .width('97%')
          .height(30)
          .backgroundColor($r('app.color.main_page_selected'))
          .borderRadius(3)

          .margin(5)

          .onClick(() => {
            console.info('点击了列表项' + item)
            DatabaseManager.getInstance().saveDB()
            prompt.showToast({ message: '保存成功', duration: 2000 })
            // 正确使用 CustomDialog，并绑定 onClick 回调
            CustomDialog
          });

        });
      }
      .width('100%')
      .layoutWeight(1); // 关键：填满剩余空间
    }
    .width('100%')
    .height('100%');

  }

  @Builder
  TabBuilder(title: string, index: number, selectedImg: Resource, normalImg: Resource) {
    Column() {
      Image(this.currentIndex === index ? selectedImg : normalImg)
        .width($r('app.float.base_tab_size'))
        .height($r('app.float.base_tab_size'));
      Text(title)
        .margin({ top: $r('app.float.base_tab_top') })
        .fontSize($r("app.float.tab_font_size"))
        .fontColor(this.currentIndex === index ? $r('app.color.main_page_selected') : $r('app.color.main_page_normal'));
    }
    .justifyContent(FlexAlign.Center)
    .height('100%')
    .width('100%');
  }
}

@Component
struct homeTop {
  @State num: string = '100000';

  build() {
    // 顶部布局
    Row() {
      Column() {
        Text('bitlong')
          .fontSize(12)
          .fontColor(Color.Green)
          .padding(10);

        Text(this.num)
          .fontSize(12)
          .fontColor(Color.Red)
          .padding(10)
          .onClick(() => {
            this.num = '8000000'
          });
      }
      .width('80%')
      .backgroundImage($r('app.media.bg_tapr_top')).alignItems(HorizontalAlign.Start);


      Image($r('app.media.img_sel'))
        .width('20%')
        .margin(3)
        .onClick(() => {
          let uiContent = this.getUIContext().getRouter()
          uiContent.pushUrl({ url: 'pages/AddPage' })
            .then(() => {
              console.info('页面跳转成功');
            })
            .catch((err: BusinessError) => {
              console.error('页面跳转失败', JSON.stringify(err));
            });
          prompt.showToast({ message: '跳转', duration: 2000 })
        });

    }
    .width('100%')
    .height('10%')
    .margin({ left: 5 })
    ;
  }
}

@Component
struct homeTab {
  build() {
  }
}

