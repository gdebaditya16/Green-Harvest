function info(){
    const role=document.querySelector('input[name="role_select"]:checked');

    if(!role){
        alert("Please select whether you are a Buyer or a Seller.");
        return;
    }
    const selectedRole=role.value;

    if(selectedRole==="buyer"){
        window.location.href="buyerPage.html";
    }
    else if(selectedRole==="seller"){
        window.location.href="sellerPage.html";
    }
}