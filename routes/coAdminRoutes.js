import express from 'express'
import coLogin from '../Controlers/coAdmin/cologin.js';
import authCoAdmin from '../middleware/coAdmin/authCoAmin.js';
import addSalaryDetails from '../Controlers/coAdmin/addSalaryDetail.js';
const coRoutes = express.Router();
coRoutes.post('/login',coLogin)
coRoutes.post('/reciept',[authCoAdmin],addSalaryDetails )
export default coRoutes
