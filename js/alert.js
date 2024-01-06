// alert.js

  function showSuccessAlert(message) {
    showAlert(message, 'success');
  }

  function showErrorAlert(message) {
    showAlert(message, 'error');
  }
  function showInfoAlert(message) {
    showAlert(message, 'info');
  }
  
  function showAlert(message, type) {
    const alertContainer = document.createElement('div');
    alertContainer.id = 'alert-container';
    document.body.appendChild(alertContainer);
    
    alertContainer.textContent = message;
    alertContainer.classList.add(type);
    alertContainer.style.opacity = 1; // Set opasitas menjadi 1
    alertContainer.style.display = 'block';

    setTimeout(() => {
      alertContainer.style.opacity = 0; // Set opasitas menjadi 0 saat menghilangkan
      setTimeout(() => {
        alertContainer.style.display = 'none';
        alertContainer.classList.remove(type);
      }, 500); // Sesuaikan dengan waktu transisi CSS
    }, 3000);
  }
  
  
  
// showInfoAlert("tunggu sebentar....");
// showSuccessAlert("Sukses, data telah disimpan");
// showErrorAlert("Terjadi kesalahan, data tidak dapat disimpan");