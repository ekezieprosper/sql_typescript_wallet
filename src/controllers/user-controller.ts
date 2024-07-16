import BadRequest from "../errors/bad-request";
import { IUser } from "../interfaces/user-interface";
import User from "../models/user-model";

class UserControllers {

    async registerUser (body: Partial<IUser>){
        const emailAlreadyExists = await User.findOne({where: {email: body.email }});
        if(emailAlreadyExists){
            // throw new BadRequest()
        }
    }
};

export default UserControllers;
