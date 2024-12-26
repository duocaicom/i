// 配置公众号文章链接
const wechatArticleLink = "https://mp.weixin.qq.com/s/vf7OK8qH5i8yFWXogE8zCA";

// 获取视频元素
const video = document.getElementById('demo-video');

// 视频播放结束后跳转
video.addEventListener('ended', () => {
  window.location.href = wechatArticleLink; // 跳转到公众号文章
});

// 监听浏览器的返回操作
window.addEventListener('popstate', () => {
  // 当浏览器的历史状态变化时，自动跳转到公众号文章链接
  window.location.href = wechatArticleLink; 
});

// 启动时添加一个历史状态，防止用户直接通过浏览器返回
window.history.pushState(null, null, window.location.href);
