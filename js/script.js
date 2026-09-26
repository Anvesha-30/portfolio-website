console.log("Welcome to my portfolio!");

const footerText = document.querySelector("footer p");
if (footerText) {
  footerText.textContent = `© ${new Date().getFullYear()} Anvesha. All Rights Reserved`;
}
