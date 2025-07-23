import CommonConstants from '../common/constants/CommonConstants';
import StyleConstants from '../common/constants/StyleConstants';
import OnePageView from '../view/OnepageView';
import TwoPageView from '../view/TwoPageView';

@Component
@Entry
@Preview
struct NewMain {
  @State currentIndex: number = CommonConstants.HOME_TAB_INDEX;

  build() {
    Tabs({ barPosition: BarPosition.End, index: this.currentIndex }) {
      TabContent() {
        OnePageView()
      }
      .tabBar(this.TabBuilder($r('app.string.home_title'), CommonConstants.HOME_TAB_INDEX,
        $r('app.media.ic_home_selected'), $r('app.media.ic_home_normal')))

      TabContent() {
        TwoPageView()
      }
      .tabBar(this.TabBuilder($r('app.string.mine_title'), CommonConstants.MINE_TAB_INDEX,
        $r('app.media.ic_mine_selected'), $r('app.media.ic_mine_normal')))

      TabContent() {
        Stack() {
          Text('这是第三个页面').fontColor('app.color.main_page_selected').fontSize(20)
          Image($r('app.media.ic_mine_selected')).width('20%').height('20%')
        }
      }
      .tabBar(this.TabBuilder($r('app.string.mine_title'), CommonConstants.MINE_TAB_INDEX,
        $r('app.media.ic_mine_selected'), $r('app.media.ic_mine_normal')))
    }.onChange((index: number) => {
      this.currentIndex = index;
    })
    .barMode(BarMode.Fixed)
    .scrollable(false)
  }

  @Builder
  TabBuilder(title: Resource, index: number, selectedImg: Resource, normalImg: Resource) {
    Column() {
      Image(this.currentIndex === index ? selectedImg : normalImg)
        .width($r('app.float.base_tab_size'))
        .height($r('app.float.base_tab_size'))
      Text(title)
        .margin({ top: $r('app.float.base_tab_top') })
        .fontSize($r("app.float.tab_font_size"))
        .fontColor(this.currentIndex === index ? $r('app.color.main_page_selected') : $r('app.color.main_page_normal'))
    }
    .justifyContent(FlexAlign.Center)
    .height(StyleConstants.FULL_PARENT)
    .width(StyleConstants.FULL_PARENT)
  }
}