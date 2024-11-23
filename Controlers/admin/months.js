import SheetModel from '../../Modules/spreadDataModel.js';
const allmonths = async(req,res)=>{
       try {
           const data= await SheetModel.find({});
           if (data){
            const months = data.map((item)=> {
                return {
                    month: item.month,
                    month_id : item._id
                }
            })
              res.json({success: true, months});
           }
           else {
            res.json({success: false, message : "refresh"})
           }
          
       } catch (error) {
           console.log(error)
           res.json({success: false, message: error.message})
       }
}
export default allmonths