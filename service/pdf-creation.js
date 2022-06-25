function generateInvoice(objData,dataCallback,endCallback){
    const PDF=require('pdfkit')
    let i=-1;
    const prices=[200,240,180,35,20,150,120,110,220,190];
    console.log("here: "+objData);
    let bill="Order ID: ";
    // let bill2="";
    // let bill3="";
    let write=true;
    bill+=`${objData.id}`;
    for(let propt in objData){
        let property=propt.charAt(0).toUpperCase() + propt.slice(1);
        property=property.replace(/([a-z])([A-Z])/g, '$1 $2');
        if(propt=='date') {
            write=false;
            bill+=`\n${property} : ${objData[propt]}`;
            continue;
        }
        if(write) continue;
        i++;
        if(propt=='cost') {
            // bill=`\nTotal Price : ${objData[propt]}`;
            // bill=`\nCGST        : ${0.025*objData[propt]}\nSGST : ${0.025*objData[propt]}`;
            // bill=`\nFinal Price : ${1.05*objData[propt]}`;
            break;
        }
        if((objData[propt])!='0'){
            bill+=`\n${property}`;
            console.log(property.length);
            console.log(30-property.length);
            for(let spaces=0;spaces<30-property.length;spaces++) bill+=' ';
            bill+=`: ${objData[propt]} :  ${objData[propt]*prices[i]}`;
        }
    }
    console.log(bill);
    const doc = new PDF();
    doc.on('data',dataCallback);
    doc.on('end',endCallback);
    doc
    .image('img/nav-logo.png',{
        fit:[400,80],
        align:'center'
    })
    .font('fonts/SpaceMono-Regular.ttf')
    .fontSize(12)
    .text(bill,70,200);
    doc.end();
}

module.exports= {generateInvoice};