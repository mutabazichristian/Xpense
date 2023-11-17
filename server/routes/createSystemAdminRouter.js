import express from 'express';
import { createSystemAdmin } from '../controllers/createSystemAdminController';s

const router = express.Router();

router.post('/', createSystemAdmin);
