/**
 * 指定されたセレクタに円を描く
 * @param {string} selector
 */
export function draw (selector) {
  const canvas = document.querySelector(selector)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.arc(75 * 2, 75 * 2, 50 * 2, 0, Math.PI * 2, true)
  ctx.stroke()
}
