import { router } from '@kit.ArkUI'

@Preview
@Entry
@Component
struct Welcome {
  @State voide:Resource = $r('app.media.welcome')
  @State currentProgressRate:number = 0
  @State textContet:string='欢迎来到bitlong钱包'
  @State  createTime:number = 0
  @State timenum:number = 3

  build() {
    Column() {

      Stack(){
        Video({src:this.voide,currentProgressRate:this.createTime}).width('100%').height('100%').autoPlay(true).controls(false).onPrepared(()=>{
          console.info('开始播放')
        })
          .onUpdate(()=>{
            console.info('播放中..')
          })
          .onFinish(()=>{
            this.toLogin()
          })

        Text(this.textContet).fontSize(15).fontColor($r('app.color.logout_font_color')).margin(10)
      }
    }.width('100%').height('100%').justifyContent(FlexAlign.Center)
  }
  onPageShow(): void {
    const  timer = setInterval(()=>{
      if(this.timenum<=0){
        clearInterval(timer)
      }
    },1000)
  }
  toLogin(){
    router.push({url:'pages/LoginPage'})
  }
}