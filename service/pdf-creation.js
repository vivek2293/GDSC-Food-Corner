function generateInvoice(objData,dataCallback,endCallback){
    const PDF=require('pdfkit')
    let i=-1;
    const prices=[200,240,180,35,20,150,120,110,220,190];
    console.log("here: "+objData);
    let bill="Order ID: ";
    let write=true;
    bill+=`${objData.id}`;
    for(let propt in objData){
        let property=propt.charAt(0).toUpperCase() + propt.slice(1);
        if(propt=='date') {
            write=false;
            bill+=`\n${property.replace(/([a-z])([A-Z])/g, '$1 $2')} : ${objData[propt]}`;
            continue;
        }
        if(write) continue;
        i++;
        if(propt=='cost') {
            bill+=`\nTotal Price : ${objData[propt]}`;
            bill+=`\nCGST : ${0.025*objData[propt]}`;
            bill+=`\nSGST : ${0.025*objData[propt]}`;
            bill+=`\nFinal Price : ${1.05*objData[propt]}`;
            break;
        }
        if((objData[propt])!='0') bill+=`\n${property.replace(/([a-z])([A-Z])/g, '$1 $2')} : ${objData[propt]}:  ${objData[propt]*prices[i]}`;
    }
    const doc = new PDF();
    doc.on('data',dataCallback);
    doc.on('end',endCallback);
    doc
    .image('img/nav-logo.png',{
        fit:[400,80],
        align:'center'
    })
    .fontSize(16)
    .text(bill,20,200);
    doc.end();
}

module.exports= {generateInvoice};