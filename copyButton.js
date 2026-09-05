document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyIcon = document.getElementById("copyIcon");
  const emailElement = document.getElementById("userEmail");

  if (!copyBtn || !emailElement) return;

  copyBtn.addEventListener("click", async () => {
    const emailText = emailElement.innerText.trim();

    try {
      await navigator.clipboard.writeText(emailText);

      copyIcon.className = "fa-solid fa-check text-success";
      setTimeout(() => {
        copyIcon.className = "fa-regular fa-copy";
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  });
});