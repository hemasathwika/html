console.log("Page is Ready")
var take_input=document.getElementById("take_input")
var take_input_key=document.getElementById("take_input_key")
var save_value=document.getElementById("save_value")
var sessionStorage_value=document.getElementById("sessionstorage_value")
var read_sessionstorage=document.getElementById("read_sessionstorage")
var delete_data=document.getElementById("delete_data")
save_value.onclick=function(){
    sessionStorage.setItem(take_input_key.value,take_input.value);
}
read_sessionstorage.onclick=function(){
    sessionstorage_value.textContent=sessionStorage.getItem("name");
}
delete_data.onclick=function(){
    sessionStorage.removeItem("name");} 