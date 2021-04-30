import React, { useRef, useEffect } from "react";
import Mountains from "../../images/moutains.jpg";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2, gsap } from "gsap";
import "./styles/_Main.scss";

export default function Main() {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4,
    });
  }, []);

  return (
    <section className="mainSection lg:container lg:mx-auto grid lg:grid-cols-6 md:grid-rows-1">
      <div className="leftImage lg:col-span-4 sm:order-first order-last">
        <div ref={(el) => (container = el)} className="container">
          <>
            <div className="img-container text-center">
              <img
                ref={(el) => (image = el)}
                src={Mountains}
                alt="img"
                loading="lazy"
              />
            </div>
          </>
        </div>
      </div>
      <div className="rightText lg:col-span-2 flex justify-start flex-column items-center lg:px-5 lg:py-2 py-40 px-5 ">
        <div className="textBox px-2">
          <h1>Name Surname</h1>
          <span className="px-1">FE Developer</span>
          <p className="px-1 pr-5 pt-5 text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            doloremque dicta doloribus sunt iusto modi quisquam aut optio! Eum,
            ratione!
          </p>
        </div>
      </div>
    </section>
  );
}
