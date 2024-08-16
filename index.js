// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Part1
//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";
//Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");

//Part2
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--top-menu-bg");
//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Iterate over the menuLinks array
menuLinks.forEach(function (link) {
  // Create a new <a> element
  var anchorElement = document.createElement("a");

  // Set the href attribute using the href property of the link object
  anchorElement.href = link.href;

  // Set the text content of the <a> element to the value of the text property
  anchorElement.textContent = link.text;

  // Optionally, set other attributes (e.g., open in a new tab)
  anchorElement.target = "_blank"; // Opens the link in a new tab

  // Append the <a> element to the topMenuEl element
  topMenuEl.appendChild(anchorElement);

  // Add a separator (e.g., a pipe) between links for better readability
  topMenuEl.appendChild(document.createTextNode(" | "));
});

// Remove the trailing separator (optional)
if (topMenuEl.lastChild && topMenuEl.lastChild.nodeType === Node.TEXT_NODE) {
  topMenuEl.removeChild(topMenuEl.lastChild);
}
