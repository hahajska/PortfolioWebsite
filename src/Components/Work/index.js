import React from "react";
import "./styles/_Work.scss";
import WorkItem from "./WorkItem";

export default function Work() {
  return (
    <section className="lg:container lg:mx-auto pt-30">
      <div className="grid grid-cols-1">
        <div className="nadpisWork  justify-center py-10  text-center  lg:flex lg:items-center lg:justify-center lg:py-12">
          <h1>My Projects</h1>
        </div>
      </div>
      <WorkItem />
      <WorkItem />
    </section>
  );
}
{
  /* <section>
<div className="nadpisWork col-span-5 text-center lg:text-right">
  <h1 className="lg:pr-14">My Projects</h1>
</div>
<section className="workSection lg:container lg:mx-auto grid lg:grid-cols-6 md:grid-rows-3">
  <div className="imageWork col-span-2 bg-red-300"></div>
  <div className="textWork col-span-4 bg-red-100"></div>
  <div className="imageWork col-span-4 bg-red-200"></div>
  <div className="textWork col-span-2 bg-red-400"></div>
  <div className="nadpisWork hidden lg:flex lg:col-span-1">x</div>
</section>
</section> */
}
