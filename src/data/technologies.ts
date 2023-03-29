import { Technology } from '../types'

export const ProgrammingLanguage: { [key: string]: Technology } = {
  JavascriptEs6: {
    id: '0fa37f13-7f24-45c7-a027-2a264f6e8d9a',
    name: 'JavaScript ES6',
  },
  Typescript: {
    id: 'ccc56a08-60b3-4b43-abc2-16a720b5525f',
    name: 'TypeScript',
  },
  Html: {
    id: '3d111b1e-69e7-4175-90f1-511c3c88e1e5',
    name: 'HTML5',
  },
  Css: {
    id: 'f35c326a-1f53-4ce6-b442-ad9e1e23979d',
    name: 'CSS3',
  },
  JavascriptEs5: {
    id: '2f81fdcb-411b-402d-965e-b4b4afac7f0a',
    name: 'JavaScript ES5',
  },
  Csharp: {
    id: '39a93407-117c-4943-b1e0-4bbb045bf55a',
    name: 'C#',
  },
  ObjectiveC: {
    id: '1566d506-7a54-4e9f-801b-396ec46644e4',
    name: 'Objective-C',
  },
}

export const FrontEndTech: { [key: string]: Technology } = {
  React: {
    id: '6bb9970c-35c6-4ec8-8452-f6f9a709ec94',
    name: 'React',
  },
  NextJs: {
    id: '768253be-6753-4e3e-8d9b-844ef71b4a1b',
    name: 'Next.js',
  },
  Ionic: {
    id: '0ad0c7b8-1558-4732-9976-9faedd56187e',
    name: 'Ionic',
  },
  Angular: {
    id: '138b149f-3bd4-491d-8ad3-17eb9e2e38bc',
    name: 'Angular',
  },
  ReactNative: {
    id: '5b4fe9a9-5411-408d-8e70-54a0a8e87b04',
    name: 'React Native',
  },
  Redux: {
    id: 'e3c78902-9e2f-4864-88d9-cd3bd1275260',
    name: 'Redux',
  },
  Ngrx: {
    id: 'c7d08337-7352-41f3-9a68-19858bf62ae8',
    name: 'NgRx',
  },
  MaterialUi: {
    id: 'a79f24bb-f6c5-4f0a-a936-2a46e1b31dcc',
    name: 'Material UI',
  },
  Bootstrap: {
    id: 'f735be3c-9448-4a5d-ad45-87a8b5bc137a',
    name: 'Bootstrap',
  },
  Storybook: {
    id: '4ba3c2ff-1989-41c5-adfd-2c6131767661',
    name: 'Storybook',
  },
  Jquery: {
    id: 'f13982c7-fd40-4ba5-9bb9-e47d061aef1f',
    name: 'jQuery',
  },
}

export const BackEndTech: { [key: string]: Technology } = {
  NodeJs: {
    id: '6347e6c1-b924-482a-ba6c-5b55e754bc8d',
    name: 'Node.js',
  },
  ExpressJs: {
    id: '6f0228c3-a84c-4728-9c49-05743e7bcfe4',
    name: 'Express.js',
  },
  AspNetWebApi: {
    id: 'd42f0f44-c3d6-4803-a0c5-c65cdd7998ab',
    name: 'ASP.Net Web API',
  },
  AspNetMvc: {
    id: '85c50989-8efd-4a6a-9efa-ed6659b78462',
    name: 'ASP.Net MVC',
  },
  EntityFramework: {
    id: '6a40106d-3317-4c05-ad8e-0be6351c9531',
    name: 'Entity Framework',
  },
  RabbitMq: {
    id: '13974d44-fdc0-4c5d-ad90-b286989043da',
    name: 'RabbitMQ',
  },
  Elasticsearch: {
    id: '9a75b1ec-73af-4af3-9ea1-ef03749883a5',
    name: 'ElasticSearch',
  },
}

export const TestingTools: { [key: string]: Technology } = {
  Jest: {
    id: '1534577f-5ab8-48d3-b18e-9d9e282712a5',
    name: 'Jest',
  },
  ReactTestingLibrary: {
    id: '35e96767-4d47-4907-97bc-a864f78d748b',
    name: 'React Testing Library',
  },
  Cypress: {
    id: 'bf2db266-f3b2-40b1-aa2f-60c56460b096',
    name: 'Cypress',
  },
  WebdirverIo: {
    id: 'f09eb48e-aec4-43c7-bf1e-ba4b2d519657',
    name: 'WebDriver IO',
  },
  Jasmine: {
    id: 'c194ba47-cc1a-4e6a-80e6-80da463d1633',
    name: 'Jasmine',
  },
  Enzyme: {
    id: 'bbee1195-01a6-4b2c-8547-d848f344936b',
    name: 'Enzyme',
  },
  NUnit: {
    id: 'f31ac476-95e1-41a2-a4f5-c52e76a2f438',
    name: 'NUnit',
  },
  Moq: {
    id: 'e5aed7c6-bfae-4759-8be9-301f92acfd30',
    name: 'Moq',
  },
}

export const Database: { [key: string]: Technology } = {
  Postgresql: {
    id: 'abf20a53-9ac4-4a03-8cf1-d0aa9c29233c',
    name: 'PostgreSQL',
  },
  MongoDb: {
    id: '4ead3f71-229d-4fad-a978-cbd5081fe3ff',
    name: 'MongoDB',
  },
  SqlServer: {
    id: '4c5c8361-5976-4a88-92f6-ffa6359038b1',
    name: 'SQL Server',
  },
}

export const Cloud: { [key: string]: Technology } = {
  Aws: {
    id: '3a395d68-ccbe-401c-9ef4-143ff16aea39',
    name: 'AWS',
  },
}

export const OtherTools: { [key: string]: Technology } = {
  Git: {
    id: '145f92e9-63af-43d8-ab8c-b7dc697de96c',
    name: 'Git',
  },
  Npm: {
    id: 'dbe24110-e194-4b07-a90c-1c106ab9a587',
    name: 'npm',
  },
  Yarn: {
    id: '644c8b31-039c-48e3-bb46-86a9c8ea42e5',
    name: 'yarn',
  },
  Github: {
    id: '0950deaa-d505-465f-979e-44f979de01d7',
    name: 'GitHub',
  },
  Gitlab: {
    id: '5907c119-1bb1-4e46-95b1-f28cc7490886',
    name: 'GitLab',
  },
  Docker: {
    id: '1715b5fe-0ad9-4316-aabf-ce34fe1e4ec6',
    name: 'Docker',
  },
  Jira: {
    id: 'd52ae0bc-f095-4180-8efa-5dc1ebbe6afa',
    name: 'Jira',
  },
  Vsts: {
    id: '054763bc-c19a-4ae5-8469-23035946b20e',
    name: 'VSTS',
  },
  Xcode: {
    id: '1dc4cb15-05ad-43b8-b2a0-53125cd115fc',
    name: 'XCode',
  },
}
