function toggleNav() {
    // Retrieve the DOM element with the ID 'navLinks'
    // `document.getElementById` is a method that returns a reference to the element by its ID
    const navLinks = document.getElementById("navLinks");
  
    // `navLinks.classList` returns the DOMTokenList of the class names of the element
    // `classList.toggle` adds the specified class ('active') if it is not present,
    // or removes it if it is present
    // This toggling is used to show or hide the navigation menu
    navLinks.classList.toggle("active");
  }