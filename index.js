
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});

document.querySelector('.pre-footer button').addEventListener('click', trackOrder);
document.querySelector('.pre-footer input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') trackOrder();
});

function trackOrder() {
  const orderId = document.querySelector('.pre-footer input').value.trim();
  const button = document.querySelector('.pre-footer button');
  
  if (!orderId) {
      showStatusMessage('Please enter an order ID', 'error');
      return;
  }
  
  button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Searching...';
  button.disabled = true;
  
 
  setTimeout(() => {
      checkOrderStatus(orderId);
      button.innerHTML = 'Search';
      button.disabled = false;
  }, 1500);
}

function checkOrderStatus(orderId) {

  const mockOrders = {
      'GHN1001': { 
          status: 'In Transit', 
          farmer: 'Organic Valley Farms', 
          product: 'Fresh Apples', 
          eta: '2025-05-15',
          lastUpdate: '2025-05-14 09:30'
      },
      'GHN1002': { 
          status: 'Delivered', 
          farmer: 'Green Fields Co-op', 
          product: 'Organic Tomatoes', 
          deliveryDate: '2025-05-10',
          receivedBy: 'Store Manager'
      },
      'GHN1003': { 
          status: 'Processing', 
          farmer: 'Sunny Acres', 
          product: 'Mixed Vegetables', 
          eta: '2025-05-18',
          processingStage: 'Quality Check'
      },
      'SUBHAM FUCK':{
        status:'He is a MC'
      }
  };
  
  const order = mockOrders[orderId];
  
  if (order) {
      showOrderStatus(orderId, order);
  } else {
      showStatusMessage('Order ID not found. Please check and try again.', 'error');
  }
}

function showOrderStatus(orderId, order) {
  let statusHtml = `
      <div class="order-status">
          <div class="status-header">
              <h3>Order: ${orderId}</h3>
              <span class="close-status">&times;</span>
          </div>
          <div class="status-details">
              <p><strong>Status:</strong> <span class="status-${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span></p>
              <p><strong>Farmer:</strong> ${order.farmer}</p>
              <p><strong>Product:</strong> ${order.product}</p>
  `;
  
  if (order.status === 'In Transit') {
      statusHtml += `
          <p><strong>Estimated Delivery:</strong> ${order.eta}</p>
          <p><strong>Last Update:</strong> ${order.lastUpdate}</p>
          <div class="progress-bar">
              <div class="progress" style="width: 70%"></div>
          </div>
      `;
  } else if (order.status === 'Processing') {
      statusHtml += `
          <p><strong>Current Stage:</strong> ${order.processingStage}</p>
          <p><strong>ETA:</strong> ${order.eta}</p>
      `;
  } else if (order.status === 'Delivered') {
      statusHtml += `
          <p><strong>Delivered on:</strong> ${order.deliveryDate}</p>
          <p><strong>Received by:</strong> ${order.receivedBy}</p>
      `;
  }
  
  statusHtml += `</div></div>`;
  

  const existingStatus = document.querySelector('.order-status');
  if (existingStatus) existingStatus.remove();
  

  const preFooter = document.querySelector('.pre-footer');
  preFooter.insertAdjacentHTML('afterend', statusHtml);
  

  const statusTimer = setTimeout(() => {
      const currentStatus = document.querySelector('.order-status');
      if (currentStatus) currentStatus.remove();
  }, 3000);

  document.querySelector('.close-status')?.addEventListener('click', () => {
      clearTimeout(statusTimer);
      document.querySelector('.order-status')?.remove();
  });
}

function showStatusMessage(message, type) {
  const existingMessage = document.querySelector('.status-message');
  if (existingMessage) existingMessage.remove();
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `status-message ${type}`;
  messageDiv.textContent = message;
  
  document.querySelector('.pre-footer').appendChild(messageDiv);
  
  setTimeout(() => {
      messageDiv.remove()
  }, 2000);
}
