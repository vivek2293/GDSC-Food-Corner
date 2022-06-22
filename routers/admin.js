fetch('http://localhost:3000/order').then(data=>{
    return data.json();
}).then(convertedData=>{
    console.log('this is from admin');
    console.log(convertedData);
})