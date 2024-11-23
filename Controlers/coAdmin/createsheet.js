import SheetModel from "../../Modules/spreadDataModel.js";
const createsheet = async (req,res) => {
     try {
        const {spreadData} = req.body
        const { month, employee } = spreadData
        console.log("all data",month,"ji", employee )
        if ( !month || !employee){
            res.json({success:false, message:"Fill all data"});
        }
         const newSpread = new  SheetModel(spreadData);
          newSpread.save();
          res.json({success:true, message :"sheet save"});
     } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
     }
}

export default createsheet