// Inicializa EmailJS
(function() {
  emailjs.init("SjD615UE1P6MjkUAU");
})();

// Envía el formulario
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('default_service', 'template_amips_salud', this)
    .then(() => {
      alert('¡Gracias! Tu mensaje fue enviado con éxito.');
      document.getElementById('contact-form').reset();
    }, (error) => {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Intenta más tarde.');
    });
});