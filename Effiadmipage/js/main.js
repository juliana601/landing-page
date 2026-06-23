// js/main.js
// Código sencillo, claro y funcional.
// Incluye: menú móvil, manejo formularios (validaciones simples) y comportamiento "volver" si aplica.

document.addEventListener('DOMContentLoaded', function () {

  /* MENU MOVIL */
  var btnToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (btnToggle && nav) {
    btnToggle.addEventListener('click', function () {
      if (nav.style.display === 'flex') {
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '68px';
        nav.style.right = '18px';
        nav.style.background = '#fff';
        nav.style.padding = '12px';
        nav.style.borderRadius = '12px';
        nav.style.boxShadow = '0 12px 36px rgba(16,24,40,0.12)';
      }
    });
  }

  /* SMOOTH SCROLL para enlaces que usen hash (si llegas a incluir alguno) */
  var links = document.querySelectorAll('a[href^="#"]');
  Array.prototype.forEach.call(links, function (lnk) {
    lnk.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        var id = href.slice(1);
        var el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* VALIDACIONES BASICAS: LOGIN */
  var loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('email');
      var pwd = document.getElementById('password');

      if (!email || !pwd || email.value.trim() === '' || pwd.value.length < 8) {
        alert('Por favor ingresa un correo válido y una contraseña de al menos 8 caracteres.');
        return;
      }
      // demo: en producción aqui se hace fetch a API
      alert('Inicio de sesión (demo).');
      loginForm.reset();
    });
  }

  /* VALIDACIONES BASICAS: REGISTRO */
  var registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nombre = document.getElementById('nombre');
      var correo = document.getElementById('correo');
      var clave = document.getElementById('clave');

      if (!nombre || !correo || !clave || nombre.value.trim() === '' || correo.value.trim() === '' || clave.value.length < 8) {
        alert('Completa todos los campos correctamente. Contraseña mínima 8 caracteres.');
        return;
      }

      alert('Cuenta creada correctamente (demo). Ahora puedes iniciar sesión.');
      registerForm.reset();
      // opcional: location.href = 'login.html';
    });
  }

  /* CONTACTO */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nombre = document.getElementById('nombreContacto');
      var email = document.getElementById('emailContacto');
      var msg = document.getElementById('mensajeContacto');

      if (!nombre || !email || !msg || nombre.value.trim() === '' || email.value.trim() === '' || msg.value.trim() === '') {
        alert('Por favor completa todos los campos del formulario de contacto.');
        return;
      }

      alert('Mensaje enviado. Gracias, nos pondremos en contacto contigo pronto (demo).');
      contactForm.reset();
    });
  }

});


