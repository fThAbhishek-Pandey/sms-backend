
const salaryCulculate = (recieptData) => {
    const { pay,DA,  HRA, dec_depart, ele_ch, nps_rupee,} = recieptData;
    const DA_rupee= (pay*DA)/100;
    const total = pay+  DA_rupee + HRA;
    const npda= pay + DA_rupee;        
    const payment = total - dec_depart- ele_ch - nps_rupee;
    return [npda,payment, DA_rupee,total,  ];
}

export default salaryCulculate