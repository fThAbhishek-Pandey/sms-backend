import SheetModel from '../../Modules/spreadDataModel.js';
const monthOne = async(req,res)=>{
       try {
        const {admintoken} = req.headers;
        console.log("adminToken salary : ",admintoken);
           const {month_id} = req.body
           console.log(month_id);
           const data= await SheetModel.findOne({_id:month_id});
           if (data){
            
              res.json({success: true, data});
           }
           else {
            res.json({success: false, message : "refresh"})
           }
          
       } catch (error) {
           console.log(error)
           res.json({success: false, message: error.message})
       }
}
export default monthOne