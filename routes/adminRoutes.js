import express from 'express'
import Login from '../Controlers/admin/login.js';
import authAdmin from '../middleware/admin/authAdmin.js';
import addEmploy from '../Controlers/admin/addEmploy.js';
import reciptHistory from '../Controlers/admin/getRecieptHistory.js';
import sendMail from '../Controlers/admin/sendmail.js';
import allmonths from '../Controlers/admin/months.js';
import monthOne from '../Controlers/admin/onemonths.js';
import salaryData from '../Controlers/admin/sararyData.js';
const AdminRouter = express.Router();
AdminRouter.post('/login', Login);
AdminRouter.post('/add-employee', [authAdmin],addEmploy);
AdminRouter.get('/reciept-history', [authAdmin],reciptHistory);
AdminRouter.get('/salaryData', [authAdmin],salaryData);
AdminRouter.get('/months', [authAdmin],allmonths );
AdminRouter.post('/months/one', [authAdmin],monthOne );
AdminRouter.post('/mail', [authAdmin], sendMail);
export default AdminRouter;