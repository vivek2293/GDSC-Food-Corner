const PDF=require('pdfkit')

function generateInvoice(objData,dataCallback,endCallback){
    const doc = new PDF();
    doc.on('data',dataCallback);
    doc.on('end',endCallback);
    doc
    .fontSize(25)
    .text(`biryani: ${objData.biryani}\nburger: ${objData.burger}\nnaan: ${objData.naan}`,200,200);
    doc.end();
}

module.exports= {generateInvoice};