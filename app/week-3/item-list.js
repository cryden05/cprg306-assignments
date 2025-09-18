import Item from "./item";

const item1 = {
  name: "Milk, 4L 🥛",
  quantity: 1,
  category: "dairy",
};

const item2 = {
  name: "Bread 🍞",
  quantity: 2,
  category: "bakery",
};

const item3 = {
  name: "Eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
};

const item4 = {
  name: "Bananas 🍌",
  quantity: 6,
  category: "produce",
};

const item5 = {
  name: "Broccoli 🥦",
  quantity: 3,
  category: "produce",
};

const item6 = {
  name: "Chicken breasts, 1kg 🍗",
  quantity: 1,
  category: "meat",
};

const item7 = {
  name: "Pasta sauce 🥫",
  quantity: 3,
  category: "canned goods",
};

const item8 = {
  name: "Spaghetti, 454g 🍝",
  quantity: 2,
  category: "dry goods",
};

const item9 = {
  name: "Toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
};

const item10 = {
  name: "Paper towels, 6 pack 📜",
  quantity: 1,
  category: "household",
};

const item11 = {
  name: "Dish soap 🍽️",
  quantity: 1,
  category: "household",
};

const item12 = {
  name: "Hand soap 🧼",
  quantity: 4,
  category: "household",
};

export default function ItemList(){
    return (
        <ul>
            <Item props={item1} />
            <Item props={item2} />
            <Item props={item3} />
            <Item props={item4} />
            <Item props={item5} />
            <Item props={item6} />
            <Item props={item7} />
            <Item props={item8} />
            <Item props={item9} />
            <Item props={item10} />
            <Item props={item11} />
            <Item props={item12} />
       </ul>    
    )
}