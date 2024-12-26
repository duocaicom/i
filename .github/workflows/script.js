// 配置公众号文章链接
const wechatArticleLink = "https://mp.weixin.qq.com/s/vf7OK8qH5i8yFWXogE8zCA";

// 视频播放结束后跳转
const video = document.getElementById('demo-video');
video.addEventListener('ended', () => {
  window.location.href = wechatArticleLink; // 跳转到指定公众号文章
});

// 返回按钮点击后跳转
const backButton = document.getElementById('back-button');
backButton.addEventListener('click', () => {
  window.location.href = wechatArticleLink; // 跳转到同样的链接
});

// 监听滑动手势
let startX = 0;
let startY = 0;

document.addEventListener('touchstart', (event) => {
  const touch = event.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;
});

document.addEventListener('touchend', (event) => {
  const touch = event.changedTouches[0];
  const endX = touch.clientX;
  const endY = touch.clientY;

  const diffX = endX - startX;
  const diffY = endY - startY;

  // 判断滑动方向：左滑或右滑
  if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
    // 从左向右滑动触发跳转
    window.location.href = wechatArticleLink;
  }
});
