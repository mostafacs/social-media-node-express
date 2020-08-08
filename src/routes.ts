import profileRoutes from './profile/routes'
import authenticationRoutes from './authentication/routes'
import wallRoutes from './wall/routes'
import {Express} from "express";


export const publicPaths = [
    '/profile/register',
    '/login'
]
export default (app: Express) => {
    app.use('/profile', profileRoutes);
    app.use('/', authenticationRoutes);
    app.use('/', wallRoutes);
}