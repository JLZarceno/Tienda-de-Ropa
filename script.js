// Interacción para los botones de compra
document.querySelectorAll('.btn-comprar').forEach(button => {
  button.addEventListener('click', () => {
    alert('¡Producto añadido al carrito!');
  });
});

// Manejo del formulario de Login
document.getElementById('form-login').addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recargar la página
  alert('Inicio de sesión exitoso');
});

// Manejo del formulario de Registro
document.getElementById('form-registro').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Registro completado. ¡Bienvenido!');
});