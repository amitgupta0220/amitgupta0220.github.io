export const config = {
    developer: {
        name: "Amit Gupta",
        fullName: "Amit Gupta",
        title: "Software Engineer | Data, Cloud & AI",
        description: "Software Engineer building scalable data platforms, cloud applications, and AI-enabled systems using Python, SQL, React, FastAPI, and AWS."
    },
    social: {
        github: "amitgupta0220",
        email: "amitgupta0220@outlook.com",
        location: "Pensacola, Florida",
    },
    about: {
        title: "About Me",
        description: "I’m a software engineer working across data engineering, cloud infrastructure, full-stack development, and applied AI. I build reliable data pipelines, scalable applications, and intelligent tools using Python, SQL, React, FastAPI, and AWS. I enjoy turning complex business problems into practical systems that are easy to use, monitor, and scale."
    },
    experiences: [
        {
            position: "M.S. Computer Science",
            company: "University of Texas at Arlington",
            period: "2022-2024",
            location: "Arlington, Texas",
            description: "Completed a Master of Science in Computer Science with a 3.7 GPA and a focus on software engineering, data systems, cloud computing, and machine learning.",
            responsibilities: [
                "Studied advanced software engineering, database systems, and cloud computing",
                "Built full-stack, data-focused, and machine-learning academic projects",
                "Applied Python, Java, SQL, and modern web technologies across coursework",
                "Completed the degree in May 2024 with a 3.7 GPA"
            ],
            technologies: ["Computer Science", "Software Engineering", "Databases", "Cloud Computing", "Machine Learning"]
        },

        {
            position: "Software Engineer",
            company: "Center for Innovation in Health Informatics",
            period: "Jul 24-May 25",
            location: "",
            description: "Developing accessible healthcare applications, cloud-hosted media workflows, APIs, and deployment infrastructure.",
            responsibilities: [
                "Rebuilt React and Vite interfaces using reusable WCAG-aligned components",
                "Developed an imaging workspace that streamed cloud-hosted slides from Amazon S3",
                "Integrated application workflows with APIs and LLM-backed services to support faster case review",
                "Containerized services and automated deployments using Docker, Terraform, and GitHub Actions"
            ],
            technologies: ["React", "Vite", "TypeScript", "AWS S3", "Docker", "Terraform", "GitHub Actions", "REST APIs"]
        },
        {
            position: "AI & Data Engineer",
            company: "Cornucopia AI",
            period: "May 25-July 25",
            location: "",
            description: "Building AI-enabled inventory, scheduling, and business workflow tools using modern full-stack and agentic application frameworks.",
            responsibilities: [
                "Built LLM-powered inventory and scheduling tools using FastAPI, LangChain, LangGraph, and MERN",
                "Developed reusable APIs and application workflows for AI-assisted business operations",
                "Integrated third-party CRM data using Python preprocessing and schema mappings",
                "Centralized validated operational records in Amazon RDS"
            ],
            technologies: ["Python", "FastAPI", "LangChain", "LangGraph", "React", "Node.js", "MongoDB", "Amazon RDS"]
        },
        {
            position: "Data Engineer",
            company: "Amay LLC",
            period: "Jun 25-Present",
            location: "Pensacola, Florida",
            description: "Building AWS-based data infrastructure and analytics systems for multi-location hospitality operations.",
            responsibilities: [
                "Built an Amazon S3 landing layer for more than 1M daily records from 15+ operational and business systems",
                "Developed Python and SQL pipelines with validation checks to standardize data and resolve duplicate or mismatched records",
                "Loaded trusted datasets into Amazon RDS for reporting and downstream analysis",
                "Delivered Power BI and QuickSight dashboards that reduced weekly operations review time by 60%"
            ],
            technologies: ["Python", "SQL", "AWS S3", "Amazon RDS", "Step Functions", "CloudWatch", "Power BI", "QuickSight"]
        }

    ],
    projects: [
        {
            id: 1,
            title: "Hospitality Data Lakehouse",
            category: "Data Engineering",
            technologies: "Python, SQL, AWS S3, Amazon RDS, Airflow, dbt",
            image: "/images/drishti.png",
            description: "A multi-source data platform that ingests operational records, applies validation and standardization rules, and publishes trusted datasets for analytics and reporting.",
            link: "https://github.com/amitgupta0220/"
        },
        {
            id: 2,
            title: "Researchify",
            category: "AI / Document Intelligence",
            technologies: "React, Flask, Python, LangChain, ChromaDB, TailwindCSS",
            image: "/images/researchify-portfolio-cover.webp",
            description: "An AI-powered document intelligence platform that lets users upload PDFs, generate summaries, retrieve relevant information through semantic search, and chat with their documents.",
            link: "https://github.com/amitgupta0220/Reseachify"
        },
        {
            id: 3,
            title: "Natural Language to SQL",
            category: "Applied AI",
            technologies: "Python, Flask, OpenAI API, MySQL, Pandas",
            image: "/images/natural-language-to-sql-portfolio.webp",
            description: "An AI-powered application that converts plain-English questions into executable SQL, runs queries against MySQL databases, displays structured results, and supports CSV export.",
            link: "https://github.com/amitgupta0220/Natural_language_to_SQL"
        },
        {
            id: 4,
            title: "Royal Peacock Painting",
            category: "Frontend / Business Website",
            technologies: "React, TypeScript, Vite, Responsive CSS, Vercel",
            image: "/images/royal-peacock-portfolio-cover.webp",
            description: "A responsive marketing website for a premium painting company, featuring service pages, project galleries, customer trust signals, and conversion-focused estimate workflows.",
            link: "https://royalpeacockpainting.com"
        }
        ,
        {
            id: 5,
            title: "DRISHYAM",
            category: "Computer Vision / Assistive AI",
            technologies: "Python, OpenCV, TensorFlow, MobileNet, Tkinter, LabelImg",
            image: "/images/drishyam-portfolio-cover.webp",
            description: "An assistive computer-vision prototype that captures webcam or video frames, detects visual cues, and supports communication workflows for deaf and speech-impaired users.",
            link: "https://github.com/amitgupta0220/DRISHYAM"
        }
        ,
        {
            id: 6,
            title: "Bira",
            category: "Data Engineering / Analytics",
            technologies: "Python, FastAPI, PostgreSQL, Next.js, OCR, Docker, Power BI",
            image: "/images/bira-portfolio-cover.webp",
            description: "A hotel PDF intelligence platform that classifies scanned reports, extracts operational data, detects duplicates and outliers, and publishes trusted analytics through a web dashboard.",
            link: "https://github.com/amitgupta0220/Bira"
        }
        ,
        {
            id: 7,
            title: "2Dto3D",
            category: "Deep Learning / 3D Web",
            technologies: "React, Three.js, Flask, PyTorch, Pix2Vox, ShapeNet",
            image: "/images/2d-to-3d-portfolio-cover.webp",
            description: "A full-stack deep-learning application that converts uploaded 2D images into downloadable 3D models and renders them in an interactive browser-based viewer.",
            link: "https://github.com/amitgupta0220/2Dto3D"
        }

    ],
    contact: {
        email: "amitgupta0220@outlook.com",
        github: "https://github.com/amitgupta0220",
        linkedin: "https://www.linkedin.com/in/amit-gupta-0220/",
        instagram: "https://www.instagram.com/amitgupta0220/",
        medium: "https://medium.com/@testing.debugging111",
        twitter: "",
        facebook: ""
    },
    skills: {
        develop: {
            title: "DATA, CLOUD & AI",
            description: "Building scalable data platforms & intelligent systems",
            details: "Developing reliable data pipelines, cloud-backed analytics platforms, and AI-enabled applications using Python, SQL, AWS, FastAPI, LangChain, LangGraph, and modern data-engineering tools.",
            tools: ["Python", "SQL", "Pandas", "PySpark", "AWS", "Snowflake", "Airflow", "Kafka", "LangChain", "LangGraph", "FastAPI", "Machine Learning"]
        },
        design: {
            title: "FULL-STACK",
            description: "Modern web development & dependable applications",
            details: "Building responsive web applications, REST APIs, backend services, and deployment workflows using React, TypeScript, Node.js, FastAPI, PostgreSQL, Docker, Terraform, and CI/CD.",
            tools: ["React", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "MongoDB", "TailwindCSS", "REST APIs", "Docker", "Terraform", "GitHub Actions"]
        }
    }
};