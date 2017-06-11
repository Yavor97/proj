import {IRestData} from './../../index.interface'
import {Request, Response, NextFunction } from 'express';

export const Settings:IRestData = {
    description:'show setting',
    method:'get',
    path:'settings',
    controller : (req: Request, res: Response, next: NextFunction)=>{
        res.send('all settings');
    }
}