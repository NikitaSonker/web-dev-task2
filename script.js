document.addEventListener('DOMContentLoaded', function() {
  // Fade-in animation for features
  const features = document.querySelectorAll('.feature');
  features.forEach((feature, index) => {
    setTimeout(() => {
      feature.style.opacity = '1';
      feature.style.transform = 'translateY(0)';
    }, index * 300);
  });

  // Subscribe form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Code to execute after form submission (e.g., display confirmation message)
    const emailInput = form.querySelector('input[name="email"]');
    const email = emailInput.value;
    if (email.trim() !== '') {
      alert('Thank you for subscribing with email: ' + email);
    } else {
      alert('Please enter a valid email address.');
    }

    // Reset the form
    form.reset();
  });
});

