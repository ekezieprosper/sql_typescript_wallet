import { Sequelize } from "sequelize";
import envVariables from "../configs/environmental";
import { IUserModel } from "../interfaces/user-interface";

const sequelize = new Sequelize({
    username: envVariables.databaseUser,
    password: envVariables.databasePassword,
    database: envVariables.databaseName,
    host: "127.0.0.1",
    port: envVariables.databasePort,
    dialect: "mysql",
});

export default sequelize;
