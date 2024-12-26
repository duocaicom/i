// 配置公众号文章链接
const wechatArticleLink = "https://mp.weixin.qq.com/s/vf7OK8qH5i8yFWXogE8zCA";

// 获取视频元素
const video = document.getElementById('demo-video');
const playButton = document.getElementById('play-button');
const backButton = document.getElementById('back-button');

// 视频播放结束后跳转
video.addEventListener('ended', () => {
  window.location.href = wechatArticleLink; // 跳转到指定公众号文章
});

// 返回按钮点击后跳转
backButton.addEventListener('click', () => {
  window.location.href = wechatArticleLink; // 跳转到同样的链接
});

// 自动播放逻辑（可能需要用户交互）
video.play().catch((error) => {
  console.log('自动播放失败，显示播放按钮：', error);
  playButton.style.display = 'inline-block'; // 显示播放按钮
});

// 手动播放按钮（当自动播放失败时使用）
playButton.addEventListener('click', () => {
  video.play().catch((error) => {
    console.log('手动播放失败：', error);
  });
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

  // 判断滑动方向：从左向右滑动
  if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
    window.location.href = wechatArticleLink; // 跳转到公众号文章
  }
});
