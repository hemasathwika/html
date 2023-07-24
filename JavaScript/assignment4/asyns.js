const fetch=require('node-fetch');
async function loadScript(){
    try{
        const response=await fetch('JavaScript\assignment4\myscript.js');
        const script=await response.text();
    const scriptElement=  document.createElement('script'); 
    scriptElement.innerHTML=script;
    document.head.appendChild(scriptElement);
 }   
 catch (error) {console.error('Error loading script:',error);
}
}
loadScript();

   