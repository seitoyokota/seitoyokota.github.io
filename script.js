// Attach event listener to EVERY read-more button on the page
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Find the extra-text element inside the same card
    const card = button.closest('.card');
    const extraText = card.querySelector('.extra-text');
    
    extraText.classList.toggle('hidden');
    
    // Toggle button label
    button.textContent = extraText.classList.contains('hidden') 
      ? 'Read More' 
      : 'Read Less';
  });
});
