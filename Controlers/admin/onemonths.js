import SheetModel from '../../Modules/spreadDataModel.js';
const monthOne = async(req,res)=>{
       try {
           const {month_id} = req.body
           const data= await SheetModel.find({_id:month_id});
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