import {Router} from "express";
import UserService from "../profile/services/user.service";

const router = Router();
router.post('/login',  (req, resp, next)=> {
    UserService.login(req.body.email, req.body.password)
        .then((token) => resp.json({token, message: 'created successfully'}))
        .catch( (error) => next(error.message));
});

export default router;