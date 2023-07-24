
function onButtonClick(){

    //f1 is pointing to the showMessage
    const f1 =function showMessage(){

        console.log('button was clicked 3 seconds ago')
        const div1=document.getElementById('div1')
        div1.classList.toggle('yellowbg')
    }

    setInterval(f1,3000)

}

