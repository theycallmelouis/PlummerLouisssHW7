const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];

  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; 
    }
  };

  const houseDropdown = document.querySelector('#house');
  const charactersList = document.querySelector('#characters');

  houses.forEach(house => {
    const option = document.createElement('option');
    option.value = house.code;
    option.text = house.name;
    houseDropdown.appendChild(option);
  });

  houseDropdown.addEventListener('change', event => {
    const selectedHouse = event.target.value;
    const characters = getCharacters(selectedHouse);
    charactersList.innerHTML = characters.map(character => `<li>${character}</li>`).join('');
  });