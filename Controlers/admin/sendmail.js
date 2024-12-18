import htmlTemplates from '../../tamplates/tamplate.js'
import salaryData from "./sararyData.js"
import emailText from "../../tamplates/emailText.js"
import MailService from "./mailcontroller.js"
import updateMailed from './updateMailed.js'
const sendMail = async(req,res)=>{
      try {
           const {sheet_id,employees } = req.body
           console.log("--->>>",employees);
           const salary_data = await salaryData(sheet_id,employees);
           const filteredEmployees = employees.map(emp_id => 
            salary_data.filter(item => item.emp_id === emp_id)[0]
          )
          console.log("<<---",filteredEmployees)
          filteredEmployees &&   filteredEmployees.map(async (item,index)=>{
           const {email,mailed} = item;
              console.log("email", email);
              if(true){
              await updateMailed(sheet_id, index)
              const emailContent = emailText(item)
              const pdfContent = htmlTemplates(item)
             await  MailService.sampleMail( pdfContent,emailContent, email)
            }
            })
            // 
            console.log("all email is send");
        return res.status( 200 ).type('json').json({success:true, message: 'Email sent successfully'} )
      } catch (error) {
        console.log(error)
        res.status( 500 ).json( {success:false, message:error.message} )
      }
}
export default sendMail