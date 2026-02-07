/**
 * Apple 风格 JavaScript 效果
 * 添加流畅的滚动和动画效果
 */

(function() {
  'use strict';

  // 平滑滚动到顶部
  function smoothScrollToTop() {
    const scrollBtn = document.querySelector('.scroll-top-button');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // 导航栏滚动效果
  function navbarScrollEffect() {
    const navbar = document.querySelector('#navbar');
    if (!navbar) return;

    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      // 向下滚动时添加阴影
      if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      } else {
        navbar.style.boxShadow = 'none';
      }

      lastScroll = currentScroll;
    });
  }

  // 卡片渐入效果
  function cardFadeInEffect() {
    const cards = document.querySelectorAll('.index-card, .post-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    }, {
      threshold: 0.1
    });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }

  // 图片懒加载优化
  function optimizeImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // 添加视差效果
  function parallaxEffect() {
    const banner = document.querySelector('.banner');
    if (!banner) return;

    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      banner.style.transform = `translateY(${parallax}px)`;
    });
  }

  // 代码块复制功能增强
  function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
      const wrapper = block.parentElement;

      // 添加复制按钮
      const copyBtn = document.createElement('button');
      copyBtn.className = 'code-copy-btn';
      copyBtn.innerHTML = '复制';
      copyBtn.style.cssText = `
        position: absolute;
        top: 8px;
        right: 8px;
        padding: 4px 12px;
        font-size: 12px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.1);
        color: #f5f5f7;
        border: 1px solid rgba(255, 255, 255, 0.2);
        cursor: pointer;
        transition: all 0.2s ease;
      `;

      copyBtn.addEventListener('click', function() {
        const code = block.textContent;
        navigator.clipboard.writeText(code).then(() => {
          copyBtn.innerHTML = '已复制!';
          setTimeout(() => {
            copyBtn.innerHTML = '复制';
          }, 2000);
        });
      });

      if (wrapper.style.position !== 'absolute') {
        wrapper.style.position = 'relative';
      }
      wrapper.appendChild(copyBtn);
    });
  }

  // 页面加载完成后执行
  document.addEventListener('DOMContentLoaded', function() {
    smoothScrollToTop();
    navbarScrollEffect();
    cardFadeInEffect();
    optimizeImages();
    enhanceCodeBlocks();

    // 延迟加载视差效果，避免影响性能
    setTimeout(parallaxEffect, 1000);
  });

  // 添加页面过渡效果
  window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
  });

})();
