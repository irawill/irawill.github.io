// 计算工作经验年数
// 精确计算工作年限（支持返回整年或带小数）
// 说明：
// - 整年：周年未到不算入该年
// - 小数：按“本周年->下周年”的实际天数做比例
// - 全程使用 UTC，避免时区/DST 影响
function calculateYearsOfExperience(startDate = new Date(2016, 6, 1), endDate = new Date(), { fractional = false, clampFutureToZero = true } = {}) {
    // 支持传字符串或 Date
    const s0 = (startDate instanceof Date) ? startDate : new Date(startDate);
    const e0 = (endDate instanceof Date) ? endDate : new Date(endDate);

    // 归一到 UTC 的“日期”（去掉时间部分）
    const toUTCDate = (d) => new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const s = toUTCDate(s0);
    const e = toUTCDate(e0);

    if (e < s) return clampFutureToZero ? 0 : -calculateYearsOfExperience(e, s, { fractional: true, clampFutureToZero: false });

    // 先算整年
    let years = e.getUTCFullYear() - s.getUTCFullYear();
    const anniversaryThisYear = new Date(Date.UTC(e.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()));
    if (e < anniversaryThisYear) years--; // 周年没到，再减一年

    if (!fractional) return years; // 只要整年，直接返回

    // 计算小数：本周年到下周年的比例
    const lastAnniv = new Date(Date.UTC(s.getUTCFullYear() + years, s.getUTCMonth(), s.getUTCDate()));
    const nextAnniv = new Date(Date.UTC(s.getUTCFullYear() + years + 1, s.getUTCMonth(), s.getUTCDate()));
    const fraction = (e - lastAnniv) / (nextAnniv - lastAnniv);
    return years + fraction;
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
        aboutComponentsDesc: '抽象封装业务通用组件，设计沉浸式文档阅读SDK，5分钟快速集成',
        aboutViz: '数据可视化',
        aboutVizDesc: '封装甘特图与大数据表格组件，基于ECharts/D3实现复杂图表',
        aboutFullstack: '全栈能力',
        aboutFullstackDesc: '既有C端播放器/互动业务经验，也有B端工程化与平台化沉淀',
        aboutAI: 'AI辅助工程能力',
        aboutAIDesc: '主导AI生码方向探索，负责文档驱动生码方案落地，Prompt优化与Vibe Coding实践',

        // Skills section
        skillsTitle: '技术栈',
        skillsFrontend: '前端框架',
        skillsViz: '可视化',
        skillsEngineering: '工程化',
        skillsFullstack: '全栈技术',

        // Experience section
        experienceTitle: '工作经历',
        exp1Company: '某全球Top5数字金融科技集团',
        exp1Role: '营销活动前端负责人',
        exp1Date: '2025.09 - 至今',
        exp1Tasks: [
            'Growth UI 组件库从0到1搭建（四层架构、CSS Module + Design Token、dumi文档、Jest测试、CI/CD）',
            '主导7+营销活动项目交付（WCTC赛事、万圣节活动、AI Trading竞赛等）',
            'AI代码生成探索（图生代码、PRD模版化、Prompt优化、Vibe Coding）',
            '工程基建（Builder水合治理、WebPro监控、Header动态配置）',
            '团队管理（周会制度、OKR辅导、新人文档、跨团队协作）'
        ],
        exp2Company: '蚂蚁胜信（上海）信息技术有限公司',
        exp2Role: '前端开发工程师',
        exp2Date: '2021.08 - 2025.07',
        exp2Tasks: [
            '负责研发效能、技术风险等平台工程业务，担任前端一号位',
            '负责技术风险领域下AI平台从0到1建设，支持智能体流程编排',
            '推动大型工程微前端拆分，改善页面加载与开发体验',
            '设计沉浸式文档阅读SDK，5分钟接入，在多BU推广'
        ],
        exp3Company: '小红书科技有限公司',
        exp3Role: '前端开发工程师',
        exp3Date: '2019.06 - 2021.08',
        exp3Tasks: [
            '搭建活动H5平台，实现运营自助搭建与多平台快速接入',
            '基于ECharts/D3封装常用可视化组件，统一图表规范',
            '规范化动效（Lottie+WebGL），形成标准化玩法'
        ],
        exp4Company: '北京爱奇艺科技有限公司',
        exp4Role: '前端开发工程师',
        exp4Date: '2018.07 - 2019.05',
        exp4Tasks: [
            '负责直播播放器相关业务，覆盖PC Web/桌面客户端/移动端',
            '优化播控体验与视频流输出链路'
        ],
        exp5Company: '上海沙湖信息科技有限公司',
        exp5Role: '前端开发工程师',
        exp5Date: '2016.06 - 2018.06',
        exp5Tasks: [
            '使用Express+MongoDB设计与实现RESTful API',
            '参与混合App开发，落地烟感物联网平台'
        ],

        // Projects section
        projectsTitle: '代表项目',
        proj1Title: 'AI生成活动页',
        proj1Date: '2026.01 - 至今',
        proj1Desc: '主导活动侧AI生码方向探索，明确图生代码技术路线，PRD输入模版化，工程基座搭建，Prompt优化与Vibe Coding实践，提升活动页开发效率。',
        proj1Tags: ['AI生码', 'Prompt Engineering', 'Vibe Coding'],
        proj2Title: 'Growth UI 组件库',
        proj2Date: '2025.09 - 至今',
        proj2Desc: '从0到1搭建营销活动组件库，四层架构设计（基础组件/业务组件/模板/页面），采用 CSS Module + Design Token 方案，配套 dumi 文档站、Jest 单测覆盖、CI/CD 自动化发布。',
        proj2Tags: ['组件库', 'Design Token', 'dumi'],
        proj3Title: '沉浸式文档阅读解决方案',
        proj3Date: '2022.07 - 2023.12',
        proj3Desc: '在中后台不切换标签页即可查阅/操作文档，新人上手更顺畅。以SDK形式封装，支持Markdown/HTML/语雀，5分钟快速集成，在多个业务线推广应用。',
        proj3Tags: ['SDK设计', 'Markdown', '产品化'],
        proj4Title: '活动H5平台',
        proj4Date: '2020.07 - 2021.03',
        proj4Desc: '统一schema与数据管理，编辑器与活动页双向联动。形成可复用的活动组件生态，支撑多品牌活动上线。',
        proj4Tags: ['低代码', '组件化', '平台化'],
        proj5Title: '惊喜盒子（活动动效体系）',
        proj5Date: '2020.03 - 2020.06',
        proj5Desc: '基于Lottie标准化动效素材与触发逻辑，使用WebGL实现半透明浮层等彩蛋效果，玩法复用与曝光更稳定。',
        proj5Tags: ['Lottie', 'WebGL', '动效'],
        proj6Title: '爱奇艺直播',
        proj6Date: '2018.07 - 2019.06',
        proj6Desc: '播放器播控体验优化、视频流输出处理、日志埋点/投递、聊天室等模块完善，适配多端。',
        proj6Tags: ['播放器', '直播', '多端适配'],

        // Contact section
        contactTitle: '联系我',
        contactLocation: '上海',
        contactWebsite: '个人站点',

        // Footer
        footerText: '此站点由',
        footerText1: '生成',

        // Page title
        pageTitle: '威尔 - 前端开发工程师',
        pageTitleAway: '👋 别走，还有很多精彩内容！',
        pageTitleBack: '🎉 欢迎回来！继续探索吧～',
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
        aboutComponentsDesc: 'Build reusable business components, design an immersive document reading SDK with 5-minute integration',
        aboutViz: 'Data Visualization',
        aboutVizDesc: 'Encapsulate Gantt charts and big data table components, implement complex charts based on ECharts/D3',
        aboutFullstack: 'Full-stack',
        aboutFullstackDesc: 'Experience in both C-end player/interactive business and B-end engineering platform development',
        aboutAI: 'AI-Assisted Engineering',
        aboutAIDesc: 'Led AI code generation exploration, delivered a document-driven code generation solution, with Prompt optimization and Vibe Coding practices',

        // Skills section
        skillsTitle: 'Tech Stack',
        skillsFrontend: 'Frontend',
        skillsViz: 'Visualization',
        skillsEngineering: 'Engineering',
        skillsFullstack: 'Full-stack',

        // Experience section
        experienceTitle: 'Experience',
        exp1Company: 'A Global Top-5 Digital Finance & Technology Group',
        exp1Role: 'Marketing Activity Frontend Lead',
        exp1Date: '2025.09 - Present',
        exp1Tasks: [
            'Built Growth UI component library from scratch (4-layer architecture, CSS Module + Design Token, dumi docs, Jest testing, CI/CD)',
            'Led 7+ marketing campaign project deliveries (WCTC tournament, Halloween event, AI Trading competition, etc.)',
            'AI code generation exploration (image-to-code, PRD templatization, Prompt optimization, Vibe Coding)',
            'Engineering infrastructure (Builder hydration governance, WebPro monitoring, Header dynamic configuration)',
            'Team management (weekly meetings, OKR coaching, onboarding docs, cross-team collaboration)'
        ],
        exp2Company: 'Ant Group',
        exp2Role: 'Frontend Developer',
        exp2Date: '2021.08 - 2025.07',
        exp2Tasks: [
            'Lead platform engineering for R&D efficiency and tech risk, serving as frontend lead',
            'Built AI platform from scratch for tech risk domain, supporting intelligent agent workflow orchestration',
            'Promoted micro-frontend architecture for large-scale projects, improving page loading and development experience',
            'Designed immersive document reading SDK with 5-minute integration, promoted across multiple BUs'
        ],
        exp3Company: 'REDnote',
        exp3Role: 'Frontend Developer',
        exp3Date: '2019.06 - 2021.08',
        exp3Tasks: [
            'Built H5 activity platform for self-service operations and multi-platform quick integration',
            'Encapsulated common visualization components based on ECharts/D3, unified chart specifications',
            'Standardized animations (Lottie+WebGL), forming standardized gameplay'
        ],
        exp4Company: 'iQIYI',
        exp4Role: 'Frontend Developer',
        exp4Date: '2018.07 - 2019.05',
        exp4Tasks: [
            'Led live streaming player business, covering PC Web/desktop client/mobile',
            'Optimized playback experience and video streaming output pipeline'
        ],
        exp5Company: 'Sandlacus Technology Co.,Ltd.',
        exp5Role: 'Frontend Developer',
        exp5Date: '2016.06 - 2018.06',
        exp5Tasks: [
            'Designed and implemented RESTful APIs using Express+MongoDB',
            'Participated in hybrid app development for IoT smoke detection platform'
        ],

        // Projects section
        projectsTitle: 'Key Projects',
        proj1Title: 'AI-Generated Campaign Pages',
        proj1Date: '2026.01 - Present',
        proj1Desc: 'Led AI code generation exploration for marketing campaigns, established image-to-code technical roadmap, PRD input templatization, engineering foundation setup, Prompt optimization and Vibe Coding practices to improve campaign page development efficiency.',
        proj1Tags: ['AI Code Gen', 'Prompt Engineering', 'Vibe Coding'],
        proj2Title: 'Growth UI Component Library',
        proj2Date: '2025.09 - Present',
        proj2Desc: 'Built marketing campaign component library from scratch with 4-layer architecture (base/business components/templates/pages), CSS Module + Design Token approach, dumi documentation site, Jest unit test coverage, and CI/CD automated publishing.',
        proj2Tags: ['Component Library', 'Design Token', 'dumi'],
        proj3Title: 'Immersive Document Reading Solution',
        proj3Date: '2022.07 - 2023.12',
        proj3Desc: 'Enable document viewing/editing within admin platforms without tab switching, improving onboarding experience. Packaged as SDK supporting Markdown/HTML/Yuque with 5-minute integration, promoted across multiple business lines.',
        proj3Tags: ['SDK Design', 'Markdown', 'Product'],
        proj4Title: 'H5 Activity Platform',
        proj4Date: '2020.07 - 2021.03',
        proj4Desc: 'Unified schema and data management with bidirectional editor-page synchronization. Built reusable activity component ecosystem supporting multi-brand campaign launches.',
        proj4Tags: ['Low-code', 'Components', 'Platform'],
        proj5Title: 'Surprise Box (Activity Animation System)',
        proj5Date: '2020.03 - 2020.06',
        proj5Desc: 'Standardized animation assets and trigger logic based on Lottie, implemented semi-transparent overlay effects with WebGL for stable gameplay reuse and exposure.',
        proj5Tags: ['Lottie', 'WebGL', 'Animation'],
        proj6Title: 'iQiyi Live Streaming',
        proj6Date: '2018.07 - 2019.06',
        proj6Desc: 'Player control experience optimization, video stream output processing, logging/delivery, chat room enhancements, multi-platform adaptation.',
        proj6Tags: ['Player', 'Live Streaming', 'Multi-platform'],

        // Contact section
        contactTitle: 'Contact',
        contactLocation: 'Shanghai',
        contactWebsite: 'Personal Website',

        // Footer
        footerText: 'Generated by',
        footerText1: '',

        // Page title
        pageTitle: 'Will - Frontend Developer',
        pageTitleAway: '👋 Don\'t leave! More amazing content awaits!',
        pageTitleBack: '🎉 Welcome back! Continue exploring～',
    }
};

let typewriterTimer = null;
let typewriterRunId = 0;

function startTypewriter(text, { startDelay = 500, charDelay = 100 } = {}) {
    const typingElement = document.querySelector('.hero-subtitle');
    if (!typingElement) return;

    typewriterRunId += 1;
    const currentRunId = typewriterRunId;

    if (typewriterTimer) {
        clearTimeout(typewriterTimer);
        typewriterTimer = null;
    }

    // 重置 CSS 动画，保持原有打字机视觉效果
    typingElement.classList.remove('typing-active');
    void typingElement.offsetWidth;
    typingElement.classList.add('typing-active');
    typingElement.textContent = '';

    let index = 0;
    const chars = Array.from(text || '');
    const typeNext = () => {
        if (currentRunId !== typewriterRunId) return;
        if (index < chars.length) {
            typingElement.textContent += chars[index];
            index += 1;
            typewriterTimer = setTimeout(typeNext, charDelay);
        } else {
            typewriterTimer = null;
        }
    };

    typewriterTimer = setTimeout(typeNext, startDelay);
}

// 主题和语言管理
class ThemeLanguageManager {
    constructor() {
        this.currentTheme = this.getSavedTheme() || this.getSystemTheme();
        this.currentLanguage = this.getSavedLanguage() || this.getSystemLanguage();
        this.pendingContentUpdateId = 0;
        this.init();
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    getSystemLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('zh') ? 'zh' : 'en';
    }

    getSavedTheme() {
        return localStorage.getItem('theme');
    }

    getSavedLanguage() {
        return localStorage.getItem('language');
    }

    saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    saveLanguage(language) {
        localStorage.setItem('language', language);
    }

    init() {
        this.setTheme(this.currentTheme);
        // 首屏阶段只做关键区块同步，非关键区块延迟到空闲期，减少首次长任务。
        this.setLanguage(this.currentLanguage, {
            animateTypewriter: false,
            deferNonCritical: true
        });
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
        this.saveTheme(this.currentTheme);
        this.updateToggleButtons();
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'zh' ? 'en' : 'zh';
        this.setLanguage(this.currentLanguage, {
            animateTypewriter: true,
            deferNonCritical: false
        });
        this.saveLanguage(this.currentLanguage);
        this.updateToggleButtons();
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    setLanguage(language, { animateTypewriter = true, deferNonCritical = false } = {}) {
        document.querySelector('html').setAttribute('lang', language === 'zh' ? 'zh-CN' : 'en');
        this.updateContent(language, { animateTypewriter, deferNonCritical });
    }

    updateToggleButtons() {
        const themeBtn = document.querySelector('.theme-toggle');
        const langBtn = document.querySelector('.lang-toggle');

        themeBtn.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
        langBtn.textContent = this.currentLanguage === 'zh' ? 'EN' : '中';
    }

    updateContent(language, { animateTypewriter = true, deferNonCritical = false } = {}) {
        const langConfig = languages[language];
        const updateId = ++this.pendingContentUpdateId;

        // Update navigation
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks.length >= 6) {
            navLinks[0].textContent = langConfig.navHome;
            navLinks[1].textContent = langConfig.navAbout;
            navLinks[2].textContent = langConfig.navSkills;
            navLinks[3].textContent = langConfig.navExperience;
            navLinks[4].textContent = langConfig.navProjects;
            navLinks[5].textContent = langConfig.navContact;
        }

        // Update hero section
        const heroTitle = document.querySelector('.text-gradient');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        const heroButtons = document.querySelectorAll('.btn');

        if (heroTitle) {
            heroTitle.textContent = langConfig.heroTitle;
        }
        if (animateTypewriter) {
            startTypewriter(langConfig.heroSubtitle);
        } else if (heroSubtitle) {
            if (typewriterTimer) {
                clearTimeout(typewriterTimer);
                typewriterTimer = null;
            }
            typewriterRunId += 1;
            heroSubtitle.classList.remove('typing-active');
            heroSubtitle.textContent = langConfig.heroSubtitle;
        }
        if (heroDescription) {
            heroDescription.textContent = langConfig.heroDescription;
        }
        if (heroButtons.length >= 2) {
            heroButtons[0].textContent = langConfig.heroContact;
            heroButtons[1].textContent = langConfig.heroProjects;
        }

        // Update document title
        document.title = langConfig.pageTitle;

        const updateNonCritical = () => {
            if (updateId !== this.pendingContentUpdateId) return;

            // Update section titles
            const sectionTitles = document.querySelectorAll('.section-title');
            if (sectionTitles.length >= 5) {
                sectionTitles[0].textContent = langConfig.aboutTitle;
                sectionTitles[1].textContent = langConfig.skillsTitle;
                sectionTitles[2].textContent = langConfig.experienceTitle;
                sectionTitles[3].textContent = langConfig.projectsTitle;
                sectionTitles[4].textContent = langConfig.contactTitle;
            }

            // Update about cards
            const aboutCards = document.querySelectorAll('.about-card h3');
            if (aboutCards.length >= 5) {
                aboutCards[0].textContent = langConfig.aboutArch;
                aboutCards[1].textContent = langConfig.aboutComponents;
                aboutCards[2].textContent = langConfig.aboutViz;
                aboutCards[3].textContent = langConfig.aboutFullstack;
                aboutCards[4].textContent = langConfig.aboutAI;
            }

            const aboutDescs = document.querySelectorAll('.about-card p');
            if (aboutDescs.length >= 5) {
                aboutDescs[0].textContent = langConfig.aboutArchDesc;
                aboutDescs[1].textContent = langConfig.aboutComponentsDesc;
                aboutDescs[2].textContent = langConfig.aboutVizDesc;
                aboutDescs[3].textContent = langConfig.aboutFullstackDesc;
                aboutDescs[4].textContent = langConfig.aboutAIDesc;
            }

            // Update skills categories
            const skillCategories = document.querySelectorAll('.skill-category h3');
            if (skillCategories.length >= 4) {
                skillCategories[0].textContent = langConfig.skillsFrontend;
                skillCategories[1].textContent = langConfig.skillsViz;
                skillCategories[2].textContent = langConfig.skillsEngineering;
                skillCategories[3].textContent = langConfig.skillsFullstack;
            }

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
            const companies = [langConfig.exp1Company, langConfig.exp2Company, langConfig.exp3Company, langConfig.exp4Company, langConfig.exp5Company];
            const roles = [langConfig.exp1Role, langConfig.exp2Role, langConfig.exp3Role, langConfig.exp4Role, langConfig.exp5Role];
            const dates = [langConfig.exp1Date, langConfig.exp2Date, langConfig.exp3Date, langConfig.exp4Date, langConfig.exp5Date];
            const tasks = [langConfig.exp1Tasks, langConfig.exp2Tasks, langConfig.exp3Tasks, langConfig.exp4Tasks, langConfig.exp5Tasks];

            timelineItems.forEach((item, index) => {
                const dateEl = item.querySelector('.timeline-date');
                const company = item.querySelector('.timeline-content h3');
                const role = item.querySelector('.timeline-role');
                const taskList = item.querySelectorAll('.timeline-content li');

                if (dateEl && dates[index]) {
                    dateEl.textContent = dates[index];
                }
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
            const projTitles = [langConfig.proj1Title, langConfig.proj2Title, langConfig.proj3Title, langConfig.proj4Title, langConfig.proj5Title, langConfig.proj6Title];
            const projDescs = [langConfig.proj1Desc, langConfig.proj2Desc, langConfig.proj3Desc, langConfig.proj4Desc, langConfig.proj5Desc, langConfig.proj6Desc];
            const projTags = [langConfig.proj1Tags, langConfig.proj2Tags, langConfig.proj3Tags, langConfig.proj4Tags, langConfig.proj5Tags, langConfig.proj6Tags];
            const projDates = [langConfig.proj1Date, langConfig.proj2Date, langConfig.proj3Date, langConfig.proj4Date, langConfig.proj5Date, langConfig.proj6Date];

            projectCards.forEach((card, index) => {
                const title = card.querySelector('.project-header h3');
                const dateEl = card.querySelector('.project-date');
                const desc = card.querySelector('p');
                const tags = card.querySelectorAll('.project-tags span');

                if (title && projTitles[index]) {
                    title.textContent = projTitles[index];
                }
                if (dateEl && projDates[index]) {
                    dateEl.textContent = projDates[index];
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

            // Update contact location and website
            const contactItems = document.querySelectorAll('.contact-item');
            contactItems.forEach(item => {
                const span = item.querySelector('span:not(.contact-icon)');
                const link = item.querySelector('a');

                if (span) {
                    if (span.textContent === '上海' && language === 'en') {
                        span.textContent = langConfig.contactLocation;
                    } else if (span.textContent === 'Shanghai' && language === 'zh') {
                        span.textContent = langConfig.contactLocation;
                    }
                }

                if (link && link.href === 'https://irawill.space/') {
                    if (link.textContent === '个人站点' && language === 'en') {
                        link.textContent = langConfig.contactWebsite;
                    } else if (link.textContent === 'Personal Website' && language === 'zh') {
                        link.textContent = langConfig.contactWebsite;
                    }
                }
            });

            // Update footer
            const footerText = document.querySelector('.footer p');
            if (footerText) {
                footerText.innerHTML = `© 2026 Will. ${langConfig.footerText} <span class="text-gradient">Claude &amp; Codex</span> ${langConfig.footerText1}`;
            }
        };

        if (!deferNonCritical) {
            updateNonCritical();
            return;
        }

        const runDeferredUpdate = () => {
            if (updateId !== this.pendingContentUpdateId) return;
            updateNonCritical();
        };

        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(runDeferredUpdate, { timeout: 700 });
            return;
        }

        setTimeout(runDeferredUpdate, 220);
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// 全局主题和语言管理器实例
let themeLanguageManager;

// 页面加载动画
function initPageInteractions() {
    // 初始化主题和语言管理器
    themeLanguageManager = new ThemeLanguageManager();
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

    // 移动端菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    let isMobileMenuOpen = false;

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
        
        if (isMobileMenuOpen) {
            // 打开菜单
            navMenu.style.display = 'flex';
            navMenu.classList.add('mobile-menu');
            mobileOverlay.classList.add('active');
            
            // 延迟添加active类以触发动画
            setTimeout(() => {
                navMenu.classList.add('active');
            }, 10);
            
            // 阻止body滚动
            document.body.style.overflow = 'hidden';
            
            // 更新汉堡按钮动画
            navToggle.classList.add('active');
        } else {
            // 关闭菜单
            navMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            
            // 延迟隐藏以等待动画完成
            setTimeout(() => {
                navMenu.style.display = 'none';
                navMenu.classList.remove('mobile-menu');
            }, 300);
            
            // 恢复body滚动
            document.body.style.overflow = '';
            
            // 更新汉堡按钮动画
            navToggle.classList.remove('active');
        }
    }

    navToggle.addEventListener('click', toggleMobileMenu);

    // 点击遮罩关闭菜单
    mobileOverlay.addEventListener('click', () => {
        if (isMobileMenuOpen) {
            toggleMobileMenu();
        }
    });

    // 点击菜单项关闭菜单
    const mobileNavLinks = document.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobileMenuOpen) {
                toggleMobileMenu();
            }
        });
    });

    const runWhenBrowserIdle = (callback, timeout = 200) => {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(callback, { timeout });
            return;
        }

        setTimeout(callback, timeout);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;

    // 创建粒子背景
    const createParticles = () => {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer || particlesContainer.childElementCount) return;

        const particleCount = isMobileViewport ? 24 : 50;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 2.2 + 1.6;
            const alpha = 0.38 + Math.random() * 0.18;
            const particleColor = '129, 140, 248';
            const hasGlow = Math.random() > 0.7;
            particle.style.position = 'absolute';
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.background = `rgba(${particleColor}, ${alpha})`;
            particle.style.boxShadow = hasGlow
                ? `0 0 ${3 + Math.random() * 2}px rgba(${particleColor}, 0.22)`
                : 'none';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${Math.random() * 10 + 7}s infinite ease-in-out`;
            particle.style.animationDelay = Math.random() * 6 + 's';

            fragment.appendChild(particle);
        }

        particlesContainer.appendChild(fragment);
    };

    const initParticles = () => {
        if (prefersReducedMotion) return;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                    opacity: 0.35;
                }
                33% {
                    transform: translateY(-24px) translateX(16px);
                    opacity: 0.62;
                }
                66% {
                    transform: translateY(16px) translateX(-16px);
                    opacity: 0.3;
                }
            }
        `;
        document.head.appendChild(style);
        createParticles();
    };

    requestAnimationFrame(() => {
        runWhenBrowserIdle(initParticles, 300);
    });

    // 鼠标跟随效果
    const enableHeroMouseFollow = () => {
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        if (!hero || !heroContent) return;

        let heroRaf = 0;
        hero.addEventListener('mousemove', (e) => {
            cancelAnimationFrame(heroRaf);
            heroRaf = requestAnimationFrame(() => {
                const { clientX, clientY } = e;
                const { width, height } = hero.getBoundingClientRect();

                const xPos = (clientX / width - 0.5) * 20;
                const yPos = (clientY / height - 0.5) * 20;

                heroContent.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
            });
        });

        hero.addEventListener('mouseleave', () => {
            heroContent.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        });
    };

    if (!isMobileViewport && !prefersReducedMotion) {
        runWhenBrowserIdle(enableHeroMouseFollow, 400);
    }

    // 激活导航链接
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(() => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;

                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
            scrollTicking = false;
        });
    }, { passive: true });

    // 添加加载完成类
    document.body.classList.add('loaded');
    const enableNonCriticalMotion = () => {
        document.body.classList.add('motion-ready');
    };
    runWhenBrowserIdle(enableNonCriticalMotion, 200);

    const initHoverEffects = () => {
        // 卡片 & 标签 hover 动效
        // Chrome 在滚动时会对光标下方经过的元素连续触发 mouseenter/mouseleave，
        // 导致大量 class 切换 + transform 动画堆积卡死。
        // 策略：滚动期间禁止 hover，停止滚动 100ms 后才允许。
        let isScrolling = false;
        let scrollTimer = 0;

        window.addEventListener('scroll', () => {
            isScrolling = true;
            // 滚动期间立即清除所有活跃 hover
            if (activeCard) {
                activeCard.classList.remove('card-hovered');
                activeCard = null;
            }
            if (activeTag) {
                activeTag.classList.remove('tag-hovered');
                activeTag = null;
            }
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => { isScrolling = false; }, 100);
        }, { passive: true });

        // --- 卡片 hover ---
        let activeCard = null;
        let cardRaf = 0;

        document.querySelectorAll('.about-card, .project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (isScrolling || activeCard === card) return;
                if (activeCard) activeCard.classList.remove('card-hovered');
                activeCard = card;
                cancelAnimationFrame(cardRaf);
                cardRaf = requestAnimationFrame(() => {
                    card.classList.add('card-hovered');
                });
            }, { passive: true });

            card.addEventListener('mouseleave', () => {
                if (activeCard === card) activeCard = null;
                cancelAnimationFrame(cardRaf);
                card.classList.remove('card-hovered');
            }, { passive: true });
        });

        // --- 技能标签 hover ---
        let activeTag = null;
        let tagRaf = 0;

        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                if (isScrolling || activeTag === tag) return;
                if (activeTag) activeTag.classList.remove('tag-hovered');
                activeTag = tag;
                cancelAnimationFrame(tagRaf);
                tagRaf = requestAnimationFrame(() => {
                    tag.classList.add('tag-hovered');
                });
            }, { passive: true });

            tag.addEventListener('mouseleave', () => {
                if (activeTag === tag) activeTag = null;
                cancelAnimationFrame(tagRaf);
                tag.classList.remove('tag-hovered');
            }, { passive: true });
        });
    };

    runWhenBrowserIdle(initHoverEffects, 800);

    // 控制台彩蛋
    console.log('%c👋 欢迎来到Will的个人站点！', 'font-size: 20px; color: #6366f1; font-weight: bold;');
    console.log('%c🚀 此站点由 Claude & Codex 生成', 'font-size: 16px; color: #8b5cf6;');
    console.log('%c📧 联系我: redwill@126.com', 'font-size: 14px; color: #ec4899;');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPageInteractions, { once: true });
} else {
    initPageInteractions();
}

// 页面可见性改变时的标题动画
let titleTimeout;
document.addEventListener('visibilitychange', () => {
    if (!themeLanguageManager) return;
    
    const currentLang = themeLanguageManager.getCurrentLanguage();
    const lang = languages[currentLang];
    
    if (document.hidden) {
        // 页面离开时显示挽留信息
        document.title = lang.pageTitleAway;
    } else {
        // 页面重新可见时先显示欢迎回来
        document.title = lang.pageTitleBack;
        
        // 清除之前的定时器
        if (titleTimeout) {
            clearTimeout(titleTimeout);
        }
        
        // 2秒后恢复正常标题
        titleTimeout = setTimeout(() => {
            document.title = lang.pageTitle;
        }, 2000);
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
