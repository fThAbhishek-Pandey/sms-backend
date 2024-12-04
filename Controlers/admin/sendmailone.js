import htmlTemplates from '../../tamplates/tamplate.js'
import salaryData from "./sararyData.js"
import emailText from "../../tamplates/emailText.js"
import MailService from "./mailcontroller.js"
import updateMailed from './updateMailed.js'
const sendMailOne = async(req,res)=>{
      try {
           const {sheet_id,employee } = req.body
           console.log("--->>>",employee);
           const salary_data = await salaryData(sheet_id);
           let idx=0;
           const EmployeeData =  salary_data.filter((item, index) =>{
                idx= index
            return item.emp_id === employee
         })[0]
          
          console.log("<<---",EmployeeData)
          
           const {email,mailed} = EmployeeData;
              console.log("email", email);
              if(true){
              await updateMailed(sheet_id,idx)
              const emailContent = emailText(EmployeeData)
              const pdfContent = htmlTemplates(EmployeeData)
             await  MailService.sampleMail( pdfContent,emailContent, email)
            }
            
            // 
            console.log("all email is send");
        return res.status( 200 ).type('json').json({success:true, message: 'Email sent successfully'} )
      } catch (error) {
        console.log(error)
        res.status( 500 ).json( {success:false, message:error.message} )
      }
}
export default sendMailOne