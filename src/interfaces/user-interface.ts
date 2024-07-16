import { Model, Optional } from "sequelize";

export interface IUser {
    id: number;
    user_id: string;
    user_name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
};

export interface IUserModel extends Model <IUser>{};

export interface IUserCreation extends Optional<IUser, "id" | "user_id" | "created_at" | "updated_at">{};

