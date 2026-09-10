document.addEventListener('DOMContentLoaded', () => {

    // Detailed Course & Service Outlines Data Store
    const catalogData = {
        'full-bootcamp': {
            type: 'Bootcamp',
            duration: '12 Weeks',
            title: 'Complete Data Analytics Bootcamp',
            description: 'An intensive, end-to-end program designed to transform beginners into production-ready data analysts.',
            tools: ['Excel', 'SQL (PostgreSQL)', 'Power BI', 'Python (Pandas)', 'Git'],
            modules: [
                'Week 1-3: Advanced Business Excel & Financial Modeling',
                'Week 4-6: Relational Database Design & Complex SQL',
                'Week 7-9: Business Intelligence & Power BI Dashboards',
                'Week 10-11: Python Automation, Data Cleaning & EDA',
                'Week 12: Real-World Capstone Project Defense'
            ],
            deliverables: [
                '4 Enterprise Grade Portfolio Projects',
                'CV & LinkedIn Optimization Package',
                '1-on-1 Mock Interview Sessions'
            ]
        },
        'sql-course': {
            type: 'Short Course',
            duration: '3 Weeks',
            title: 'SQL for Data Analysis',
            description: 'Master data extraction, querying, and database manipulation for modern analytical workflows.',
            tools: ['PostgreSQL', 'MySQL', 'pgAdmin', 'DBeaver'],
            modules: [
                'Module 1: Database Fundamentals & SELECT Queries',
                'Module 2: Filtering, Aggregations & GROUP BY Functions',
                'Module 3: Multi-table JOINs & Subqueries',
                'Module 4: Advanced Window Functions & CTEs'
            ],
            deliverables: [
                'Complex Query Script Repository',
                'Database Modeling Capstone Certificate'
            ]
        },
        'powerbi-course': {
            type: 'Short Course',
            duration: '4 Weeks',
            title: 'Power BI & Business Intelligence',
            description: 'Transform raw, fragmented business metrics into automated, visually compelling executive dashboards.',
            tools: ['Power BI Desktop', 'Power Query', 'DAX', 'Power BI Service'],
            modules: [
                'Module 1: Data Connection & Power Query Transformation',
                'Module 2: Data Modeling & Star Schema Architecture',
                'Module 3: DAX Calculations (Calculated Columns & Measures)',
                'Module 4: Interactive Visuals, Drill-downs & Cloud Publishing'
            ],
            deliverables: [
                '3 Published Interactive Executive Dashboards',
                'DAX Reference Cheat Sheet'
            ]
        },
        'excel-course': {
            type: 'Short Course',
            duration: '3 Weeks',
            title: 'Advanced Excel Mastery',
            description: 'Move beyond basic spreadsheets to master dynamic lookup formulas, Power Query, and automated reporting.',
            tools: ['Excel', 'Power Query', 'Solver', 'PivotTables'],
            modules: [
                'Module 1: Advanced Formulas (XLOOKUP, INDEX/MATCH, Dynamic Arrays)',
                'Module 2: Data Cleaning & Transformation via Power Query',
                'Module 3: Dynamic Pivot Tables & Slicers',
                'Module 4: Building Interactive KPI Dashboards'
            ],
            deliverables: [
                'Automated KPI Dashboard Template',
                'Financial Modeling Starter Kit'
            ]
        },
        'python-course': {
            type: 'Short Course',
            duration: '4 Weeks',
            title: 'Python for Data Analytics',
            description: 'Learn to manipulate, analyze, and visualize large datasets using Python’s powerful data science libraries.',
            tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
            modules: [
                'Module 1: Python Basics & Data Structures',
                'Module 2: Data Wrangling & Analysis with Pandas',
                'Module 3: Exploratory Data Analysis (EDA) & Data Cleaning',
                'Module 4: Statistical Visualization with Matplotlib & Seaborn'
            ],
            deliverables: [
                'Automated Data Processing Scripts',
                'Exploratory Data Analysis Project Notebook'
            ]
        },
        'stats-course': {
            type: 'Short Course',
            duration: '3 Weeks',
            title: 'Statistics for Academic Research',
            description: 'Targeted statistical foundation tailored for undergraduate, MSc, and PhD empirical research projects.',
            tools: ['SPSS', 'R Studio', 'Excel Data Analysis Toolpak'],
            modules: [
                'Module 1: Descriptive Stats & Probability Distributions',
                'Module 2: Parametric & Non-Parametric Hypothesis Testing',
                'Module 3: Correlation & Multiple Linear Regression Analysis',
                'Module 4: Interpreting Software Outputs for Thesis Writing'
            ],
            deliverables: [
                'Statistical Method Choice Decision Tree',
                'Sample Thesis Results Chapter Draft Template'
            ]
        },
        'research-consulting': {
            type: 'Consulting',
            duration: 'Custom Scope',
            title: 'Academic Thesis & Research Support',
            description: 'Dedicated 1-on-1 advisory for students and researchers needing methodology design and statistical validation.',
            tools: ['SPSS', 'R', 'STATA', 'Python', 'NVivo'],
            modules: [
                'Phase 1: Research Methodology & Sampling Design Audit',
                'Phase 2: Data Cleaning, Coding & Imputation',
                'Phase 3: Statistical Modeling & Hypothesis Testing',
                'Phase 4: Results Chapter Formatting & Viva Preparation'
            ],
            deliverables: [
                'Cleaned & Documented Dataset',
                'Complete Statistical Results Chapter (APA/Harvard Style)',
                'Methodology Defense Consultation Session'
            ]
        },
        'corporate-training': {
            type: 'Enterprise',
            duration: 'Tailored',
            title: 'Corporate Team Upskilling',
            description: 'Customized group training modules designed to bridge data literacy gaps across business units.',
            tools: ['Power BI', 'SQL', 'Excel', 'Custom BI Workflows'],
            modules: [
                'Needs Assessment & Team Competency Audit',
                'Customized Curriculum Development',
                'Hands-on Practical Workshops on Company Data',
                'Post-Training Competency Evaluation'
            ],
            deliverables: [
                'Customized Company Training Material & Record',
                'Standard Operating Procedures for Internal Reporting'
            ]
        },
        'arp-ml': {
            type: 'Consulting',
            duration: 'Custom Scope',
            title: 'Data Pipelines & Machine Learning',
            description: 'End-to-end data architecture consulting, warehouse structuring, and predictive ML deployment.',
            tools: ['Python', 'SQL', 'Scikit-Learn', 'Airflow', 'BigQuery'],
            modules: [
                'Phase 1: Data Architecture & Storage Assessment',
                'Phase 2: ETL Pipeline Development & Warehouse Integration',
                'Phase 3: Predictive Machine Learning Model Development',
                'Phase 4: API Deployment & Maintenance Plan'
            ],
            deliverables: [
                'Production-Ready ML Pipeline Architecture',
                'Technical Documentation & Maintenance Guide'
            ]
        }
    };

    // DOM Elements
    const interestSelect = document.getElementById('interest');
    const placeholderCard = document.getElementById('outline-placeholder');
    const contentCard = document.getElementById('outline-content');

    const outType = document.getElementById('out-type');
    const outDuration = document.getElementById('out-duration');
    const outTitle = document.getElementById('out-title');
    const outDescription = document.getElementById('out-description');
    const outTools = document.getElementById('out-tools');
    const outModules = document.getElementById('out-modules');
    const outDeliverables = document.getElementById('out-deliverables');

    // Event Listener for Dropdown Selection
    interestSelect.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        const data = catalogData[selectedValue];

        if (!data) return;

        // Transition: Fade out content briefly
        contentCard.style.opacity = '0';

        setTimeout(() => {
            // Populate fields
            outType.textContent = data.type;
            outDuration.textContent = data.duration;
            outTitle.textContent = data.title;
            outDescription.textContent = data.description;

            // Render Tool Pills
            outTools.innerHTML = data.tools
                .map(tool => `<span class="tool-pill">${tool}</span>`)
                .join('');

            // Render Modules List
            outModules.innerHTML = data.modules
                .map(mod => `<li>${mod}</li>`)
                .join('');

            // Render Deliverables List
            outDeliverables.innerHTML = data.deliverables
                .map(del => `<li>${del}</li>`)
                .join('');

            // Toggle Visibility
            placeholderCard.style.display = 'none';
            contentCard.classList.remove('hidden');

            // Fade in content
            contentCard.style.opacity = '1';
        }, 150);
    });

    // Form Submission Handling
    const consultForm = document.getElementById('consultation-form');
    consultForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for booking a consultation! Our team will reach out within 24 hours.');
        consultForm.reset();
        
        // Reset Outline Card View
        contentCard.classList.add('hidden');
        placeholderCard.style.display = 'flex';
    });
});