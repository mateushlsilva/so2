"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
//https://orkhan.gitbook.io/typeorm/docs/data-source-options
//versão para SQLite
// const AppDataSource = new DataSource({
//     database: 'bdaula.sqlite',
//     type: "sqlite", // se for SQLite, então use sqlite
//     // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
//     // deixe false ao usar migrations
//     synchronize: false, 
//     logging: true, // true indica que as consultas e erros serão exibidas no terminal
//     entities: ["src/entities/*.ts"], // entidades que serão convertidas em tabelas
//     migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
//     subscribers: [],
//     maxQueryExecutionTime: 2000 // 2 seg.
// });
//versão para PostgreSQL
const AppDataSource = new typeorm_1.DataSource({
    // database: 'postgres', // se for SQLite, então use bdaula.sqlite
    // type: "postgres", // se for SQLite, então use sqlite
    // host: 'db.undvejpptbowpgysnwiw.supabase.co', // não use esta propriedade se for sqlite
    // port: 5432, // não use esta propriedade se for sqlite
    // username: 'postgres', // não use esta propriedade se for sqlite
    // password:'djmr1234@fatec', // não use esta propriedade se for sqlite
    // // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
    // // deixe false ao usar migrations
    // synchronize: false, 
    // logging: false, // true indica que as consultas e erros serão exibidas no terminal
    // entities: ["src/entities/*.ts"], // entidades que serão convertidas em tabelas
    // migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
    // subscribers: [],
    // maxQueryExecutionTime: 2000 // 2 seg.
    database: 'linux',
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'fatec',
    // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
    // deixe false ao usar migrations
    synchronize: false,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
    maxQueryExecutionTime: 2000 // 2 seg.
});
// https://orkhan.gitbook.io/typeorm/docs/data-source
AppDataSource
    .initialize()
    .then(() => {
    console.log("Data Source inicializado!"); //sucesso na promessa
})
    .catch((e) => {
    console.error("Erro na inicialização do Data Source:", e);
});
exports.default = AppDataSource;
