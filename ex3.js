const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

  const input = document.querySelector('#country');
  const suggestions = document.querySelector('#suggestions');

  input.addEventListener('input', () => {
    const value = input.value.trim().toLowerCase();
    const filtered = countryList.filter(country => country.toLowerCase().startsWith(value) && country.charAt(0) === 'A');
    const html = filtered.map(country => `<div class="suggestion">${country}</div>`).join('');
    suggestions.innerHTML = html;
  });

  suggestions.addEventListener('click', event => {
    if (event.target.classList.contains('suggestion')) {
      input.value = event.target.innerText;
      suggestions.innerHTML = '';
    }
  });

  document.addEventListener('click', event => {
    if (!event.target.matches('#country, #suggestions *')) {
      suggestions.innerHTML = '';
    }
  });