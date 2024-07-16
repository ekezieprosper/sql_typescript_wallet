import dotenv from "dotenv";
dotenv.config();

const envVariables = {
    databasePort: parseInt(process.env.PORT as string),
    databaseUser: process.env.DATABASE_USERNAME as string,
    databasePassword: process.env.DATABASE_PASSWORD as string,
    databaseName: process.env.DATABASE_NAME as string
};

export default envVariables;
