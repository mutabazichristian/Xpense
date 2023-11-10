import express from 'express';

import {
 createNewUser
} from '../controllers/signupController.js';

const router = express.Router();

router.post('/',createNewUser);

export default router;