/**
 * 指定されたセレクタに正方形を描く
 * @param {string} selector
 */
function draw (selector) {
  const canvas = document.querySelector(selector)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.strokeRect(75, 75, 50, 50)
}
