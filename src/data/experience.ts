import { Experience, Job } from '../types/models'
import { JOB_ID, JOB_CONTENT, EXPERIENCE_ID } from '../constants/experience'
import {
  ProgrammingLanguage,
  FrontEndTech,
  BackEndTech,
  TestingTools,
  Database,
  Cloud,
  OtherTools,
  ProgrammingConcepts,
} from './technologies'

export const jobs: Job[] = [
  {
    id: JOB_ID.mentorSchoolOfCode,
    role: 'Mentor',
    organization: {
      name: 'School of Code',
      url: 'https://www.schoolofcode.co.uk/',
    },
    startDate: '2021-11-01',
    endDate: '2023-01-01',
    description: JOB_CONTENT.mentorSchoolOfCode,
    technologies: [
      ProgrammingLanguage.JavascriptEs6,
      FrontEndTech.React,
      TestingTools.Jest,
      TestingTools.ReactTestingLibrary,
      TestingTools.Cypress,
      BackEndTech.NodeJs,
      BackEndTech.ExpressJs,
      Database.Postgresql,
    ],
  },
  {
    id: JOB_ID.softwareEngineerBjss,
    role: 'Software Engineer',
    organization: {
      name: 'BJSS',
      url: 'https://www.bjss.com/',
    },
    startDate: '2018-11-01',
    endDate: '2021-12-01',
    description: JOB_CONTENT.softwareEngineerBjss,
    technologies: [
      ProgrammingLanguage.Typescript,
      FrontEndTech.NextJs,
      FrontEndTech.React,
      FrontEndTech.Ionic,
      FrontEndTech.Angular,
      FrontEndTech.Redux,
      FrontEndTech.Ngrx,
      FrontEndTech.MaterialUi,
      BackEndTech.NodeJs,
      BackEndTech.ExpressJs,
      Cloud.Aws,
      TestingTools.Jest,
      TestingTools.Jasmine,
      TestingTools.ReactTestingLibrary,
      TestingTools.Cypress,
      TestingTools.WebdirverIo,
      OtherTools.Github,
      OtherTools.Gitlab,
      OtherTools.Npm,
      OtherTools.Yarn,
    ],
  },
  {
    id: JOB_ID.fullStackDeveloperRightindem,
    role: 'Full-Stack Developer',
    organization: {
      name: 'RightIndem',
      url: 'https://rightindem.com/',
    },
    startDate: '2017-02-01',
    endDate: '2018-09-01',
    description: JOB_CONTENT.fullStackDeveloperRightindem,
    technologies: [
      ProgrammingLanguage.JavascriptEs6,
      FrontEndTech.React,
      FrontEndTech.Redux,
      FrontEndTech.Storybook,
      TestingTools.Jest,
      TestingTools.Enzyme,
      ProgrammingLanguage.Csharp,
      BackEndTech.AspNetWebApi,
      TestingTools.NUnit,
      TestingTools.Moq,
      OtherTools.Vsts,
    ],
  },
  {
    id: JOB_ID.coFounderWraptime,
    role: 'Co-Founder',
    organization: {
      name: 'Wraptime',
      url: 'https://www.linkedin.com/company/wraptime/about/',
    },
    startDate: '2016-09-01',
    endDate: '2017-02-01',
    description: JOB_CONTENT.coFounderWraptime,
    technologies: [
      ProgrammingLanguage.JavascriptEs6,
      FrontEndTech.React,
      FrontEndTech.ReactNative,
      FrontEndTech.Redux,
      BackEndTech.NodeJs,
      Database.MongoDb,
      OtherTools.Docker,
      OtherTools.Github,
    ],
  },
  {
    id: JOB_ID.netDeveloperBranded3,
    role: '.Net Developer',
    organization: {
      name: 'Branded3',
      url: 'https://www.linkedin.com/company/branded3/about/',
    },
    startDate: '2016-04-01',
    endDate: '2016-08-01',
    description: JOB_CONTENT.netDeveloperBranded3,
    technologies: [
      ProgrammingLanguage.Csharp,
      BackEndTech.AspNetMvc,
      BackEndTech.AspNetWebApi,
      BackEndTech.EntityFramework,
      BackEndTech.RabbitMq,
      BackEndTech.Elasticsearch,
      Database.MongoDb,
      OtherTools.Docker,
      OtherTools.Git,
      OtherTools.Jira,
    ],
  },
  {
    id: JOB_ID.netDeveloperComknow,
    role: '.Net Developer',
    organization: {
      name: 'ComKnow',
      url: 'http://www.comknow.com/',
    },
    startDate: '2015-08-01',
    endDate: '2016-02-01',
    description: JOB_CONTENT.netDeveloperComknow,
    technologies: [
      ProgrammingLanguage.Csharp,
      BackEndTech.AspNetMvc,
      BackEndTech.AspNetWebApi,
      BackEndTech.EntityFramework,
      Database.SqlServer,
      ProgrammingLanguage.JavascriptEs5,
      ProgrammingLanguage.Html,
      ProgrammingLanguage.Css,
      FrontEndTech.Bootstrap,
      FrontEndTech.Jquery,
    ],
  },
  {
    id: JOB_ID.iosApprenticeReea,
    role: 'iOS Apprentice',
    organization: {
      name: 'Reea',
      url: 'https://www.reea.net/',
    },
    startDate: '2014-03-01',
    endDate: '2014-04-01',
    description: JOB_CONTENT.iosApprenticeReea,
    technologies: [ProgrammingLanguage.ObjectiveC, OtherTools.Xcode],
  },
  {
    id: JOB_ID.studentSapientia,
    role: 'Student',
    organization: {
      name: 'Sapientia University',
      url: 'https://ms.sapientia.ro/en',
    },
    startDate: '2012-10-01',
    endDate: '2015-06-01',
    description: JOB_CONTENT.studentSapientia,
    technologies: [
      ProgrammingConcepts.Algorithms,
      ProgrammingConcepts.DataStructures,
      ProgrammingConcepts.ObjectOrientedProgramming,
      ProgrammingLanguage.C,
      ProgrammingLanguage.Csharp,
      ProgrammingLanguage.Java,
      ProgrammingLanguage.Sql,
      ProgrammingLanguage.Html,
      ProgrammingLanguage.Css,
    ],
  },
]

export const experiences: Experience[] = [
  {
    id: EXPERIENCE_ID.mentor,
    jobs: jobs.filter((job) => job.id === JOB_ID.mentorSchoolOfCode),
  },
  {
    id: EXPERIENCE_ID.softwareEngineer,
    jobs: jobs.filter((job) => job.id === JOB_ID.softwareEngineerBjss),
  },
  {
    id: EXPERIENCE_ID.fullStackDeveloper,
    jobs: jobs.filter((job) => job.id === JOB_ID.fullStackDeveloperRightindem),
  },
  {
    id: EXPERIENCE_ID.coFounder,
    jobs: jobs.filter((job) => job.id === JOB_ID.coFounderWraptime),
  },
  {
    id: EXPERIENCE_ID.netDeveloper,
    jobs: jobs.filter(
      (job) =>
        job.id === JOB_ID.netDeveloperBranded3 ||
        job.id === JOB_ID.netDeveloperComknow,
    ),
  },
  {
    id: EXPERIENCE_ID.apprentice,
    jobs: jobs.filter(
      (job) =>
        job.id === JOB_ID.iosApprenticeReea ||
        job.id === JOB_ID.studentSapientia,
    ),
  },
]
