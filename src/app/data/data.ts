export interface Project{
    name: string,
    url: string|null,
    repository: string,
    description: string,
    tags: string[],
    type: 'FRONTEND'|'BACKEND'|'MACHINE LEARNING'|'PROGRAMMING EXERCISES',
}

export const projects: Project[]=[
    // {
    //     name:'',
    //     url: null,
    //     repository: '',
    //     description: '',
    //     tags:['Spring Boot','Java'],
    //     type:'BACKEND',
    // },
    {
        name:'Ms Fourt Front',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/05-http-effects',
        description: 'In this app i used almos all about ngrx like store, reducer and effects, but no selectors',
        tags:['Angular', 'Typescript','Ngrx'],
        type:'FRONTEND',
    },
    {
        name:'Ms Fourth',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/ms-fourth',
        description: 'In this application I developed microservices and they communicate with feign client, Jpql, Jpa, others and it is integrate with Ms Fourt Front.',
        tags:['Spring Boot','Java', 'Kubernetes', 'Docker', 'Postgresql'],
        type:'BACKEND',
    },
    {
        name:'Http Effects',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/05-http-effects',
        description: 'This app is inegrated with Ms Fourth',
        tags:['Angular', 'Typescript', 'Ngrx'],
        type:'FRONTEND',
    },
    {
        name:'Ingreso Egreso App',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/04-ingresoegresoapp',
        description: 'App with ngrx and Firebase',
        tags:['Angular', 'Typescript'],
        type:'FRONTEND',
    },
    {
        name:'to do app - ngrx',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/03-todoapp',
        description: 'This app is one of my first steps with ngrx',
        tags:['Angular', 'Typescript'],
        type:'FRONTEND',
    },
    {
        name:'authapp',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/13-authapp',
        description: 'This app is all about logging in and is integrated with Nest.',
        tags:['Angular', 'Typescript'],
        type:'FRONTEND',
    },
    {
        name:'nest-backend',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/12-nest-backend',
        description: 'It is a basic backend app to login and test it with angular.',
        tags:['Nest', 'Typescript'],
        type:'BACKEND',
    },
    {
        name:'directiveSignals',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/11-directivesignals',
        description: 'I developed an app with signal that is a new feature of angular.',
        tags:['Angular', 'Typescript'],
        type:'FRONTEND',
    },
    {
        name:'FormApp',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/07-formapp',
        description: 'Here there are diferent sort forms like static form and dynamic form. Also there are valiators.',
        tags:['Angular', 'Typescript'],
        type:'FRONTEND',
    },
    {
        name:'pipesApp',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/05-pipesapp',
        description: 'In this there are only examples of pipes and personalized pipes.',
        tags:['Angular', 'Typescript'],
        type:'FRONTEND',
    },
    {
        name:'countryApp',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/04-countryapp',
        description: 'This app is for finding any country and it is connected with "restcountries.com". You can find a coutry for its capital, alpha code and region.',
        tags:['Angular', 'Typescript'],
        type:'FRONTEND',
    },
    {
        name:'gifs-app',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/03-gifs-app',
        description: 'In this app you can find any gif like: Dragon Ball, Counter Strike, Dota 2 and others.',
        tags:['Angular', 'Typescript'],
        type:'FRONTEND',
    },
    {
        name:'data-science',
        url: null,
        repository: 'https://github.com/he-ale/data-science',
        description: 'In this repository you will find basic machine learning models and their data analysis together.',
        tags:['Python', 'numpy', 'pandas', 'Scikit Learn', 'Matplotlib', 'Keras', 'TensorFlow', 'Pytorch'],
        type:'MACHINE LEARNING',
    },
    {
        name:'Carcinoma Detection',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/proyectofinal',
        description: 'In this repository you will find basic machine learning models and their data analysis together.',
        tags:['Python', 'numpy', 'pandas', 'Matplotlib', 'Keras', 'TensorFlow'],
        type:'MACHINE LEARNING',
    },
    {
        name:'programming-exercises',
        url: null,
        repository: 'https://gitlab.com/he.ale.cladera/programming-exercises',
        description: 'In this repository there are programming exercises that are solved in different languages programming like Java, Typescript, Javascript, python, C# and Go.',
        tags:['Java', 'Python', 'Typescript', 'Javascript', 'C#', 'Go'],
        type:'PROGRAMMING EXERCISES',
    },
]