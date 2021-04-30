import React from "react";
import "./styles/_Footer.scss";

export default function Footer() {
  return (
    <section className="sectionFooter lg:container lg:mx-auto grid lg:grid-cols-2 grid-cols-1 pt-36">
      <div className="footerInfo flex items-center justify-center">
        <h1>This page is under construction!</h1>
      </div>

      <div className="leftLinksDiv flex justify-center order-first lg:order-2">
        <div className="fastLinks py-12 text-center">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contacts</li>
            <li>x</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
