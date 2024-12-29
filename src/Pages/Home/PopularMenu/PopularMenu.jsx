import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <>
      <section className="mb-12">
        <SectionTitle
          heading="From our menu"
          subHeading="Check it out"
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {popular.map((item) => (
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
