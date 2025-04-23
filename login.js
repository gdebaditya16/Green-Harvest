function info() {

    const fullName = document.getElementById('full_name').value;
    const mobileNo = document.getElementById('mobile_no').value;
    const emailId = document.getElementById('email_id').value;
    const role = document.querySelector('input[name="role_select"]:checked');

    if (!fullName || !mobileNo || !emailId) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^\d{10}$/.test(mobileNo)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
        alert("Please enter a valid email address.");
        return;
    }


    if (!role) {
        alert("Please select whether you are a Buyer or a Seller.");
        return;
    }

    const selectedRole = role.value;


    const userData = {
        fullName,
        mobileNo,
        emailId,
        role: selectedRole
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    if (selectedRole === "buyer") {
        window.location.href = "buyerPage.html";
    } else if (selectedRole === "seller") {
        const full_name=document.getElementById("full_name").value;
        const mobile_no=document.getElementById("mobile_no").value;
        const email_id=document.getElementById("email_id").value;
        localStorage.setItem('full_name',full_name);
        localStorage.setItem('mobile_no',mobile_no);
        localStorage.setItem('email_id',email_id);
        window.location.href = "sellerPage.html";
    }
}

// function info(){
//     const role=document.querySelector('input[name="role_select"]:checked');
    
//     if(!role){
//         alert("Please select whether you are a Buyer or a Seller.");
//         return;
//     }
//     const selectedRole=role.value;

//     if(selectedRole==="buyer"){
//         const full_name=document.getElementById("full_name").value;
//         const mobile_no=document.getElementById("mobile_no").value;
//         const email_id=document.getElementById("email_id").value;
//         localStorage.setItem('full_name',full_name);
//         localStorage.setItem('mobile_no',mobile_no);
//         localStorage.setItem('email_id',email_id);
//         window.location.href="buyerPage.html";
//     }
//     else if(selectedRole==="seller"){
//         const full_name=document.getElementById("full_name").value;
//         const mobile_no=document.getElementById("mobile_no").value;
//         const email_id=document.getElementById("email_id").value;
//         localStorage.setItem('full_name',full_name);
//         localStorage.setItem('mobile_no',mobile_no);
//         localStorage.setItem('email_id',email_id);
//         window.location.href="sellerPage.html";
//     }
// }
