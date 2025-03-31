/**
 * Scrolls smoothly to a section with the specified ID
 * @param id The ID of the section to scroll to (without the '#')
 */
export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  
  if (element) {
    // We add a small offset to account for fixed header
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}; 