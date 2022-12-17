import { useState } from "react";
import { Project } from "../projects";
import "./item.scss";
import { animated, useSpring } from "@react-spring/web";

export default function Item(props: Project) {
  const { title, link, linkTitle, description } = { ...props };
  const [hover, setHover] = useState(false);

  const [boxSpring, boxApi] = useSpring(() => ({
    from: { y: 0 },
  }));

  const [textSpring, textApi] = useSpring(() => ({
    from: { opacity: 1 },
  }));

  const handleMouseOver = () => {
    boxApi.start({
      from: { y: 0 },
      to: { y: -10 },
    });
    textApi({
      onResolve: () => setHover(true),
    });
    textApi.start({
      from: { opacity: 1 },
      to: { opacity: 0 },
      reverse: true,
    });
  };

  const handleMouseLeave = () => {
    boxApi.start({
      from: { y: -10 },
      to: { y: 0 },
    });
    textApi({
      onResolve: () => setHover(false),
    });
    textApi.start({
      from: { opacity: 1 },
      to: { opacity: 0 },
      reverse: true,
    });
  };
  return (
    <animated.a
      href={link}
      title={linkTitle}
      style={boxSpring}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="item"
    >
      <animated.div style={textSpring}>
        {!hover ? <h3>{title}</h3> : <p>{description}</p>}
      </animated.div>
    </animated.a>
  );
}
