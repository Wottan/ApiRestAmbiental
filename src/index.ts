import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from 'morgan';
import * as cors from 'cors';
import { useExpressServer } from "routing-controllers";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { User } from "./entity/User";

// creates express app, registers all controller routes and returns you express app instance
let express = require("express"); // or you can import it if you have installed typings
let app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
// // app.use() // you can configure it the way you want
useExpressServer(app, {
    cors: true,
    controllers: [__dirname + "/controladores/*.ts"]
    // controllers: [UsuarioControlador, UsuarioNivelControlador, TutorControlador, PersonaControlador, RegistroControlador]
});

const connection = createConnection();
app.listen(50000);
console.log("Express server corriendo en puerto 50000. ");
// console.log("Express server has started on port 3000. Open http://localhost:50000/users to see results");
// createConnection().then(async connection => {

//     // create express app
//     const app = express();
//     app.use(bodyParser.json());

//     // register express routes from defined application routes
//     Routes.forEach(route => {
//         (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
//             const result = (new (route.controller as any))[route.action](req, res, next);
//             if (result instanceof Promise) {
//                 result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

//             } else if (result !== null && result !== undefined) {
//                 res.json(result);
//             }
//         });
//     });

//     // setup express app here
//     // ...

//     // start express server
//     app.listen(3000);

//     // insert new users for test
//     await connection.manager.save(connection.manager.create(User, {
//         firstName: "Timber",
//         lastName: "Saw",
//         age: 27
//     }));
//     await connection.manager.save(connection.manager.create(User, {
//         firstName: "Phantom",
//         lastName: "Assassin",
//         age: 24
//     }));

//     console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

// }).catch(error => console.log(error));
