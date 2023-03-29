import { Technology } from './technologies'
import { JOB_ID, JOB_CONTENT } from '../constants/experience'
import {
  ProgrammingLanguage,
  FrontEndTech,
  BackEndTech,
  TestingTools,
  Database,
  Cloud,
  OtherTools,
} from './technologies'

type exp_comp = typeof JOB_CONTENT

// == Future improvement ==
// Potentially, I could extend this type to contain a client property
// Client property would describe a client that I was serving as part of that job
interface Job {
  id: string
  role: string
  organization: string
  startDate: string
  endDate: string
  description: exp_comp[keyof exp_comp]
  technologies: Technology[]
}

export const jobs: Job[] = [
  {
    id: JOB_ID.mentorSchoolOfCode,
    role: 'Mentor',
    organization: 'School of Code',
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
    organization: 'BJSS',
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
    organization: 'RightIndem',
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
    organization: 'Wraptime',
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
    organization: 'Branded3',
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
    organization: 'ComKnow',
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
    organization: 'Reea',
    startDate: '2014-03-01',
    endDate: '2014-04-01',
    description: JOB_CONTENT.iosApprenticeReea,
    technologies: [ProgrammingLanguage.ObjectiveC, OtherTools.Xcode],
  },
]
