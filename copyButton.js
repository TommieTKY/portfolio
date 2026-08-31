document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyIcon = document.getElementById("copyIcon");
  const emailText = document.getElementById("userEmail").innerText;

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText).then(() => {
      copyIcon.className = "fa-solid fa-check text-success";
      setTimeout(() => {
        copyIcon.className = "fa-regular fa-copy";
      }, 2000);
    });
  });
});