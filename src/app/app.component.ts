import { Component } from '@angular/core';

interface ExperienceItem {
  company: string;
  date: string;
  title: string;
  bullets: string[];
}

interface SkillCategory {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'ONS TAHA';
  subtitle = 'AI_Data Engineer';
  phone = '+9647813090407';
  email = 'auns1999t@gmail.com';
  location = 'Baghdad-Al-mansoor';
  linkedin = 'https://www.linkedin.com/in/ons-taha-2881721b6/';
  photoUrl = 'assets/image.png';
  profile = `Results-driven Software, Data & AI Engineer with a strong record of architecting scalable backend systems, enterprise data platforms, and intelligent AI solutions that deliver measurable business transformation. Specialized in C#/.NET (Clean Architecture & Domain-Driven Design), large-scale data warehousing, ELT/ETL orchestration, and performance-optimized system design within high-demand environments.`;

  experiences: ExperienceItem[] = [
    {
      company: 'AAU Company',
      date: 'Dec 2025 - Present',
      title: 'Software Engineer',
      bullets: [
        'Designed scalable backend systems using C# and ASP.NET Core with Clean Architecture and DDD.',
        'Built modular ABP layered applications with Domain, Application, EF Core, and HttpApi layers.',
        'Implemented API validation, exception handling, and Redis caching for high-performance services.',
        'Developed authentication flows with registration, login, OTP verification, and secure token handling.',
      ],
    },
    {
      company: 'QI Card International Smart Card (ISC)',
      date: 'Feb 2025 - Dec 2025',
      title: 'AI/Data Engineer',
      bullets: [
        'Built production OCR workflows with YOLO page-layout segmentation and PaddleOCR fine-tuning.',
        'Developed an AI agent to classify documents, analyze metadata, and automate response generation.',
        'Implemented RAG knowledge systems and enterprise document retrieval platforms.',
        'Containerized AI microservices with Docker Compose, PostgreSQL, Redis, RabbitMQ, and FastAPI.',
      ],
    },
    {
      company: 'EarthLink Company',
      date: 'Apr 2023 - Mar 2025',
      title: 'Data Engineer',
      bullets: [
        'Built ELT/ETL pipelines and centralized data warehousing with ClickHouse and optimized schema design.',
        'Orchestrated pipelines with Airflow and enforced SLA-aligned execution, retries, and backfills.',
        'Delivered dashboards using Power BI and Grafana to translate complex metrics into actionable insights.',
        'Created Python automation scripts and integrated data with external platforms using APIs.',
      ],
    },
  ];

  projects = [
    'Movie recommendation model with chatbot integration at EarthLink Company.',
    'Zabbix monitoring anomaly estimation using deep learning.',
    'Hypertension diagnosis system using machine learning at University of Technology.',
  ];

  skillCategories: SkillCategory[] = [
    {
      title: 'Programming & Data',
      items: ['Python', 'C# (.NET)', 'JavaScript', 'SQL', 'PostgreSQL', 'MongoDB', 'ClickHouse'],
    },
    {
      title: 'AI & ML',
      items: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'Feature Engineering', 'Model Optimization'],
    },
    {
      title: 'Data Engineering',
      items: ['ELT/ETL Design', 'Data Warehouse Modeling', 'Airflow', 'Data Quality', 'Vector DBs (FAISS, Milvus, Qdrant)'],
    },
    {
      title: 'Backend',
      items: ['Clean Architecture', 'DDD', 'ASP.NET Core', 'ABP Framework', 'RESTful APIs', 'EF Core'],
    },
  ];

  languages = ['Arabic', 'English', 'French'];

  education = 'University Of Technology — Bachelor of Biomedical Engineering (2017-2022)';

  certifications = [
    'Kaizen process improvement certificate (EarthLink 2025)',
    'Harvard CS50 AI certificate 2024',
    'IEEE Data Science certificate 2023',
    'IEEE Python Programming certificate 2023',
    'IEEE Supervised Machine Learning certificate 2023',
    'SQL Fundamentals certificate (TechDa 2023)',
    'Python Beginner certificate (TechDa 2023)',
  ];
}
