type Summary = {
  name: string;
  email: string;
  linkedin: string;
  location: {
    title: string;
    href: string;
  };
  title: string;
};

type Education = {
  period: [string, string];
  institution: string;
  description: string;
};

const all = {
  summary: {
    name: 'Gnanendra Prasad P',
    email: 'gnanendraprasadp@gmail.com',
    linkedin: 'https://linkedin.com/in/gnanendraprasadp',
    location: { title: 'Bengaluru, IN', href: 'https://bengaluruurban.nic.in' },
    title: 'Software Engineer',
  },
  skills: [
    'Java',
    'HTML',
    'CSS',
    'JavaScript',
    'SQL',
    'Spring Boot',
    'Spring Security',
    'Spring MVC',
    'Hibernate',
    'JPA',
    'JDBC',
    'JSP',
    'Angular',
    'AngularJS',
    'TypeScript',
    'JUnit',
    'Mockito',
    'Oracle Enterprise Edition',
    'Git',
    'REST API',
    'Swagger',
    'Postman',
    'Maven',
    'Spring Tool Suite',
    'Eclipse IDE',
    'IntelliJ IDEA',
    'VS Code',
    'Bitbucket',
    'GitHub',
    'SonarQube',
    'AWS',
    'Jenkins',
    'Docker',
    'Kubernetes',
    'Apache Kafka',
    'Jira',
    'Scrum',
    'Kanban',
  ],
  education: [
    {
      period: ['2017', '2021'],
      institution: 'PES College of Engineering Mandya',
      description: 'Bachelor of Engineering',
    },
    {
      period: ['2015', '2017'],
      institution: 'Sadvidya Composite Pre-University College Mysuru',
      description: 'Pre-University Education',
    },
    {
      period: ['2012', '2015'],
      institution: 'Sadvidya High School Mysuru',
      description: 'Secondary School',
    }
  ],
} as const satisfies {
  summary: Summary;
  skills: string[];
  education: Education[];
};

export default all;
