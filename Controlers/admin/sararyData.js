
import employee from "../../Modules/employeeModule.js";
import SheetModel from "../../Modules/spreadDataModel.js"
import salaryCulculate from "./salaryCulculate.js";
const salaryData =async ( sheet_id)=>{
       
      sheet_id= "6738e09285c67c6a1698a507"
      console.log(" i am salary data",sheet_id);
        try {
            const monthDetail = await SheetModel.findById(sheet_id);
            const allemployee = await employee.find({})
            // console.log("monthDetail", monthDetail.employee);
            // console.log("allemployee", allemployee);
            const allData = monthDetail.employee.map((item)=>{
            const {emp_id, name,design,pay, DA ,HRA ,dec_depart,ele_ch,nps_per,nps_rupee,_id}= item
            const more_data = salaryCulculate(item)
            
            const {email,depart, dob, doj} = allemployee.filter((myitem )=> myitem.emp_id === emp_id )[0];
            return  {emp_id, name,design,pay,DA ,HRA ,dec_depart,ele_ch,nps_per,nps_rupee,_id,month: monthDetail.month,depart, npda:more_data[0] ,payment: more_data[1],DA_rupee:more_data[2],total:more_data[3],email,dob, doj};
                           
          }
        )
          
          //  console.log("01",allData);
           return allData
        
        } catch (error) {
            console.log(error)
        }
}
export default salaryData