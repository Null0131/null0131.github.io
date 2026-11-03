/* ==========================================================================
   Live2D 看板娘（shizuku）
   资源全部放在本站 /live2dw/ 下，不依赖 unpkg / jsdelivr
   想换位置就把 position 改成 'right'；想换大小改 width / height
   ========================================================================== */
(function () {
  if (typeof L2Dwidget === 'undefined') return

  L2Dwidget.init({
    log: false,
    tagMode: false,
    model: {
      jsonPath: '/live2dw/assets/shizuku.model.json',
      scale: 1
    },
    display: {
      position: 'left',
      width: 200,
      height: 400,
      hOffset: 0,
      vOffset: 0
    },
    mobile: {
      show: true,
      scale: 0.5
    },
    react: {
      opacity: 0.7
    }
  })
})()
