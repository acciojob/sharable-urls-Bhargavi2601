// your code here
let tempString ;
let tempMsg = document.getElementById('url');



function appendString() {
    let namee = document.getElementById('name').value;
    let year = document.getElementById('year').value;
    tempMsg.textContent = '';
   
 if (namee != '' && year === '') {
        
        tempString = `https://localhost:8080/?name=${namee}`;
        console.log(`0`);
        tempMsg.textContent = tempString;
        console.log(` tempMsg.textContent`);
    } else if (namee === '' && year != '') {
        
        tempString = `https://localhost:8080/?year=${year}`;
        console.log(`1`);
        tempMsg.textContent = tempString;
        console.log(` tempMsg.textContent`);
    } else if(namee != '' && year != ''){
        console.log(`2`);
        tempMsg.textContent = tempString;
        console.log(` tempMsg.textContent`);
    } else {
        console.log(`3`);
        tempMsg.textContent = tempString;
        console.log(` tempMsg.textContent`);
    } 
}
