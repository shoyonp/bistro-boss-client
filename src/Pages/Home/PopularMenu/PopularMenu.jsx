import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularitems = data.filter((item) => item.category === "popular");
        setMenu(popularitems);
      });
  }, []);
  return (
    <>
      <section className="mb-12">
        <SectionTitle
          heading="From our menu"
          subHeading="Check it out"
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </section>
      <button className="btn items-center btn-outline border-0 border-b-4">
        View Full Menu
      </button>
    </>
  );
};

export default PopularMenu;
