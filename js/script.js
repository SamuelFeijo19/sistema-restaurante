function openModal(productName) {
    const modal = document.getElementById("order-modal");
    modal.style.display = "block";
    document.getElementById("nomeProduto").textContent = 'Você fará o pedido de '+productName;
    nomeProduto = productName;
  }
  
  function closeModal() {
    const modal = document.getElementById("order-modal");
    modal.style.display = "none";
  }
  
  function sendOrder() {
    const clientName = document.getElementById("client-name").value;
    const clientAddress = document.getElementById("client-address").value;
    const productName = nomeProduto;
  
    const message = `Olá! Me chamo ${clientName}. Quero fazer o pedido do produto ${productName}, meu endereço é ${clientAddress}.`;
  
    const whatsappLink = `https://api.whatsapp.com/send?phone=5568984012960&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  }
  