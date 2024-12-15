export default function viewportClassTrigger(
  element,          // Element to observe
  className,        // Takes the class to be added as a parameter
  options = {
    root: null,      // Observing within the viewport
    threshold: 0.05, // Triggers when the element is 5% visible
  }
) {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  }, options);

  // Observe the element
  observer.observe(element);

  // Return cleanup function 
  return () => observer.disconnect();
}
