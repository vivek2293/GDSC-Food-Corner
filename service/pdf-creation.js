function generateInvoice(objData,dataCallback,endCallback){
    const PDF=require('pdfkit')
    let i=-1;
    const prices=[200,240,180,35,20,150,120,110,220,190];
    let bill=`Invoice No. : ${objData.id}\n`;
    bill+="Prepared By: AbsoluteZero";
    let write=true;
    for(let propt in objData){
        let property=propt.charAt(0).toUpperCase() + propt.slice(1);
        property=property.replace(/([a-z])([A-Z])/g, '$1 $2');
        if(propt=='date') {
            write=false;
            bill+=`\nInvoice ${property} : ${String(objData[propt]).substring(0,25)}\n\n\n\n`;
            bill+="Item";
            for(let spaces=0;spaces<26;spaces++) bill+=' ';
            bill+="Qty   Price    Amount\n";
            continue;
        }
        if(write) continue;
        i++;
        if(propt=='cost') {
            bill+="\n\n";
            for(let x=0;x<32;x++) bill+=' ';
            bill+=`Total Price : ${objData[propt]}\n`;
            for(let x=0;x<32;x++) bill+=' ';
            bill+=`CGST        : ${0.025*objData[propt]}\n`;
            for(let x=0;x<32;x++) bill+=' ';
            bill+=`SGST        : ${0.025*objData[propt]}\n`;
            for(let x=0;x<32;x++) bill+=' ';
            bill+=`Final Price : ${1.05*objData[propt]}`;
            break;
        }
        if((objData[propt])!='0'){
            bill+=`\n${property}`;
            for(let spaces=0;spaces<30-property.length;spaces++) bill+=' ';
            bill+=` ${objData[propt]}   `;
            if(Number(objData[propt])<10) bill+=' ';
            bill+=`Rs.${prices[i]}`;
            for(let space=0; space<5-Math.log(prices[i])/Math.log(10);space++) bill+=' ';
            bill+=`Rs.${objData[propt]*prices[i]}`;
        }
    }
    bill+='\n\n';
    for(let x=0;x<8;x++) bill+=' ';
    bill+="Thanks For Visiting Our Restaurant!";
    const doc = new PDF();
    doc.on('data',dataCallback);
    doc.on('end',endCallback);
    doc
    .image('img/nav-logo.png',{
        fit:[465,80],
        align:'center'
    })
    .font('fonts/SpaceMono-Bold.ttf')
    .fontSize(12)
    .text(bill,80,200);
    doc.end();
}

module.exports= {generateInvoice};