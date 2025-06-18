import { IoFastFoodSharp, IoPizza } from "react-icons/io5";
import { RiDrinks2Fill } from "react-icons/ri";
import { LuSalad } from "react-icons/lu";
import { GiTomato, GiWrappedSweet } from "react-icons/gi";

const Header = () => {
  return (
    <div className="header-container">
      <div className="leftside-header">
        <div className="parent highlighted">
          <IoFastFoodSharp />
          <div>All</div>
        </div>
        <div className="parent">
          <RiDrinks2Fill />
          <div>Drinks</div>
        </div>
        <div className="parent">
          <IoPizza />
          <div>Pizza</div>
        </div>
        <div className="parent">
          <LuSalad />
          <div>Salad</div>
        </div>
        <div className="parent">
          <GiTomato />
          <div>Spicy</div>
        </div>
        <div className="parent">
          <GiWrappedSweet />
          <div>Sweets</div>
        </div>
      </div>
      <div className="rightside-header">
        <button className="view-button">View All</button>
      </div>
    </div>
  );
};

export default Header;
