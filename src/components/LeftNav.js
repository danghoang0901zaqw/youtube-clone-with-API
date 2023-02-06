import React, { useContext } from "react";
import LeftNavMenItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectCategories, setSelectCategories } =
    useContext(Context);
  const handleClick = (type, name) => {
    console.log(type,name)
    console.log(typeof type,typeof name)
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div className="  py-4 bg-[#0f0f0f] absolute md:relative  translate-x-[-240px] md:translate-x-0 transition-all">
      <div className="flex flex-col px-5">
        {categories?.map((category, idx) => (
          <React.Fragment key={idx}>
            <LeftNavMenItem
              className={`${
                selectCategories === category.name ? "bg-white/[0.15]" : ""
              }`}
              text={category.type === "home" ? "Home" : category.name}
              icon={category.icon}
              action={() => handleClick(category.type, category.name)}
            />
            {category.divider && <hr className="my-5 border-white/[0.2]" />}
          </React.Fragment>
        ))}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px] ">
          Clone: Trần Đăng Hoàng{" "}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
