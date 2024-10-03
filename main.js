const inventory = [];

// Funcion para añadir un item
function addItem(number, name) {
  inventory.push({ number, name });
}

// Funcion para mostrar items
function displayItems() {
  console.log("Inventory Items:");
  inventory.forEach((item) => {
    console.log(`${item.number}: ${item.name}`);
  });
}

// usuario añade un item
function getUserInput() {
  while (true) {
    let numberInput = prompt(
      'Enter the item number (or type "stop" to finish):'
    );
    if (numberInput.toLowerCase() === "stop") {
      break; // Exit loop if user types "stop"
    }
    let nameInput = prompt("Enter the item name:");
    addItem(numberInput, nameInput);
  }
}

// filtrar item basado en que el numero de los items sean mayor a 10
const filterItems = () => {
  return inventory.filter((item) => item.number >= 10);
};

// ejecucion
getUserInput();
displayItems();

// Mostrar items filtrados
let filteredItems = filterItems();
console.log("Filtered Inventory Items (Items with number >=10):");
filteredItems.forEach((item) => {
  console.log(`${item.number}: ${item.name}`);
});
