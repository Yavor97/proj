import {IRestData} from './../../index.interface'
import {Request, Response, NextFunction } from 'express';

export let GetAllUsers:IRestData = {
    description:'get all usrers',
    method:'get',
    path:'users',
    controller : (req: Request, res: Response, next: NextFunction)=>{
        res.send('all users');
    }
}
export let GetUserById: IRestData = {
    description:'get user by id',
    method:'get',
    path:'users:id',
    controller : (req: Request, res: Response, next: NextFunction)=>{
        res.send(` ${req.params.id} user`);
    }  
}
export let UserSetings: IRestData = {
    description:'user settings',
    method:'get',
    path:'users:id/settings',
    controller : (req: Request, res: Response, next: NextFunction)=>{
        res.send(` ${req.params.id} user settings`);
    }  
}
export let UserRouts: IRestData = {
    description: 'user routs',
    method:'get',
    path:'users:id/routs',
    controller : (req: Request, res: Response, next: NextFunction)=>{
        res.send(` ${req.params.id} user routs`);
    }
}