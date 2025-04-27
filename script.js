const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
    form.reset();
  });
}
