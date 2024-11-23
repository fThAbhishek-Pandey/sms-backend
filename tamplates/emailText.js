const emailText = (salary_data)=>{
    const {emp_id, name,design,pay,DA ,HRA ,dec_depart,ele_ch,nps_per,nps_rupee,_id,month,depart, npda,payment,DA_rupee,total,email,dob, doj}= salary_data;
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Made by Abhishek </title>
    <style>
        .header{
          display: flex;
          justify-content:space-around;
}
.headline{
    text-align: center;
}
    </style>
</head>

<body>
    <h2 class="headline">Salary slip  for the ${month} By Abhishek</h2>
    <div class="header">
        <div>
            <p class="">Employ ID: <span>${emp_id}</span></p>
            <p class="">Employee Name: <span>${name}</span></p>
            <p class="">DOB: <span>${dob}</span></p>
        </div>
        <div>
            <p>Designation: <span>${design}</span></p>
            <p>Department: <span>${dec_depart}</span></p>
            <p>DOJ: <span>${doj}</span></p>
        </div>
    </div>
    

</body>
</html>`
}
export default  emailText