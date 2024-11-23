import MailService from "./mailcontroller.js"

const sendmailer = (pdfContent,emailContent, email, res) => {
    MailService.sampleMail( pdfContent,emailContent, email)
    .then( () => {
      return res.status( 200 ).type('json').json({success:true, message: 'Email sent successfully'} )
    })
}

export default sendmailer