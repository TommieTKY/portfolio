document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyIcon = document.getElementById("copyIcon");
  const emailElement = document.getElementById("userEmail");

  if (!copyBtn || !emailElement) return;

  copyBtn.addEventListener("click", () => {
    const emailText = emailElement.innerText.trim();

    // Helper function to handle icon success animation
    const showSuccess = () => {
      copyIcon.className = "fa-solid fa-check text-success";
      setTimeout(() => {
        copyIcon.className = "fa-regular fa-copy";
      }, 2000);
    };

    // Helper fallback for non-HTTPS / file:// protocols
    const fallbackCopy = (text) => {
      const tempInput = document.createElement("textarea");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand("copy");
        showSuccess();
      } catch (err) {
        console.error("Fallback copy failed:", err);
      }
      document.body.removeChild(tempInput);
    };

    // Use Clipboard API if available, otherwise use fallback
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(emailText)
        .then(() => showSuccess())
        .catch(() => fallbackCopy(emailText));
    } else {
      fallbackCopy(emailText);
    }
  });
});