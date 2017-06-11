import { IRestData } from './../../index.interface'
import  * as Users from './users'
import {Settings} from './settings'
export const paths:IRestData[] = [
    {
        description:'all repository actions endpoint',
        method: 'get',
        path: `hi`,
        controller: function(req, res, next) {
            res.send('yo!')
        }
    },
    Users.GetAllUsers,
    Users.GetUserById,
    Users.UserSetings,
    Users.UserRouts,
    Settings
];