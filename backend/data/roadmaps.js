const roadmaps = {
  "Web Development": {
    Beginner: [
      {
        stage: 1,
        skill: "HTML Basics",
        resources: [
          {
            name: "MDN HTML",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
        ],
      },
      {
        stage: 2,
        skill: "CSS Basics",
        resources: [
          {
            name: "MDN CSS",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
        ],
      },
      {
        stage: 3,
        skill: "JavaScript Fundamentals",
        resources: [
          {
            name: "MDN JS",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
        ],
      },
    ],
    Intermediate: [
      {
        stage: 1,
        skill: "Modern JavaScript (ES6+)",
        resources: [
          {
            name: "ES6+ Guide",
            url: "https://exploringjs.com/es6/",
          },
        ],
      },
      {
        stage: 2,
        skill: "React.js",
        resources: [
          {
            name: "React Docs",
            url: "https://react.dev/learn",
          },
        ],
      },
      {
        stage: 3,
        skill: "State Management (Context, Redux, Zustand)",
        resources: [
          {
            name: "Redux Docs",
            url: "https://redux.js.org/",
          },
        ],
      },
    ],
    Advanced: [
      {
        stage: 1,
        skill: "Node.js & Express",
        resources: [
          { name: "Node Docs", url: "https://nodejs.org/en/docs" },
          {
            name: "Express Guide",
            url: "https://expressjs.com/",
          },
        ],
      },
      {
        stage: 2,
        skill: "MongoDB & Mongoose",
        resources: [
          {
            name: "MongoDB University",
            url: "https://learn.mongodb.com/",
          },
        ],
      },
      {
        stage: 3,
        skill: "DevOps & Deployment (Vercel, Render)",
        resources: [
          {
            name: "Vercel Docs",
            url: "https://vercel.com/docs",
          },
          {
            name: "Render Docs",
            url: "https://render.com/docs",
          },
        ],
      },
    ],
  },
  "Cyber Security": {
    Beginner: [
      {
        stage: 1,
        skill: "Networking Fundamentals",
        resources: [
          {
            name: "Cisco Intro to Networking",
            url: "https://www.netacad.com/",
          },
        ],
      },
      {
        stage: 2,
        skill: "Linux Basics",
        resources: [
          {
            name: "Linux Journey",
            url: "https://linuxjourney.com/",
          },
        ],
      },
      {
        stage: 3,
        skill: "Security Basics (OWASP Top 10)",
        resources: [
          {
            name: "OWASP Top 10",
            url: "https://owasp.org/www-project-top-ten/",
          },
        ],
      },
    ],
    Intermediate: [
      {
        stage: 1,
        skill: "Penetration Testing",
        resources: [
          {
            name: "TryHackMe",
            url: "https://tryhackme.com/",
          },
        ],
      },
      {
        stage: 2,
        skill: "Cryptography",
        resources: [
          {
            name: "Khan Academy Crypto",
            url: "https://www.khanacademy.org/computing",
          },
        ],
      },
    ],
    Advanced: [
      {
        stage: 1,
        skill: "Digital Forensics",
        resources: [
          {
            name: "DFIR Training",
            url: "https://www.dfir.training/",
          },
        ],
      },
      {
        stage: 2,
        skill: "Incident Response",
        resources: [
          {
            name: "CISA IR Guide",
            url: "https://www.cisa.gov/",
          },
        ],
      },
    ],
  },
  "Data Science": {
    Beginner: [
      {
        stage: 1,
        skill: "Python Fundamentals",
        resources: [
          {
            name: "Python Official Tutorial",
            url: "https://docs.python.org/3/tutorial/",
          },
        ],
      },
      {
        stage: 2,
        skill: "Math for Data (Linear Algebra, Stats)",
        resources: [
          {
            name: "Khan Academy Math",
            url: "https://www.khanacademy.org/math/statistics-probability",
          },
        ],
      },
    ],
    Intermediate: [
      {
        stage: 1,
        skill: "Pandas & NumPy",
        resources: [
          {
            name: "Pandas Docs",
            url: "https://pandas.pydata.org/docs/",
          },
        ],
      },
      {
        stage: 2,
        skill: "Data Visualization (Matplotlib, Seaborn)",
        resources: [
          {
            name: "Seaborn Docs",
            url: "https://seaborn.pydata.org/",
          },
        ],
      },
    ],
    Advanced: [
      {
        stage: 1,
        skill: "Machine Learning (Scikit-learn)",
        resources: [
          {
            name: "Scikit-learn Docs",
            url: "https://scikit-learn.org/stable/",
          },
        ],
      },
      {
        stage: 2,
        skill: "Model Deployment",
        resources: [
          {
            name: "ML Deployment Guide",
            url: "https://www.coursera.org/learn/mlops",
          },
        ],
      },
    ],
  },
  "Cloud Engineering": {
    Beginner: [
      {
        stage: 1,
        skill: "Linux & Networking Basics",
        resources: [
          {
            name: "Linux Journey",
            url: "https://linuxjourney.com/",
          },
        ],
      },
      {
        stage: 2,
        skill: "Intro to Cloud (AWS/Azure/GCP)",
        resources: [
          {
            name: "AWS Cloud Practitioner",
            url: "https://www.aws.training/",
          },
        ],
      },
    ],
    Intermediate: [
      {
        stage: 1,
        skill: "Compute, Storage, Networking",
        resources: [
          {
            name: "AWS Free Tier Labs",
            url: "https://aws.amazon.com/training/",
          },
        ],
      },
      {
        stage: 2,
        skill: "Containers & Docker",
        resources: [
          {
            name: "Docker Docs",
            url: "https://docs.docker.com/",
          },
        ],
      },
    ],
    Advanced: [
      {
        stage: 1,
        skill: "Kubernetes & Orchestration",
        resources: [
          {
            name: "Kubernetes Docs",
            url: "https://kubernetes.io/docs/home/",
          },
        ],
      },
      {
        stage: 2,
        skill: "CI/CD & Infrastructure as Code",
        resources: [
          {
            name: "Terraform Docs",
            url: "https://developer.hashicorp.com/terraform/docs",
          },
        ],
      },
    ],
  },
  "Mobile Development": {
    Beginner: [
      {
        stage: 1,
        skill: "Programming basics (JavaScript or Kotlin/Swift)",
        resources: [
          { name: "JavaScript Basics", url: "https://javascript.info/" },
          { name: "Kotlin Basics", url: "https://kotlinlang.org/docs/home.html" },
        ],
      },
      {
        stage: 2,
        skill: "Mobile UI fundamentals",
        resources: [
          { name: "Android UI Basics", url: "https://developer.android.com/develop/ui" },
          { name: "Apple HIG", url: "https://developer.apple.com/design/human-interface-guidelines/" },
        ],
      },
    ],
    Intermediate: [
      {
        stage: 1,
        skill: "Cross-platform with React Native or Flutter",
        resources: [
          { name: "React Native Docs", url: "https://reactnative.dev/docs/getting-started" },
          { name: "Flutter Docs", url: "https://docs.flutter.dev/" },
        ],
      },
      {
        stage: 2,
        skill: "State management + API integration",
        resources: [
          { name: "React Query", url: "https://tanstack.com/query/latest" },
          { name: "Flutter State Mgmt", url: "https://docs.flutter.dev/development/data-and-backend/state-mgmt" },
        ],
      },
    ],
    Advanced: [
      {
        stage: 1,
        skill: "Native modules & performance",
        resources: [
          { name: "RN Performance", url: "https://reactnative.dev/docs/performance" },
          { name: "Flutter Perf", url: "https://docs.flutter.dev/perf" },
        ],
      },
      {
        stage: 2,
        skill: "Release & CI/CD",
        resources: [
          { name: "Play Store Prep", url: "https://developer.android.com/distribute" },
          { name: "App Store Connect", url: "https://developer.apple.com/app-store-connect/" },
        ],
      },
    ],
  },
  "AI/ML Engineering": {
    Beginner: [
      {
        stage: 1,
        skill: "Python + data libraries",
        resources: [
          { name: "Python Tutorial", url: "https://docs.python.org/3/tutorial/" },
          { name: "Pandas Docs", url: "https://pandas.pydata.org/docs/" },
        ],
      },
      {
        stage: 2,
        skill: "Math for ML (linear algebra, calculus, probability)",
        resources: [
          { name: "Khan Academy Math", url: "https://www.khanacademy.org/math/linear-algebra" },
        ],
      },
    ],
    Intermediate: [
      {
        stage: 1,
        skill: "Classical ML (scikit-learn)",
        resources: [
          { name: "Scikit-learn Docs", url: "https://scikit-learn.org/stable/" },
        ],
      },
      {
        stage: 2,
        skill: "Model evaluation & feature engineering",
        resources: [
          { name: "MLE Fundamentals", url: "https://developers.google.com/machine-learning/crash-course" },
        ],
      },
    ],
    Advanced: [
      {
        stage: 1,
        skill: "Deep Learning (PyTorch / TensorFlow)",
        resources: [
          { name: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" },
          { name: "TensorFlow Guides", url: "https://www.tensorflow.org/guide" },
        ],
      },
      {
        stage: 2,
        skill: "MLOps & deployment",
        resources: [
          { name: "MLOps Guide", url: "https://ml-ops.org/" },
          { name: "FastAPI Deploy", url: "https://fastapi.tiangolo.com/deployment/" },
        ],
      },
    ],
  },
  "DevOps & SRE": {
    Beginner: [
      {
        stage: 1,
        skill: "Linux, shell, networking basics",
        resources: [
          { name: "Linux Journey", url: "https://linuxjourney.com/" },
          { name: "Networking 101", url: "https://www.practicalnetworking.net/" },
        ],
      },
      {
        stage: 2,
        skill: "Git + CI basics",
        resources: [
          { name: "Git Book", url: "https://git-scm.com/book/en/v2" },
          { name: "CI Concepts", url: "https://circleci.com/continuous-integration/" },
        ],
      },
    ],
    Intermediate: [
      {
        stage: 1,
        skill: "Containers with Docker",
        resources: [
          { name: "Docker Docs", url: "https://docs.docker.com/" },
        ],
      },
      {
        stage: 2,
        skill: "Infra-as-Code (Terraform) + cloud basics",
        resources: [
          { name: "Terraform Docs", url: "https://developer.hashicorp.com/terraform/docs" },
          { name: "AWS Basics", url: "https://aws.amazon.com/getting-started/" },
        ],
      },
    ],
    Advanced: [
      {
        stage: 1,
        skill: "Kubernetes & observability",
        resources: [
          { name: "Kubernetes Docs", url: "https://kubernetes.io/docs/home/" },
          { name: "Prometheus", url: "https://prometheus.io/docs/introduction/overview/" },
        ],
      },
      {
        stage: 2,
        skill: "SRE practices & reliability",
        resources: [
          { name: "SRE Workbook", url: "https://sre.google/workbook/table-of-contents/" },
        ],
      },
    ],
  },
  "UI/UX Design": {
    Beginner: [
      {
        stage: 1,
        skill: "Design basics & typography",
        resources: [
          { name: "Practical Typography", url: "https://practicaltypography.com/" },
        ],
      },
      {
        stage: 2,
        skill: "Figma fundamentals",
        resources: [
          { name: "Figma Learn", url: "https://help.figma.com/hc/en-us/categories/360002040613-Learn-design" },
        ],
      },
    ],
    Intermediate: [
      {
        stage: 1,
        skill: "User research & wireframing",
        resources: [
          { name: "NN Group Research", url: "https://www.nngroup.com/articles/" },
        ],
      },
      {
        stage: 2,
        skill: "Design systems & components",
        resources: [
          { name: "Design Systems Guide", url: "https://www.designsystems.com/" },
        ],
      },
    ],
    Advanced: [
      {
        stage: 1,
        skill: "Prototyping & usability testing",
        resources: [
          { name: "Figma Prototyping", url: "https://help.figma.com/hc/en-us/articles/360039957994-Prototype-in-Figma" },
        ],
      },
      {
        stage: 2,
        skill: "Handoff & collaboration",
        resources: [
          { name: "Dev Handoff", url: "https://www.figma.com/blog/tag/developer-handoff/" },
        ],
      },
    ],
  },
  "Product Management": {
    Beginner: [
      {
        stage: 1,
        skill: "Product thinking & problem discovery",
        resources: [
          { name: "Intro to PM", url: "https://www.atlassian.com/agile/product-management" },
        ],
      },
      {
        stage: 2,
        skill: "User interviews & personas",
        resources: [
          { name: "User Research Basics", url: "https://www.nngroup.com/articles/user-research-methods/" },
        ],
      },
    ],
    Intermediate: [
      {
        stage: 1,
        skill: "Roadmapping & prioritization",
        resources: [
          { name: "RICE Framework", url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" },
        ],
      },
      {
        stage: 2,
        skill: "MVPs & experiment design",
        resources: [
          { name: "MVP Guide", url: "https://www.productplan.com/glossary/minimum-viable-product/" },
        ],
      },
    ],
    Advanced: [
      {
        stage: 1,
        skill: "Analytics & metrics (AARRR, funnels)",
        resources: [
          { name: "PM Metrics", url: "https://amplitude.com/blog/product-analytics" },
        ],
      },
      {
        stage: 2,
        skill: "Go-to-market & stakeholder comms",
        resources: [
          { name: "GTM Guide", url: "https://www.atlassian.com/agile/go-to-market" },
        ],
      },
    ],
  },
};

export default roadmaps;
