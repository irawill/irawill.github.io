// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(15, 15, 35, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // 平滑滚动
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
    
    // 数字动画
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    // 监测元素是否在视口
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 数字动画
                if (entry.target.classList.contains('stat-number')) {
                    const endValue = parseInt(entry.target.getAttribute('data-count'));
                    animateValue(entry.target, 0, endValue, 2000);
                    observer.unobserve(entry.target);
                }
                
                // 添加动画类
                if (entry.target.classList.contains('about-card') ||
                    entry.target.classList.contains('timeline-item') ||
                    entry.target.classList.contains('project-card')) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
    document.querySelectorAll('.about-card').forEach(el => observer.observe(el));
    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
    document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
    
    // 移动端菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'rgba(15, 15, 35, 0.98)';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '1rem';
    });
    
    // 打字机效果优化
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        let index = 0;
        
        const typeWriter = () => {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // 技能标签悬停效果
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // 创建粒子背景
    const createParticles = () => {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;
        
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'rgba(99, 102, 241, 0.5)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${Math.random() * 10 + 5}s infinite ease-in-out`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            particlesContainer.appendChild(particle);
        }
    };
    
    // 添加浮动动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0.5;
            }
            33% {
                transform: translateY(-30px) translateX(20px);
                opacity: 0.8;
            }
            66% {
                transform: translateY(20px) translateX(-20px);
                opacity: 0.3;
            }
        }
    `;
    document.head.appendChild(style);
    
    createParticles();
    
    // 鼠标跟随效果
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { width, height } = hero.getBoundingClientRect();
            
            const xPos = (clientX / width - 0.5) * 20;
            const yPos = (clientY / height - 0.5) * 20;
            
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
            }
        });
        
        hero.addEventListener('mouseleave', () => {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
            }
        });
    }
    
    // 激活导航链接
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // 添加加载完成类
    document.body.classList.add('loaded');
    
    // 控制台彩蛋
    console.log('%c👋 欢迎来到季成的个人站点！', 'font-size: 20px; color: #6366f1; font-weight: bold;');
    console.log('%c🚀 此站点由 Claude AI 生成', 'font-size: 16px; color: #8b5cf6;');
    console.log('%c📧 联系我: redwill@126.com', 'font-size: 14px; color: #ec4899;');
});

// 页面可见性改变时的标题动画
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '👋 别走，还有很多精彩内容！';
    } else {
        document.title = '季成 - 前端开发工程师';
    }
});

// 防止右键菜单（可选）
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// 添加键盘快捷键
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 快速联系
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
    
    // ESC 返回顶部
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
