const PDF=require('pdfkit')

function generateInvoice(objData,dataCallback,endCallback){
    console.log("here: "+objData);
    let bill="";
    for(var propt in objData){
        if(objData[propt]!= 0) bill+=`\n${propt} : ${objData[propt]}`;
    }
    const doc = new PDF();
    doc.on('data',dataCallback);
    doc.on('end',endCallback);
    doc
    .fontSize(25)
    .text(bill,200,200);
    doc.end();
}

module.exports= {generateInvoice};