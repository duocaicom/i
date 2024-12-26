// 配置公众号文章链接
const wechatArticleLink = "https://mp.weixin.qq.com/s/vf7OK8qH5i8yFWXogE8zCA";

// 获取视频元素
const video = document.getElementById('demo-video');

// 视频播放结束后跳转
video.addEventListener('ended', () => {
  window.location.href = wechatArticleLink; // 跳转到公众号文章
});

// 监听滑动手势（从左到右滑动）
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

  // 判断滑动方向：从左向右滑动
  if (Math.abs(diffX) > Math.abs(diffY) && diffX > 10) {
    window.location.href = wechatArticleLink; // 跳转到公众号文章
  }
});
