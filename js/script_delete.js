async function deleteItems(){
    var id = document.getElementById('id-input').value;
    document.getElementById('id-input').value = "";
    console.log(id);
    if(id!==""){
        console.log("correct id");
        
    }
    else{
        alert("please enter correct products id....");
        return;
    }
}