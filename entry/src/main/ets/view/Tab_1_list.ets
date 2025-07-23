@Component
@Entry
@Preview
export  default  struct Tab_a_list{
  build() {
    List(){
      ListItem() {
        Column(){
          Text('item1')
          Image($r('app.media.ic_search')).width(20).height(20)
        }

      }

    }.alignListItem(ListItemAlign.Center).width('100%').height('100%')
  }

}