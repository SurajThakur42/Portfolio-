import portraitImage from '../assets/images/WhatsApp Image 2026.jpeg';

export interface Project {
  id: string;
  number: string;
  name: string;
  filename: string;
  categoryKicker: string;
  statusBadge: string;
  date: string;
  description: string;
  bulletPoints: string[];
  problemSolved: string;
  technologies: string[];
  codePreview: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  category: 'all' | 'fullstack' | 'cpp' | 'python';
}

export interface EducationItem {
  institution: string;
  degree: string;
  score: string;
  scoreLabel: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Suraj Thakur",
    role: "Full-Stack Developer & AI Systems Engineer",
    tagline: "Computer Science & Engineering • Ambedkar Institute of Technology",
    bio: "Computer Science and Engineering student at Ambedkar Institute of Technology with a 9.55 CGPA. Passionate about building full-stack web applications, AI-driven platforms, and robust software architectures with modern technologies.",
    location: "New Delhi, India",
    phone: "+91-7065205724",
    email: "surajthakur8312@gmail.com",
    linkedin: "https://linkedin.com/in/suraj",
    github: "https://github.com/SurajThakur42",
    leetcode: "https://leetcode.com/u/surajthakur8312",
    hackerrank: "Suraj Thakur",
    statusText: "Available for Software Engineering Roles & Internships",
    portraitUrl: portraitImage,
  },

  heroStats: [
    {
      value: "9.55",
      label: "Academic CGPA",
      institution: "Ambedkar Institute of Technology",
      badge: "Diploma CSE",
    },
    {
      value: "90%",
      label: "10th Percentage",
      institution: "Govt. Boys sr. sec. school, Gokulpuri",
      badge: "Matriculation",
    },
    {
      value: "Team Leader",
      label: "Smart India Hackathon 2026",
      institution: "Led 6-Member Squad on SkillBridge",
      badge: "Leadership",
    },
    {
      value: "AI & Full-Stack",
      label: "SkillBridge LMS Platform",
      institution: "Google Gemini API & React",
      badge: "Innovation",
    },
  ],

  courseworkSkills: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Management System (DBMS)",
    "Artificial Intelligence",
    "OOPS Concept",
    "Web Development",
    "Software Engineering",
  ],

  projects: [
    {
      id: "skill-bridge",
      number: "01",
      name: "SkillBridge",
      filename: "skillbridge.tsx",
      categoryKicker: "AI-Driven LMS Prototype | Typescript, Vite, React, Rest API",
      statusBadge: "DEPLOYED // PROTOTYPE",
      date: "09/2026",
      description: "Full-stack AI-driven Learning Management System (LMS) prototype engineered for Smart India Hackathon using React.js, Flask REST APIs, MySQL, and Google Gemini API.",
      bulletPoints: [
        "Built a full-stack AI-driven LMS prototype for Smart India Hackathon using React.js, Flask REST APIs, MySQL, and Google Gemini API.",
        "Developed an AI-based skill-gap analysis and recommendation workflow that compares current employee competencies with required organizational skills.",
        "Implemented role-based access and competency assessment modules for Learners, Trainers, and Administrators, enabling secure workflows and learning-progress tracking.",
      ],
      problemSolved: "Automates competency mapping and skill-gap identification across enterprise teams using Gemini AI-assisted evaluation models.",
      technologies: ["TypeScript", "Vite", "React.js", "Flask REST API", "MySQL", "Google Gemini API"],
      codePreview: `// skillbridge.tsx - Competency Evaluation Pipeline
import { GoogleGenAI } from '@google/genai';

export async function evaluateSkillGap(employeeSkills: string[], roleRequirements: string[]) {
  const prompt = \`Compare current competencies: \${employeeSkills.join(', ')} with required: \${roleRequirements.join(', ')}\`;
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });
  return parseSkillGapAnalysis(response.text);
}`,
      image: "/src/assets/images/project_auditbridge_1790927382355.jpg",
      githubUrl: "https://github.com/SurajThakur42/SkillBridge",
      liveUrl: "https://github.com/SurajThakur42/SkillBridge#demo",
      category: "fullstack",
    },
    {
      id: "task-manager",
      number: "02",
      name: "Task Manager",
      filename: "task_manager.cpp",
      categoryKicker: "Console-Based Application | C++, Git and GitHub",
      statusBadge: "STABLE // C++ CLI",
      date: "05/2026",
      description: "Console-based task management application in C++ to create, update, delete, and organize tasks efficiently with robust OOP architecture.",
      bulletPoints: [
        "Developed a console-based task management application in C++ to create, update, delete, and organize tasks efficiently.",
        "Implemented Object-Oriented Programming (OOP) concepts and data structures to manage task information and application workflows.",
        "Added task status and priority management, enabling users to track pending and completed tasks.",
      ],
      problemSolved: "Fast, dependency-free command line task tracking with clean memory management and priority queue scheduling in modern C++.",
      technologies: ["C++", "OOP", "Data Structures", "Git", "GitHub"],
      codePreview: `// task_manager.cpp - Core Task Management System
#include <iostream>
#include <vector>
#include <string>

class TaskManager {
private:
    struct Task {
        int id;
        std::string title;
        int priority;
        bool isCompleted;
    };
    std::vector<Task> taskList;

public:
    void addTask(const std::string& title, int priority) {
        taskList.push_back({(int)taskList.size() + 1, title, priority, false});
    }
    void updateStatus(int id, bool completed) {
        for (auto& t : taskList) {
            if (t.id == id) t.isCompleted = completed;
        }
    }
};`,
      image: "/src/assets/images/project_taskmanager_1790927397215.jpg",
      githubUrl: "https://github.com/SurajThakur42/TaskManager-Cpp",
      liveUrl: "https://github.com/SurajThakur42/TaskManager-Cpp",
      category: "cpp",
    },
    {
      id: "python-course",
      number: "03",
      name: "Python Course",
      filename: "python_course.py",
      categoryKicker: "Learning Repository | Python, Git and GitHub",
      statusBadge: "OPEN REPOSITORY",
      date: "08/2025",
      description: "Beginner-friendly Python learning repository covering fundamental syntax, core programming concepts, and practical exercise scenarios.",
      bulletPoints: [
        "Created a beginner-friendly Python learning repository covering fundamental syntax and core programming concepts through clear explanations and examples.",
        "Developed a structured practice set to help learners reinforce Python fundamentals through hands-on coding exercises.",
      ],
      problemSolved: "Provides a structured, self-paced curriculum for mastering foundational Python programming, algorithmic thinking, and clean code hygiene.",
      technologies: ["Python", "Algorithms", "OOP", "Git", "GitHub"],
      codePreview: `# python_course.py - Fundamental Curriculum & Practice Set
def verify_solution(exercise_id, user_func):
    """Automated test harness for algorithmic problem sets"""
    test_cases = load_exercise_cases(exercise_id)
    for inputs, expected in test_cases:
        assert user_func(*inputs) == expected, f"Failed on inputs: {inputs}"
    print(f"Exercise {exercise_id}: PASSED ALL VALIDATIONS")`,
      image: "/src/assets/images/project_pythoncourse_1790927410997.jpg",
      githubUrl: "https://github.com/SurajThakur42/Python-Course",
      liveUrl: "https://github.com/SurajThakur42/Python-Course",
      category: "python",
    },
  ] as Project[],

  education: [
    {
      institution: "Ambedkar Institute of Technology",
      degree: "Diploma in computer science and engineering",
      score: "CGPA - 9.55",
      scoreLabel: "Academic Distinction",
      location: "Shakarpur, India",
      duration: "08 2024 – 06 2027",
      highlights: [
        "Top academic standing with a verified 9.55 CGPA in Computer Science & Engineering",
        "Rigorous coursework in Data Structures, Algorithms, DBMS, Operating Systems, Networks, and AI",
      ],
    },
    {
      institution: "Govt. Boys sr. sec. school",
      degree: "10th High School Board",
      score: "90%",
      scoreLabel: "10th Percentage",
      location: "Gokulpuri, India",
      duration: "04 2023 – 03 2024",
      highlights: [
        "Achieved 90% in 10th Board examinations",
        "Strong foundation in Mathematics and Sciences",
      ],
    },
  ] as EducationItem[],

  technicalSkills: {
    languages: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "HTML", "CSS"],
    developerTools: ["VS Code", "Google Ai Studio", "Codex", "Figma", "Claude Code", "JSON Web Token(JWT)"],
    technologiesFrameworks: [
      "Linux",
      "GitHub",
      "Gitlab",
      "Git",
      "React js",
      "Rest API",
      "Google Software Development Kit(SDK)",
    ],
  },

  extracurricular: {
    title: "Smart India Hackathon 2026",
    role: "Team Leader",
    organization: "College",
    duration: "08 2026 – 09 2026",
    bullets: [
      "Led a 6-member team in developing SkillBridge, an AI-powered capacity-building and learning management platform.",
      "Coordinated task allocation, development activities, integration, and project progress across frontend, backend, database/AI, and deployment responsibilities.",
      "Facilitated technical discussions and decision-making, keeping the team aligned with project requirements and hackathon timelines.",
      "Awarded Participation Certificate.",
    ],
  },

  certifications: [
    { title: "HTML & CSS", issuer: "AlgoZenith" },
    { title: "C++ for Competitive Coding", issuer: "AlgoZenith" },
    { title: "Introduction to UI/UX", issuer: "Professional UI/UX Foundation" },
    { title: "OOPS", issuer: "AlgoZenith" },
    { title: "Introduction to Generative AI", issuer: "Google Cloud / AI Foundations" },
  ] as Certification[],
};
