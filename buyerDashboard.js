document.addEventListener('DOMContentLoaded', function() {

    const userData = JSON.parse(localStorage.getItem('userData'));
    const shopData = JSON.parse(localStorage.getItem('shopData'));


    if (userData) {
        document.getElementById('profile-name').textContent = userData.fullName;
        document.getElementById('profile-phone').textContent = userData.mobileNo;
        document.getElementById('profile-email').textContent = userData.emailId;
    }


    document.querySelector('.logout').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('userData');
        localStorage.removeItem('shopData');
        window.location.href = 'login.html';
    });


    document.querySelector('.complete-btn').addEventListener('click', function() {
        if (!shopData) {
            window.location.href = 'buyerPage.html';
        } else {
            alert('Your registration is already complete!');
        }
    });


    if (shopData) {
        document.querySelector('.complete-btn').textContent = 'View Shop Details';
        document.querySelector('.complete-btn').addEventListener('click', function() {
            alert(`Shop Name: ${shopData.name}\nLocation: ${shopData.location}\nHours: ${shopData.openingTime} to ${shopData.closingTime}\nHolidays: ${shopData.holidays}`);
        });
    }
});