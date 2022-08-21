let pass1 = document.getElementById("pass1");
//console.log("js running successfully");
function check()
{
    if(pass1.value === pass2.value)
    {
        para.innerText = "Password Matched ✅";
        //console.log("pass match");
    }
    else
    {
        para.innerText = "Password do not matched ❌"; 
        //console.log("not matched");
    }
}
pass1.addEventListener('keyup', check);