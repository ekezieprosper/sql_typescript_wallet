import sequelize from "./init";

const initializeDatabase = async (): Promise<void>=>{
    try {
     await sequelize.authenticate();
     console.log("Database connected...");
    } catch (error: any) {
       console.log(error);  
    }
};

export default initializeDatabase;
