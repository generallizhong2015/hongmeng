import { preferences } from '@kit.ArkData'
import { prompt } from '@kit.ArkUI'

@Component
@Entry
@Preview
struct TestPage {
  @State name: string = '' as string
  @State age: number = 0 as number

  build() {
    Column() {
      Text('存储数据')
        .fontColor(Color.Red)
        .fontSize(16)
        .padding(5)
        .backgroundColor($r('app.color.home_grid_fontColor'))
        .borderRadius(10)
        .width(100)
        .onClick(() => {
          let context = getContext()
          let myPrefs = preferences.getPreferencesSync(context, { name: 'myPrefs' })
          myPrefs.put('name', '张三')
          myPrefs.put('age', 18)
          prompt.showToast({ message: '保存成功', duration: 2000 })
        });


      Text('存储数据')
        .fontColor(Color.Red)
        .fontSize(16)
        .padding(5)

        .onClick(() => {
          let context = getContext()
          let myPrefs = preferences.getPreferencesSync(context, { name: 'myPrefs' })
          myPrefs.put('name', '李四')
          myPrefs.put('age', 108)
          prompt.showToast({ message: '更改成功', duration: 2000 })
        })
      Text('获取数据')
        .fontColor(Color.Red)
        .fontSize(16)
        .padding(5)

        .onClick(() => {
          let context = getContext()
          let myPrefs = preferences.getPreferencesSync(context, { name: 'myPrefs' })
          let name = myPrefs.getSync('name', '') as string
          let age = myPrefs.getSync('age', 0) as number
          this.name = name
          this.age = age
          prompt.showToast({ message: '读取成功', duration: 2000 })
        })
      Text('name: ' + this.name)
        .fontColor(Color.Black)
        .fontSize(12)
        .width('100')
      Text('age: ' + this.age)
        .fontColor(Color.Black)
        .fontSize(12)
        .width('100')
    }.width('100%').alignItems(HorizontalAlign.Center)
  }
}