const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyMessage = document.getElementById("copyMessage");

copyEmailBtn.addEventListener("click", function () {
  navigator.clipboard.writeText("smsaif404@gmail.com");
  copyMessage.textContent = "Email copied!";
});
