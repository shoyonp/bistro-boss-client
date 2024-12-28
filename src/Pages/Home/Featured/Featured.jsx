import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed  text-white pt-8 my-20">
      <div className=" bg-gradient-to-b from-black/40 to-black/70">
      <SectionTitle
        heading="FEATURED ITEM"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="flex justify-center  items-center pb-20 pt-12 px-36 ">
        <div className="">
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            repellat architecto obcaecati molestias aperiam pariatur eius odio!
            Aspernatur eaque odio similique ullam cum ipsa exercitationem fuga,
            omnis, voluptates, pariatur laboriosam? Ipsum deserunt excepturi
            inventore, ullam magni perferendis sit veritatis? Amet ad quasi
            tempora nobis quia praesentium veniam! Quasi, asperiores ex.
          </p>
          <button className="btn text-white btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
