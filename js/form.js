export default function initForm() {
  const form = document.querySelector("form");
  function formSubmitted(response) {
    if (response.ok) {
      form.innerHTML =
        "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Message sent</span>, Soon we will contact you. We usually respond within 24 hours.</p>";
    } else {
      form.innerHTML =
        "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Error in sending</span>, you can send it directly to our email at: contato@bikcraft.net</p>";
    }
}
function submitForm(event) {
  event.preventDefault();
  const btn = document.querySelector("form button");
  btn.disabled = true;
  btn.innerText = "Sending...";
  const date = new FormData(form);
  fetch("./send.php", {
    method: "POST",
    body: date,
  }).then(formSubmitted);
  btn.addEventListener("submit", submitForm);
}
}