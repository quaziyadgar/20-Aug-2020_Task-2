let pass1 = document.getElementById("pass1");
let checkBox = document.getElementById("check");
//console.log("js running successfully");
function check()
{
    if(this.checked)
    {
        pass1.setAttribute("type", "text");   
        //console.log('checked');
    }
    else
    {
        pass1.setAttribute("type", "password"); 
        //console.log('unchecked');
    }
}
checkBox.addEventListener('change', check);