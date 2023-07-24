const fetch=require('node-fetch');
fetch('JavaScript\assignment4\myscript.js')
.then(response=> response.text())
.then(script=>{
    const scriptElement= document.createElement('script');
    scriptElement.innerHTML=script;
    document.head.appendChild(scriptElement);
})
.catch (error=>console.error('Error loading script:',error));