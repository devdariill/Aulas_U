import { createPool } from 'mysql2/promise'

import { DB_DATA_BASE, DB_HOST, DB_PASS, DB_PORT, DB_USER } from './config.js'

// let pool;

// try {
//   pool = createPool({
//     host: DB_HOST,
//     port: DB_PORT,
//     user: DB_USER,
//     password: DB_PASS,
//     database: DB_DATA_BASE,
//   });
// } catch (error) {
//   console.error("tcDB", error);
// }

// export { pool };

export const pool = createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: DB_DATA_BASE
})

// import {config} from "dotenv";
// // import * as dotenv from "dotenv";
// config()
// // dotenv.config({path: './.env'});
// // console.log(process.env.HOST)
// // console.log(process.env.PORT)
// export const pool = createPool({
//   host:process.env.HOST,
//   port:process.env.PORT,
//   user:process.env.USER,
//   password:process.env.PASS,
//   database:process.env.DATA_BASE,
// });
