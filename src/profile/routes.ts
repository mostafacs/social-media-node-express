import {Router} from "express";
import UserService from './services/user.service'
import {errorHandler, successHandler} from '../utils/router.handler'

const router = Router();
router.post('/register',  (req, resp, next)=> {
    UserService.createNewUser(req.body)
        .then((data) => resp.json({data, message: 'created successfully'}))
        .catch( (error) => next(error.message));
});

export default router;