class Graphics {

  constructor(context) {
    this.ctx = context
  }

  reset() {
    this.ctx.fillStyle = '#000000'
    this.ctx.strokeStyle = '#000000'
    this.ctx.lineWidth = 1
  }

  clear(color = '#ffffff') {
    this.ctx.fillStyle = color

    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

    this.reset()
  }

  line(startx, starty, endx, endy, color = '#000000', thickness = 1, linecap = 'butt') {
    this.ctx.strokeStyle = color
    this.ctx.lineWidth = thickness
    this.ctx.lineCap = linecap

    this.ctx.beginPath()
    this.ctx.moveTo(startx, starty)
    this.ctx.lineTo(endx, endy)
    this.ctx.stroke()

    this.reset()
  }

  fillRect(x, y, width, height, color = '#000000') {
    this.ctx.fillStyle = color

    this.ctx.fillRect(x, y, width, height)
    this.ctx.fill()

    this.reset()
  }

  rect(x, y, width, height, color = '#000000', thickness = 1) {
    this.ctx.strokeStyle = color
    this.ctx.lineWidth = thickness

    this.ctx.beginPath()
    this.ctx.rect(x, y, width, height)
    this.ctx.stroke()

    this.reset()
  }

  circle(x, y, radius, color = '#000000') {
    this.ctx.fillStyle = color

    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    this.ctx.fill()

    this.reset()
  }

  ring(x, y, radius, color = '#000000', thickness = 1) {
    this.ctx.strokeStyle = color
    this.ctx.lineWidth = thickness

    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    this.ctx.stroke()

    this.reset()
  }

  text(x, y, text, color = '#000000', font = '') {
    this.ctx.fillStyle = color
    this.ctx.font = font

    this.ctx.fillText(text, x, y)

    this.reset()
  }

}