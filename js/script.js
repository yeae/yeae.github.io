// Apple Theme JavaScript

(function() {
    'use strict';

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Image lazy loading fallback
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--primary-color, #007aff);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        font-size: 1.5rem;
        display: none;
        z-index: 999;
    `;

    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
            setTimeout(() => backToTop.style.opacity = '0.8', 10);
        } else {
            backToTop.style.opacity = '0';
            setTimeout(() => backToTop.style.display = 'none', 300);
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Horizontal Scroll Auto-Scroll on Hover
    class HorizontalScrollAutoScroll {
        constructor(container) {
            this.container = container;
            this.isScrolling = false;
            this.animationId = null;
            this.EDGE_THRESHOLD = 80;  // 边缘触发区域（像素）
            this.MAX_SPEED = 8;  // 最大滚动速度

            this.init();
        }

        init() {
            this.container.addEventListener('mousemove', (e) => this.onMouseMove(e));
            this.container.addEventListener('mouseleave', () => this.stopScroll());
        }

        onMouseMove(e) {
            const rect = this.container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const speed = this.calculateSpeed(relativeX, rect.width);

            if (Math.abs(speed) > 0.1) {
                if (!this.isScrolling) {
                    this.startScroll(speed);
                }
            } else {
                this.stopScroll();
            }
        }

        calculateSpeed(x, width) {
            // 右边缘检测
            if (x > width - this.EDGE_THRESHOLD) {
                const dist = width - x;
                return this.MAX_SPEED * (1 - dist / this.EDGE_THRESHOLD);
            }
            // 左边缘检测
            if (x < this.EDGE_THRESHOLD) {
                return -this.MAX_SPEED * (1 - x / this.EDGE_THRESHOLD);
            }
            return 0;
        }

        startScroll(speed) {
            this.isScrolling = true;
            const scroll = () => {
                this.container.scrollLeft += speed;

                // 检查是否到达边界
                if (this.container.scrollLeft <= 0 ||
                    this.container.scrollLeft >= this.container.scrollWidth - this.container.clientWidth) {
                    this.stopScroll();
                    return;
                }

                if (this.isScrolling) {
                    this.animationId = requestAnimationFrame(scroll);
                }
            };
            this.animationId = requestAnimationFrame(scroll);
        }

        stopScroll() {
            this.isScrolling = false;
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
                this.animationId = null;
            }
        }
    }

    // 初始化所有横向滚动容器
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.posts-scroll-container').forEach(container => {
            new HorizontalScrollAutoScroll(container);
        });
    });

})();
