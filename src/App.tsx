import React from "react";
import { Categories } from "./Categories";
import { Menu } from "./Menu";
import item from "./data";
import { MenuType } from "./Types/types";
let diceEntries: any = new Set(
  item.map(function (itemCat: MenuType) {
    return itemCat.category;
  })
);
const allCategories: string[] = ["all", ...diceEntries];
function App() {
  const [menuItem, setmenuItem] = React.useState(item);
  const [categories, setCategories] = React.useState(allCategories);
  const filterItem = (category: string) => {
    if (category === "all") {
      setmenuItem(item);
      return;
    }
    const newItems = item.filter((item) => item.category === category);
    setmenuItem(newItems);
    return newItems;
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItem={filterItem} categories={categories} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
