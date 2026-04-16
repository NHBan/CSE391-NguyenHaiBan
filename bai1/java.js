const usernameInput=document.getElementById('usernameInput');
const btnSubmit=document.getElementById('btn-submit')

function isValidUsername()
{
    const errors=[];
    const   HAVE_UPPERCASE=/[A-Z]/;
    if(!HAVE_UPPERCASE.test(usernameInput.value))
        errors.push("Trong ten dang nhap cua ban bat buoc phai co 1 tu viet hoa");
    return errors;
}
btnSubmit.addEventListener('click',(event)=>{
    event.preventDefault();
    const errorsList=isValidUsername();
    errorsList.forEach(item=>{
        console.log(item)
    })
})