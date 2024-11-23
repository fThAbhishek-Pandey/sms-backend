import htmlTemplates from '../../tamplates/tamplate.js'
import salaryData from "./sararyData.js"
import emailText from "../../tamplates/emailText.js"
import MailService from "./mailcontroller.js"
const sendMail = async(req,res)=>{
      try {
           const {sheet_id,employees } = req.body
           const salary_data = await salaryData(sheet_id,employees);
        salary_data.map(async (item)=>{
              const {email} = item;
              console.log("email", email);
              const emailContent = emailText(item)
              const pdfContent = htmlTemplates(item)
              MailService.sampleMail( pdfContent,emailContent, email)
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