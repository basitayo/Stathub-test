/**
 * StatHub Dynamic Courses Engine & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Header Blur on Scroll
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. Structured Course Data with Outlines
    const coursesData = [

        {
            id: 'bootcamp-01', // Target ID for the featured button
            number: 'COURSE 01',
            category: 'DATA ANALYSIS',
            title: 'Complete Data Analytics Bootcamp',
            description: 'An intensive, end-to-end flagship program taking you from absolute beginner to job-ready data analyst. Covers SQL, Power BI, Excel, and Python.',
            image: '/images/bootcamp.jpg',
            level: 'Beginner → Advanced',
            duration: '12 Weeks',
            format: 'Online Live',
            tag: 'BOOTCAMP',
            outline: [
                'Module 1: Spreadsheet Mastery & Advanced Excel Modeling',
                'Module 2: Relational Databases & SQL Querying',
                'Module 3: Business Intelligence & Power BI Dashboards',
                'Module 4: Python Programming for Data Wrangling',
                'Module 5: Statistical Analysis & Hypothesis Testing',
                'Module 6: Final Capstone Portfolio Project'
            ]
        },

        {

            id: 'sql-01',
            number: 'COURSE 02',
            category: 'DATA ANALYSIS',
            title: 'SQL for Data Analysis',
            description: 'Learn how to query databases, write complex JOINs, aggregate datasets, clean raw information, and build operational SQL views.',
            image: '/images/data-analysis.jpg',
            level: 'Beginner → Intermediate',
            duration: '4 Weeks',
            format: 'Online Live',
            tag: 'DATABASE',
            outline: [
                'Module 1: Relational Database Fundamentals & SELECT Queries',
                'Module 2: Filtering, Aggregation & GROUP BY Statements',
                'Module 3: Multi-Table Joins (INNER, LEFT, RIGHT, FULL OUTER)',
                'Module 4: Subqueries, Common Table Expressions (CTEs) & Window Functions',
                'Module 5: Data Cleaning & SQL Database View Creation',
                'Module 6: Capstone: E-Commerce Analytics Query Pipeline'
            ]
        },
        {
            id: 'powerbi-02',
            number: 'COURSE 03',
            category: 'BUSINESS INTELLIGENCE',
            title: 'Power BI & Business Intelligence',
            description: 'Transform disconnected data sources into automated, interactive dashboards and strategic business reports using Power Query and DAX.',
            image: '/images/excel-mastery.jpg',
            level: 'Intermediate',
            duration: '5 Weeks',
            format: 'Online Live',
            tag: 'VISUALIZATION',
            outline: [
                'Module 1: Data Connection & Power Query Transformation',
                'Module 2: Data Modeling, Relationships & Star Schema Design',
                'Module 3: DAX Essentials (Measures, Calculated Columns & Time Intelligence)',
                'Module 4: Interactive Dashboard Design & Custom Visuals',
                'Module 5: Power BI Service, Workspaces & Scheduled Refresh',
                'Module 6: Executive Capstone: Interactive Sales Intelligence Dashboard'
            ]
        },
        {
            id: 'excel-03',
            number: 'COURSE 04',
            category: 'SPREADSHEETS',
            title: 'Advanced Excel',
            description: 'Master advanced formulas, nested logical queries, automated data cleaning, dynamic arrays, and executive dashboard design.',
            image: '/images/powerbi.jpg',
            level: 'Intermediate → Advanced',
            duration: '6 Weeks',
            format: 'Online Live',
            tag: 'SPREADSHEET',
            outline: [
                'Module 1: Dynamic Arrays & Advanced Lookup Functions (XLOOKUP, INDEX/MATCH)',
                'Module 2: Power Query for Automated Data Cleaning & Prep',
                'Module 3: Advanced Pivot Tables, Slicers & Calculated Fields',
                'Module 4: Financial & Statistical Data Modeling',
                'Module 5: Executive Dashboard Construction & Conditional Formatting',
                'Module 6: Capstone: Automated Operational KPI Dashboard'
            ]
        },
        {
            id: 'stats-04',
            number: 'COURSE 05',
            category: 'STATISTICS',
            title: 'Statistics for Research',
            description: 'Understand core statistical principles, hypothesis testing, probability, regression analysis, and confidence intervals for research projects.',
            image: '/images/bootcamp.jpg',
            level: 'Beginner → Intermediate',
            duration: '4 Weeks',
            format: 'Online Live',
            tag: 'RESEARCH',
            outline: [
                'Module 1: Descriptive Statistics & Exploratory Data Analysis',
                'Module 2: Probability Distributions & Sampling Methods',
                'Module 3: Hypothesis Testing (t-tests, ANOVA, Chi-Square)',
                'Module 4: Correlation & Regression Analysis',
                'Module 5: Parametric vs. Non-Parametric Evaluation',
                'Module 6: Research Capstone: Academic-Grade Analytical Report'
            ]
        },
        {
            id: 'python-05',
            number: 'COURSE 06',
            category: 'PROGRAMMING',
            title: 'Python for Data Analysis',
            description: 'Learn Python programming fundamentals using Pandas, NumPy, and Seaborn to manipulate, clean, and visualize large scale datasets.',
            image: '/images/bootcamp.jpg',
            level: 'Beginner',
            duration: '6 Weeks',
            format: 'Online Live',
            tag: 'DEVELOPMENT',
            outline: [
                'Module 1: Python Data Structures & Jupyter Notebook Workflow',
                'Module 2: Data Wrangling & Manipulation with Pandas & NumPy',
                'Module 3: Data Cleaning, Missing Values & String Operations',
                'Module 4: Exploratory Data Visualization with Matplotlib & Seaborn',
                'Module 5: Feature Engineering & Statistical Operations',
                'Module 6: Portfolio Project: End-to-End Automated Data Pipeline'
            ]
        },
        {
            id: 'vis-06',
            number: 'COURSE 07',
            category: 'DATA ANALYSIS',
            title: 'Data Visualization & Storytelling',
            description: 'Learn how to translate complex numerical findings into intuitive visual narratives that drive executive consensus and business action.',
            image: '/images/bootcamp.jpg',
            level: 'Intermediate',
            duration: '3 Weeks',
            format: 'Online Live',
            tag: 'STORYTELLING',
            outline: [
                'Module 1: Visual Perception Principles & Chart Selection Frameworks',
                'Module 2: UI/UX Principles for Business Dashboards',
                'Module 3: Translating Metrics into Actionable Executive Insights',
                'Module 4: Presenting Analytical Findings to Stakeholders',
                'Module 5: Capstone: Executive Slide Deck & Interactive Narrative'
            ]
        }
    ];

    // 3. Render Courses Function
    const coursesContainer = document.getElementById('courses-container');
    const courseCountEl = document.getElementById('course-count');

    function renderCourses(categoryFilter = 'ALL') {
        if (!coursesContainer) return;

        const filteredCourses = categoryFilter === 'ALL'
            ? coursesData
            : coursesData.filter(course => course.category === categoryFilter);

        if (courseCountEl) {
            courseCountEl.textContent = `Showing ${filteredCourses.length} ${filteredCourses.length === 1 ? 'Course' : 'Courses'}`;
        }

        coursesContainer.innerHTML = filteredCourses.map(course => `
            <article class="course-card" data-id="${course.id}" data-category="${course.category}" style="cursor: pointer;">
                <div class="course-card-top">
                    <span class="course-num">${course.number}</span>
                    <span class="course-category-badge">${course.tag}</span>
                </div>
                
                <div class="course-card-body">
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-desc">${course.description}</p>
                </div>

                <div class="course-card-footer">
                    <div class="course-meta-pills">
                        <span>${course.level}</span>
                        <span>${course.duration}</span>
                    </div>

                    <button class="course-cta-btn" aria-label="Build toolkit with ${course.title}">
                        <span>BUILD YOUR DATA TOOLKIT</span>
                        <span>&#8594;</span>
                    </button>
                </div>
            </article>
        `).join('');
    }

    renderCourses('ALL');

    // 4. Course Filter Logic
    const filterButtons = document.querySelectorAll('#course-filter-bar .filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-category');
            renderCourses(category);
        });
    });

    // 5. Course Pop-Up Modal Logic
    const modal = document.getElementById('course-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalEnquireBtn = document.getElementById('modal-enquire-btn');

    function openCourseModal(course) {
        if (!modal) return;

        document.getElementById('modal-num').textContent = course.number;
        document.getElementById('modal-tag').textContent = course.tag;
        document.getElementById('modal-title').textContent = course.title;
        document.getElementById('modal-desc').textContent = course.description;
        document.getElementById('modal-level').textContent = course.level;
        document.getElementById('modal-duration').textContent = course.duration;
        document.getElementById('modal-format').textContent = course.format;

        const outlineContainer = document.getElementById('modal-outline-list');
        if (outlineContainer && course.outline) {
            outlineContainer.innerHTML = course.outline.map(item => `<li>${item}</li>`).join('');
        }

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeCourseModal() {
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Card Click Event (Delegated for dynamically rendered items)
    if (coursesContainer) {
        coursesContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.course-card');
            if (card) {
                const courseId = card.getAttribute('data-id');
                const courseData = coursesData.find(c => c.id === courseId);
                if (courseData) {
                    openCourseModal(courseData);
                }
            }
        });
    }

    // Modal Close Event Listeners
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCourseModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeCourseModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeCourseModal();
        }
    });

    // "Enquire More" smooth scroll to consultation section
    if (modalEnquireBtn) {
        modalEnquireBtn.addEventListener('click', (e) => {
            closeCourseModal();
            const targetElement = document.querySelector('#consultation');
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // 6. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#consultation') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });



    // =========================================================
    // 7. DYNAMIC FEATURED SECTION & MASTER-DETAIL FLOW
    // =========================================================

    // Function to update your specific HTML structure
    function updateFeaturedSection(course) {
        // Targeting your exact classes from index_4.html
        const featVisual = document.querySelector('.currentex-img.featured-visual');
        const featTag = document.querySelector('.currente-partone .currsmal');
        const featTitle = document.querySelector('.currente-partone .currtitl');
        const featDesc = document.querySelector('.currente-partone .currinfot');
        const featBtn = document.getElementById('btn-featured-course');

        // 1. Update the Background Image
        if (featVisual && course.image) {
            featVisual.style.backgroundImage = `url('${course.image}')`;
        }
        
        // 2. Update the Text
        if (featTag) featTag.textContent = course.tag;
        if (featTitle) featTitle.textContent = course.title;
        if (featDesc) featDesc.textContent = course.description;
        
        // 3. Tell the Enroll button which course is currently displayed
        if (featBtn) {
            featBtn.setAttribute('data-active-course', course.id);
        }

        // 4. Smooth scroll up to show the updated section
        const featSection = document.querySelector('.featured-course-sect');
        if (featSection) {
            featSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // A. Clicking "BUILD YOUR DATA TOOLKIT" in the grid
    if (coursesContainer) {
        coursesContainer.addEventListener('click', (e) => {
            // Check if they clicked the button specifically
            const toolkitBtn = e.target.closest('.course-cta-btn');
            if (toolkitBtn) {
                const card = toolkitBtn.closest('.course-card');
                const courseId = card.getAttribute('data-id');
                const courseData = coursesData.find(c => c.id === courseId);
                
                if (courseData) {
                    updateFeaturedSection(courseData);
                }
            }
        });
    }

    // B. Clicking "VIEW COURSE & ENROLL" in the Featured Section
    const btnFeaturedCourse = document.getElementById('btn-featured-course');
    if (btnFeaturedCourse) {
        btnFeaturedCourse.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Read the dynamically updated course ID, fallback to 'excel-03' because that is your default HTML
            const activeId = btnFeaturedCourse.getAttribute('data-active-course') || 'excel-03';
            const featuredCourseData = coursesData.find(c => c.id === activeId);
            
            if (featuredCourseData) {
                openCourseModal(featuredCourseData);
            }
        });
    }

    // Modal Close Event Listeners (Keeping your existing modal close logic)
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCourseModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeCourseModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeCourseModal();
        }
    });

    // "Enquire More" smooth scroll to consultation section
    if (modalEnquireBtn) {
        modalEnquireBtn.addEventListener('click', (e) => {
            closeCourseModal();
            const targetElement = document.querySelector('#consultilation');
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

});