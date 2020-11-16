import React from "react";
import { MenuType } from "./Types/types";
interface TypeProps {
  items: MenuType[];
}

export const Menu = ({ items }: TypeProps) => {
  return (
    <div className="section-center">
      {items.map((item: MenuType) => {
        const { id, title, category, price, img, desc } = item;

        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
