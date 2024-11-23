import XLSX from 'xlsx'
const jsonToExle = (req,res)=>{
    const wb = XLSX.utils.book_new(); 
    const ws = XLSX.utils.json_to_sheet(data); 
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "sample_file.xlsx");
}
export default jsonToExle;