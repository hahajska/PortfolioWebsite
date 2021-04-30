import React from "react";
import "./styles/_Work.scss";
import WorkSmallImage from "../../images/moutains.jpg";
import WorkBigImage from "../../images/BigImage.jpg";

export default function WorkItem() {
  return (
    <section className="workSection grid lg:grid-cols-6 md:grid-rows-2 gap-4">
      <div className="imageWork col-span-3 order-2 lg:order-1 p-5 flex xl:flex xl:justify-end xl:items-end  justify-center items-center">
        <img
          src={WorkSmallImage}
          loading="lazy"
          className="hidden xl:flex smallImage"
          alt="img"
        />
        <img src={WorkSmallImage} className="bigImage" alt="img" />
      </div>
      <div className="textWork col-span-3 px-8 xl:px-16 flex-col flex xl:justify-center xl:items-start items-center justify-center order-1 lg:order-2 ">
        <h1>Portfolio</h1>
        <span>22/04/2021</span>
        <p className="lg:pr-20 pt-4 text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero
          eveniet in quam rerum voluptatem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis libero nemo dolorem natus a
          sequi debitis nesciunt expedita ipsa iste.
        </p>
      </div>
      <div className="textWork col-span-3 px-8 flex xl:px-16 flex-col xl:justify-center xl:items-end justify-center items-center">
        <h1>Portfolio</h1>
        <span>22/04/2021</span>
        <p className="lg:pl-20 pt-4 text-center lg:text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero
          eveniet in quam rerum voluptatem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis libero nemo dolorem natus a
          sequi debitis nesciunt expedita ipsa iste.
        </p>
      </div>

      <div className="imageWork col-span-3 p-5 flex justify-center items-center xl:flex xl:justify-start xl:items-end">
        <img
          src={WorkBigImage}
          loading="lazy"
          className="hidden xl:flex smallImage2"
          alt="img"
        />
        <img src={WorkBigImage} className="bigImage" alt="img" />
      </div>
    </section>
  );
}
