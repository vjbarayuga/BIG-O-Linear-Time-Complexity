const inventory = ["pen", "notebook", "stapler", "eraser", "marker", "glue"];

const searchForItem = (item) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === item) {
      return `Found ${item}`;
    }
  }
  return `${item} not found`;
};



console.log(searchForItem("stapler"));

module.exports = { searchForItem };