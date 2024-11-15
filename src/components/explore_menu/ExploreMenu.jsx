import React , {useContext} from "react";


import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {

 

  return (
    <div className="explore_menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore_menu_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore
        quod doloremque amet voluptatem ipsum!
      </p>
      <div className="explore_menu_list">
        {menu_list.map((item, index) => {
          return (
            <>
              <div
                key={index}
                onClick={() =>
                  setCategory(prev =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                className="explore_item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            </>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
