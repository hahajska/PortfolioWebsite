import React, { useRef, useEffect } from "react";
import "./App.scss";
import Mountains from "./images/moutains.jpg";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2, gsap } from "gsap";

function App() {
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
  });

  return (
    <section className="main">
      <div ref={(el) => (container = el)} className="container">
        <>
          <div className="img-container">
            <img ref={(el) => (image = el)} src={Mountains} alt="" />
          </div>
        </>
      </div>
      <div className="space"></div>
    </section>
  );
}

export default App;
