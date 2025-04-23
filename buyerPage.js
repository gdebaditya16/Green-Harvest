document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.querySelector('.container');
    const submitButton = document.querySelector('.container button');
    
    submitButton.type = 'submit';
    submitButton.innerHTML = 'Complete Registration';
    
    submitButton.querySelector('a')?.remove();
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const shopName = document.getElementById('shop_name').value.trim();
        const location = document.getElementById('location').value.trim();
        const openingTime = document.querySelector('input[placeholder="9:00"]').value;
        const closingTime = document.querySelector('input[placeholder="22:00"]').value;
        const holidays = document.querySelector('input[placeholder="Enter holidays(e.g. Sundays)"]').value.trim();
        
        const errors = [];
        
        if (!shopName) {
            errors.push("Shop Name");
            document.getElementById('shop_name').style.borderColor = "red";
        } else {
            document.getElementById('shop_name').style.borderColor = "";
        }
        
        if (!location) {
            errors.push("Shop Location");
            document.getElementById('location').style.borderColor = "red";
        } else {
            document.getElementById('location').style.borderColor = "";
        }
        
        if (!openingTime) {
            errors.push("Opening Time");
            document.querySelector('input[placeholder="9:00"]').style.borderColor = "red";
        } else {
            document.querySelector('input[placeholder="9:00"]').style.borderColor = "";
        }
        
        if (!closingTime) {
            errors.push("Closing Time");
            document.querySelector('input[placeholder="22:00"]').style.borderColor = "red";
        } else {
            document.querySelector('input[placeholder="22:00"]').style.borderColor = "";
        }
        
        if (!holidays) {
            errors.push("Weekly Holidays");
            document.querySelector('input[placeholder="Enter holidays(e.g. Sundays)"]').style.borderColor = "red";
        } else {
            document.querySelector('input[placeholder="Enter holidays(e.g. Sundays)"]').style.borderColor = "";
        }
        
        if (openingTime && closingTime) {
            const openTime = new Date(`2000-01-01T${openingTime}`);
            const closeTime = new Date(`2000-01-01T${closingTime}`);
            
            if (openTime >= closeTime) {
                errors.push("Closing time must be after opening time");
                document.querySelector('input[placeholder="9:00"]').style.borderColor = "red";
                document.querySelector('input[placeholder="22:00"]').style.borderColor = "red";
            }
        }
        
 
        if (errors.length > 0) {
            let errorMessage = "Please fill in the following required fields:\n";

            errors.forEach((error, index) => {
                if (index === errors.length - 1 && errors.length > 1) {
                    errorMessage += "and " + error;
                } else {
                    errorMessage += error;
                    if (index < errors.length - 2) {
                        errorMessage += ", ";
                    } else if (index < errors.length - 1) {
                        errorMessage += " ";
                    }
                }
            });
            
            alert(errorMessage);
            return;
        }
        
        const shopData = {
            name: shopName,
            location: location,
            openingTime: openingTime,
            closingTime: closingTime,
            holidays: holidays
        };
        
        localStorage.setItem('shopData', JSON.stringify(shopData));
        
        alert('Shop registration successful!\n\n' +
              `Shop Name: ${shopName}\n` +
              `Location: ${location}\n` +
              `Business Hours: ${openingTime} to ${closingTime}\n` +
              `Weekly Holidays: ${holidays}`);
        
        window.location.href = 'buyerDashboard.html';
    });
    
    const inputs = document.querySelectorAll('.container input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = "";
        });
    });
});
