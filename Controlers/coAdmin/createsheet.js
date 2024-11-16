import SheetModel from "../../Modules/spreadDataModel.js";
const createsheet = async (req,res) => {
     try {
        const { month, employee } = req.body
        console.log("all data",month, employee)
        if ( !month || !employee){
            res.json({success:false, message:"Fill all data"});
        }
         const newSpread = new  SheetModel({month, employee});
          newSpread.save();
          res.json({success:true, message :"sheet save"});
     } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
     }
}

export default createsheet