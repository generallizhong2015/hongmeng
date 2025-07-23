@Component
@Preview
@Entry
export  default struct TwoPageView{
  build() {
    Row() {
      Text('这是第二个页面').fontColor('app.color.main_page_selected').fontSize(20)
      Text('这是第二个页面').fontColor('app.color.blue_text_color').fontSize(20).margin(10)
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
  }
}