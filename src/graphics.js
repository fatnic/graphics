class Graphics {

  constructor(context) {
    this.ctx = context
  }

  clear(color = '#ffffff') {
    this.ctx.fillStyle = color
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  line(startx, starty, endx, endy, color = '#000000', thickness = 1, linecap = 'butt') {
    this.ctx.strokeStyle = color
    this.ctx.lineWidth = thickness
    this.ctx.lineCap = linecap
    
    this.ctx.beginPath()
    this.ctx.moveTo(startx, starty)
    this.ctx.lineTo(endx, endy)
    this.ctx.stroke()
  }

}