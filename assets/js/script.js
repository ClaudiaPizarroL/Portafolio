//Variables para el tooltip
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

//configuacion para enviar mensaje a correo personal
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Recoge los datos del formulario
    let name = document.getElementById("exampleFormControlInput1").value;
    let message = document.getElementById("exampleFormControlTextarea1").value;

    // Envía el correo usando EmailJS
    emailjs
      .send("service_htk9gme", "template_voeu83z", {
        from_name: name,
        message: message,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("El mensaje se ha enviado correctamente.");
        },
        function (error) {
          console.log("FAILED...", error);
          alert(
            "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
          );
        }
      );
  });
