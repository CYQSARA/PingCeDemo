Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  position:{
    x:0,
    y:0
  },
  anptherP:{
    x:375,
    y:300
  },
  onReady: function (e) {
    this.draw()
  },
  canvasClick:function(e) {
    console.log(e.touches[0].x, e.touches[0].y);
    setInterval(this.draw,100)
  },
  draw:function(e){

    this.position.x ++;
    this.position.y ++;
    this.anptherP.x --;
    this.anptherP.y --;

    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')
    var context2 = wx.createCanvasContext('secondCanvas')

    // context.setStrokeStyle("#00ff00")
    // context.setLineWidth(5)
    // context.rect(0, 0, 200, 200)
    // context.stroke()

    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)

    context2.setStrokeStyle("#ff0000")
    context2.setLineWidth(2)

    // context.moveTo(160, 100)
    context.arc(this.position.x, this.position.y, 60, 0, 2 * Math.PI,true)

    // context.moveTo(140, 100)
    context2.arc(this.anptherP.x, this.anptherP.y, 20, 0, 2* Math.PI,true)

    // context.moveTo(85, 80)
    // context.arc(80, 80, 5, 0, 2 * Math.PI, true)

    // context.moveTo(125, 80)
    // context.arc(120, 80, 5, 0, 2 * Math.PI, true)

    context.stroke()
    context.draw()

    context2.stroke()
    context2.draw()

  }
})