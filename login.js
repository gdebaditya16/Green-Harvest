function info(){
    const role=document.querySelector('input[name="role_select"]:checked');
    
    if(!role){
        alert("Please select whether you are a Buyer or a Seller.");
        return;
    }
    const selectedRole=role.value;

    if(selectedRole==="buyer"){
        const full_name=document.getElementById("full_name").value;
        const mobile_no=document.getElementById("mobile_no").value;
        const email_id=document.getElementById("email_id").value;
        localStorage.setItem('full_name',full_name);
        localStorage.setItem('mobile_no',mobile_no);
        localStorage.setItem('email_id',email_id);
        window.location.href="buyerPage.html";
    }
    else if(selectedRole==="seller"){
        const full_name=document.getElementById("full_name").value;
        const mobile_no=document.getElementById("mobile_no").value;
        const email_id=document.getElementById("email_id").value;
        localStorage.setItem('full_name',full_name);
        localStorage.setItem('mobile_no',mobile_no);
        localStorage.setItem('email_id',email_id);
        window.location.href="sellerPage.html";
    }
}
