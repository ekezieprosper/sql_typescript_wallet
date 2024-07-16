import { DataTypes } from "sequelize";
import { v4 as uuidv4} from "uuid";
import sequelize from "../database/init";
import { IUserModel } from "../interfaces/user-interface";

const User = sequelize.define<IUserModel>("userModel", {
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: ()=> uuidv4
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
},{
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at"
});

export default User;
