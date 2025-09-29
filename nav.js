// List of years in your timeline
const years = [];
for (let y = 2013; y <= 2025; y++) {
  years.push(y);
}

// Detect which year this page is from <title>
const currentYear = document.title.match(/\d{4}/)?.[0];

// Build navigation bar
let navHTML = "";
years.forEach(year => {
  const filename = (year === years[0]) ? "index.html" : `${year}.html`;
  if (year == currentYear) {
    navHTML += `<strong>${year}</strong> | `;
  } else {
    navHTML += `<a href="${filename}">${year}</a> | `;
  }
});

// Remove last " | "
navHTML = navHTML.replace(/\| $/, "");

// Insert into <nav>
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  if (nav) nav.innerHTML = navHTML;

  // Add next/previous navigation at bottom
  const yearIndex = years.indexOf(parseInt(currentYear));
  if (yearIndex !== -1) {
    let footerNav = "<div class='footer-nav'>";
    if (yearIndex > 0) {
      const prevYear = years[yearIndex - 1];
      const prevFile = (prevYear === years[0]) ? "index.html" : `${prevYear}.html`;
      footerNav += `<a href="${prevFile}">← ${prevYear}</a>`;
    }
    if (yearIndex < years.length - 1) {
      const nextYear
