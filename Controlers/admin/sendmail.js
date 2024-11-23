import MailService from "./mailcontroller.js"
import htmlTemplates from '../../tamplates/tamplate.js'
import salaryData from "./sararyData.js"
import emailText from "../../tamplates/emailText.js"
import recieptModel from "../../Modules/reciept.js"
import sendmailer from "./sendmailer.js"
const sendMail = async(req,res)=>{
      try {
           const {sheet_id,employees } = req.body
           const salary_data = await salaryData(sheet_id,employees);
           console.log("salaryData : ",salary_data);
        // 
        salary_data.map(async (item)=>{
              const {email} = item;
              const emailContent = emailText(item)
              const pdfContent = htmlTemplates(item)
              sendmailer(pdfContent,emailContent, email, res)
              // const updated_reciept = await recieptModel.findByIdAndUpdate(recipt_Id,{ mailed :true})
            })
        // return res.status( 200 ).type('json').json({success:true, message: 'Email sent successfully',salary_data} )

      } catch (error) {
        console.log(error)
        res.status( 500 ).json( {success:false, message:error.message} )
      }
}
export default sendMail