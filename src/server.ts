import express, {Response, Request} from "express";
import initializeDatabase from "./database";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response)=>{
        res.send("Welcome To our fisrt backend class")
});

app.listen(3000, async ()=>{
    await initializeDatabase();
    console.log("Server listening on port 3000");
});
