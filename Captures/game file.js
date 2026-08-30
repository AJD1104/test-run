 
    // Counter JS - based on your structure
    let count = 0;
    const numberEl = document.getElementById('Number');
    const hiddenInput = document.getElementById('counter-value');

    function updateCount() {
      numberEl.textContent = count;
      hiddenInput.value = count; // update hidden input for EmailJS
    }

    function increase() {
      count++;
      updateCount();
    }

    function decrease() {
      count--;
      updateCount();
    }

    // Initialize count on load
    updateCount();
  
