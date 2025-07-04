function isValidUSPhoneNumber(input) {
  // Remove leading/trailing whitespace
  const str = input.trim();
  // Regex for valid US phone numbers (with optional country code 1)
  // Accepts: 1 555-555-5555, 1 (555) 555-5555, 1(555)555-5555, 1 555 555 5555, 5555555555, 555-555-5555, (555)555-5555
  const validPatterns = [
    /^1\s\d{3}-\d{3}-\d{4}$/,
    /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1\s\d{3}\s\d{3}\s\d{4}$/,
    /^1\d{10}$/,
    /^1\s\d{10}$/,
    /^\d{10}$/,
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\(\d{3}\)\s\d{3}-\d{4}$/
  ];
  for (let pattern of validPatterns) {
    if (pattern.test(str)) return true;
  }
  return false;
}

document.getElementById('check-btn').addEventListener('click', function() {
  const input = document.getElementById('user-input').value;
  const resultsDiv = document.getElementById('results-div');
  if (!input.trim()) {
    alert('Please provide a phone number');
    return;
  }
  if (isValidUSPhoneNumber(input)) {
    resultsDiv.textContent = `Valid US number: ${input}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${input}`;
  }
});

document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('results-div').textContent = '';
  document.getElementById('user-input').value = '';
}); 