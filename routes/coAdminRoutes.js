import express from 'express'
import coLogin from '../Controlers/coAdmin/cologin.js';
import authCoAdmin from '../middleware/coAdmin/authCoAmin.js';
import addSalaryDetails from '../Controlers/coAdmin/addSalaryDetail.js';
import Spreaddata from '../Controlers/coAdmin/Spreaddata.js';
import createsheet from '../Controlers/coAdmin/createsheet.js';
const coRoutes = express.Router();
coRoutes.post('/login',coLogin)
coRoutes.post('/reciept',[authCoAdmin],addSalaryDetails )
coRoutes.get('/getspread',[authCoAdmin], Spreaddata )
coRoutes.post('/createspread',[authCoAdmin], createsheet)
export default coRoutes
