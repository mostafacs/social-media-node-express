import {Router} from "express";

const router = Router();
router.get('/home',  (req, resp, next)=> {
  console.log('wall');
});

export default router;