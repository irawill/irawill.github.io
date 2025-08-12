// 计算工作经验年数
function calculateYearsOfExperience() {
    const startDate = new Date(2016, 5); // 2016年6月 (月份从0开始)
    const currentDate = new Date();
    const years = Math.floor((currentDate - startDate) / (365.25 * 24 * 60 * 60 * 1000));
    return years;
}

// 语言配置
const languages = {
    zh: {
        // Navigation
        navHome: '首页',
        navAbout: '关于',
        navSkills: '技能',
        navExperience: '经历',
        navProjects: '项目',
        navContact: '联系',
        
        // Hero section
        heroTitle: '威尔',
        heroSubtitle: '前端开发工程师',
        heroDescription: `${calculateYearsOfExperience()}年+前端经验 | 技术与业务并重`,
        heroContact: '联系我',
        heroProjects: '查看作品',
        
        // About section
        aboutTitle: '关于我',
        aboutArch: '架构设计',
        aboutArchDesc: '负责多项B端平台的前端架构与落地，推动微前端化与模块化拆分',
        aboutComponents: '组件沉淀',
        aboutComponentsDesc: '抽象中后台通用组件，设计沉浸式文档阅读SDK，5分钟快速集成',
        aboutViz: '数据可视化',
        aboutVizDesc: '封装甘特图与大数据表格组件，基于ECharts/D3实现复杂图表',
        aboutFullstack: '全栈能力',
        aboutFullstackDesc: '既有C端播放器/互动业务经验，也有B端工程化与平台化沉淀',
        
        // Skills section
        skillsTitle: '技术栈',
        skillsFrontend: '前端框架',
        skillsViz: '可视化',
        skillsEngineering: '工程化',
        skillsFullstack: '全栈技术',
        
        // Experience section
        experienceTitle: '工作经历',
        exp1Company: '蚂蚁胜信（上海）信息技术有限公司',
        exp1Role: '前端开发工程师',
        exp1Tasks: [
            '负责研发效能、技术风险等平台工程业务，担任前端一号位',
            '负责技术风险领域下AI平台从0到1建设，支持智能体流程编排',
            '推动大型工程微前端拆分，改善页面加载与开发体验',
            '设计沉浸式文档阅读SDK，5分钟接入，在多BU推广'
        ],
        exp2Company: '小红书科技有限公司',
        exp2Role: '前端开发工程师',
        exp2Tasks: [
            '搭建活动H5平台，实现运营自助搭建与多平台快速接入',
            '基于ECharts/D3封装常用可视化组件，统一图表规范',
            '规范化动效（Lottie+WebGL），形成标准化玩法'
        ],
        exp3Company: '北京爱奇艺科技有限公司',
        exp3Role: '前端开发工程师',
        exp3Tasks: [
            '负责直播播放器相关业务，覆盖PC Web/桌面客户端/移动端',
            '优化播控体验与视频流输出链路'
        ],
        exp4Company: '上海沙湖信息科技有限公司',
        exp4Role: '前端开发工程师',
        exp4Tasks: [
            '使用Express+MongoDB设计与实现RESTful API',
            '参与混合App开发，落地烟感物联网平台'
        ],
        
        // Projects section
        projectsTitle: '代表项目',
        proj1Title: '沉浸式文档阅读解决方案',
        proj1Desc: '在中后台不切换标签页即可查阅/操作文档，新人上手更顺畅。以SDK形式封装，支持Markdown/HTML/语雀，5分钟快速集成，在多个业务线推广应用。',
        proj1Tags: ['SDK设计', 'Markdown', '产品化'],
        proj2Title: '活动H5平台',
        proj2Desc: '统一schema与数据管理，编辑器与活动页双向联动。形成可复用的活动组件生态，支撑多品牌活动上线。',
        proj2Tags: ['低代码', '组件化', '平台化'],
        proj3Title: '惊喜盒子（活动动效体系）',
        proj3Desc: '基于Lottie标准化动效素材与触发逻辑，使用WebGL实现半透明浮层等彩蛋效果，玩法复用与曝光更稳定。',
        proj3Tags: ['Lottie', 'WebGL', '动效'],
        proj4Title: '爱奇艺直播',
        proj4Desc: '播放器播控体验优化、视频流输出处理、日志埋点/投递、聊天室等模块完善，适配多端。',
        proj4Tags: ['播放器', '直播', '多端适配'],
        
        // Contact section
        contactTitle: '联系我',
        contactLocation: '上海',
        
        // Footer
        footerText: '此站点由',
        footerText1: '生成',
    },
    en: {
        // Navigation
        navHome: 'Home',
        navAbout: 'About',
        navSkills: 'Skills',
        navExperience: 'Experience',
        navProjects: 'Projects',
        navContact: 'Contact',
        
        // Hero section
        heroTitle: 'Will',
        heroSubtitle: 'Frontend Developer',
        heroDescription: `${calculateYearsOfExperience()}+ Years Experience | Tech & Business Focus`,
        heroContact: 'Contact Me',
        heroProjects: 'View Projects',
        
        // About section
        aboutTitle: 'About Me',
        aboutArch: 'Architecture',
        aboutArchDesc: 'Lead frontend architecture for multiple B2B platforms, promoting micro-frontend and modular splitting',
        aboutComponents: 'Components',
        aboutComponentsDesc: 'Abstract common components for admin platforms, design immersive document reading SDK with 5-minute integration',
        aboutViz: 'Data Visualization',
        aboutVizDesc: 'Encapsulate Gantt charts and big data table components, implement complex charts based on ECharts/D3',
        aboutFullstack: 'Full-stack',
        aboutFullstackDesc: 'Experience in both C-end player/interactive business and B-end engineering platform development',
        
        // Skills section
        skillsTitle: 'Tech Stack',
        skillsFrontend: 'Frontend',
        skillsViz: 'Visualization',
        skillsEngineering: 'Engineering',
        skillsFullstack: 'Full-stack',
        
        // Experience section
        experienceTitle: 'Experience',
        exp1Company: 'Ant Financial (Shanghai) Information Technology Co., Ltd.',
        exp1Role: 'Frontend Developer',
        exp1Tasks: [
            'Lead platform engineering for R&D efficiency and tech risk, serving as frontend lead',
            'Built AI platform from scratch for tech risk domain, supporting intelligent agent workflow orchestration',
            'Promoted micro-frontend architecture for large-scale projects, improving page loading and development experience',
            'Designed immersive document reading SDK with 5-minute integration, promoted across multiple BUs'
        ],
        exp2Company: 'Xiaohongshu Technology Co., Ltd.',
        exp2Role: 'Frontend Developer',
        exp2Tasks: [
            'Built H5 activity platform for self-service operations and multi-platform quick integration',
            'Encapsulated common visualization components based on ECharts/D3, unified chart specifications',
            'Standardized animations (Lottie+WebGL), forming standardized gameplay'
        ],
        exp3Company: 'Beijing iQiyi Technology Co., Ltd.',
        exp3Role: 'Frontend Developer',
        exp3Tasks: [
            'Led live streaming player business, covering PC Web/desktop client/mobile',
            'Optimized playback experience and video streaming output pipeline'
        ],
        exp4Company: 'Shanghai Shahu Information Technology Co., Ltd.',
        exp4Role: 'Frontend Developer',
        exp4Tasks: [
            'Designed and implemented RESTful APIs using Express+MongoDB',
            'Participated in hybrid app development for IoT smoke detection platform'
        ],
        
        // Projects section
        projectsTitle: 'Key Projects',
        proj1Title: 'Immersive Document Reading Solution',
        proj1Desc: 'Enable document viewing/editing within admin platforms without tab switching, improving onboarding experience. Packaged as SDK supporting Markdown/HTML/Yuque with 5-minute integration, promoted across multiple business lines.',
        proj1Tags: ['SDK Design', 'Markdown', 'Product'],
        proj2Title: 'H5 Activity Platform',
        proj2Desc: 'Unified schema and data management with bidirectional editor-page synchronization. Built reusable activity component ecosystem supporting multi-brand campaign launches.',
        proj2Tags: ['Low-code', 'Components', 'Platform'],
        proj3Title: 'Surprise Box (Activity Animation System)',
        proj3Desc: 'Standardized animation assets and trigger logic based on Lottie, implemented semi-transparent overlay effects with WebGL for stable gameplay reuse and exposure.',
        proj3Tags: ['Lottie', 'WebGL', 'Animation'],
        proj4Title: 'iQiyi Live Streaming',
        proj4Desc: 'Player control experience optimization, video stream output processing, logging/delivery, chat room enhancements, multi-platform adaptation.',
        proj4Tags: ['Player', 'Live Streaming', 'Multi-platform'],
        
        // Contact section
        contactTitle: 'Contact',
        contactLocation: 'Shanghai',
        
        // Footer
        footerText: 'Generated by',
        footerText1: '',
    }
};

// 主题和语言管理
class ThemeLanguageManager {
    constructor() {
        this.currentTheme = this.getSystemTheme();
        this.currentLanguage = this.getSystemLanguage();
        this.init();
    }
    
    getSystemTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    getSystemLanguage() {
        const savedLang = localStorage.getItem('language');
        if (savedLang) return savedLang;
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('zh') ? 'zh' : 'en';
    }
    
    init() {
        this.setTheme(this.currentTheme);
        this.setLanguage(this.currentLanguage);
        this.bindEvents();
        this.updateToggleButtons();
    }
    
    bindEvents() {
        document.querySelector('.theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });
        
        document.querySelector('.lang-toggle').addEventListener('click', () => {
            this.toggleLanguage();
        });
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(this.currentTheme);
        this.updateToggleButtons();
        localStorage.setItem('theme', this.currentTheme);
    }
    
    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'zh' ? 'en' : 'zh';
        this.setLanguage(this.currentLanguage);
        this.updateToggleButtons();
        localStorage.setItem('language', this.currentLanguage);
    }
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        document.querySelector('html').setAttribute('lang', this.currentLanguage === 'zh' ? 'zh-CN' : 'en');
    }
    
    setLanguage(language) {
        document.querySelector('html').setAttribute('lang', language === 'zh' ? 'zh-CN' : 'en');
        this.updateContent(language);
    }
    
    updateToggleButtons() {
        const themeBtn = document.querySelector('.theme-toggle');
        const langBtn = document.querySelector('.lang-toggle');
        
        themeBtn.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
        langBtn.textContent = this.currentLanguage === 'zh' ? 'EN' : '中';
    }
    
    updateContent(language) {
        const lang = languages[language];
        
        // Update navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks[0].textContent = lang.navHome;
        navLinks[1].textContent = lang.navAbout;
        navLinks[2].textContent = lang.navSkills;
        navLinks[3].textContent = lang.navExperience;
        navLinks[4].textContent = lang.navProjects;
        navLinks[5].textContent = lang.navContact;
        
        // Update hero section
        document.querySelector('.text-gradient').textContent = lang.heroTitle;
        document.querySelector('.hero-subtitle').textContent = lang.heroSubtitle;
        document.querySelector('.hero-description').textContent = lang.heroDescription;
        document.querySelectorAll('.btn')[0].textContent = lang.heroContact;
        document.querySelectorAll('.btn')[1].textContent = lang.heroProjects;
        
        // Update section titles
        document.querySelectorAll('.section-title')[0].textContent = lang.aboutTitle;
        document.querySelectorAll('.section-title')[1].textContent = lang.skillsTitle;
        document.querySelectorAll('.section-title')[2].textContent = lang.experienceTitle;
        document.querySelectorAll('.section-title')[3].textContent = lang.projectsTitle;
        document.querySelectorAll('.section-title')[4].textContent = lang.contactTitle;
        
        // Update about cards
        const aboutCards = document.querySelectorAll('.about-card h3');
        aboutCards[0].textContent = lang.aboutArch;
        aboutCards[1].textContent = lang.aboutComponents;
        aboutCards[2].textContent = lang.aboutViz;
        aboutCards[3].textContent = lang.aboutFullstack;
        
        const aboutDescs = document.querySelectorAll('.about-card p');
        aboutDescs[0].textContent = lang.aboutArchDesc;
        aboutDescs[1].textContent = lang.aboutComponentsDesc;
        aboutDescs[2].textContent = lang.aboutVizDesc;
        aboutDescs[3].textContent = lang.aboutFullstackDesc;
        
        // Update skills categories
        const skillCategories = document.querySelectorAll('.skill-category h3');
        skillCategories[0].textContent = lang.skillsFrontend;
        skillCategories[1].textContent = lang.skillsViz;
        skillCategories[2].textContent = lang.skillsEngineering;
        skillCategories[3].textContent = lang.skillsFullstack;
        
        // Update skill tags (specifically for 微前端)
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            if (tag.textContent === '微前端' && language === 'en') {
                tag.textContent = 'Micro Frontend';
            } else if (tag.textContent === 'Micro Frontend' && language === 'zh') {
                tag.textContent = '微前端';
            }
        });
        
        // Update experience section
        const timelineItems = document.querySelectorAll('.timeline-item');
        const companies = [lang.exp1Company, lang.exp2Company, lang.exp3Company, lang.exp4Company];
        const roles = [lang.exp1Role, lang.exp2Role, lang.exp3Role, lang.exp4Role];
        const tasks = [lang.exp1Tasks, lang.exp2Tasks, lang.exp3Tasks, lang.exp4Tasks];
        
        timelineItems.forEach((item, index) => {
            const company = item.querySelector('.timeline-content h3');
            const role = item.querySelector('.timeline-role');
            const taskList = item.querySelectorAll('.timeline-content li');
            
            if (company && companies[index]) {
                company.textContent = companies[index];
            }
            if (role && roles[index]) {
                role.textContent = roles[index];
            }
            if (taskList && tasks[index]) {
                taskList.forEach((task, taskIndex) => {
                    if (tasks[index][taskIndex]) {
                        task.textContent = tasks[index][taskIndex];
                    }
                });
            }
        });
        
        // Update projects section
        const projectCards = document.querySelectorAll('.project-card');
        const projTitles = [lang.proj1Title, lang.proj2Title, lang.proj3Title, lang.proj4Title];
        const projDescs = [lang.proj1Desc, lang.proj2Desc, lang.proj3Desc, lang.proj4Desc];
        const projTags = [lang.proj1Tags, lang.proj2Tags, lang.proj3Tags, lang.proj4Tags];
        
        projectCards.forEach((card, index) => {
            const title = card.querySelector('.project-header h3');
            const desc = card.querySelector('p');
            const tags = card.querySelectorAll('.project-tags span');
            
            if (title && projTitles[index]) {
                title.textContent = projTitles[index];
            }
            if (desc && projDescs[index]) {
                desc.textContent = projDescs[index];
            }
            if (tags && projTags[index]) {
                tags.forEach((tag, tagIndex) => {
                    if (projTags[index][tagIndex]) {
                        tag.textContent = projTags[index][tagIndex];
                    }
                });
            }
        });
        
        // Update contact location
        const contactItems = document.querySelectorAll('.contact-item span');
        contactItems.forEach(item => {
            if (item.textContent === '上海' && language === 'en') {
                item.textContent = lang.contactLocation;
            } else if (item.textContent === 'Shanghai' && language === 'zh') {
                item.textContent = lang.contactLocation;
            }
        });
        
        // Update footer
        const footerText = document.querySelector('.footer p');
        footerText.innerHTML = `© 2025 Will. ${lang.footerText} <span class="text-gradient">Claude AI</span> ${lang.footerText1}`;
        
        // Update document title
        document.title = language === 'zh' ? '威尔 - 前端开发工程师' : 'Will - Frontend Developer';
        document.querySelector('html').setAttribute('lang', language === 'zh' ? 'zh-CN' : 'en');
    }
}

// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 初始化主题和语言管理器
    new ThemeLanguageManager();
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
    console.log('%c👋 欢迎来到Will的个人站点！', 'font-size: 20px; color: #6366f1; font-weight: bold;');
    console.log('%c🚀 此站点由 Claude AI 生成', 'font-size: 16px; color: #8b5cf6;');
    console.log('%c📧 联系我: redwill@126.com', 'font-size: 14px; color: #ec4899;');
});

// 页面可见性改变时的标题动画
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '👋 别走，还有很多精彩内容！';
    } else {
        document.title = '威尔 - 前端开发工程师';
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
