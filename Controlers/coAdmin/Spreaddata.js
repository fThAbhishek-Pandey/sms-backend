
import employee from "../../Modules/employeeModule.js"
const Spreaddata =async (req,res) => {
      const data = await employee.find({});
      const resData = data.map ((item )=>{
            return (
                {
                    name : item.name,
                    emp_id : item.emp_id,
                    design: item.design,  
                }
            )
      })
    console.log ("datas ",data);
      res.json({success: true, data :resData});
}

export default Spreaddata