import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./cardIMG.css"
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const CardIMG = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  const style = {

    width: "45ch",
    height: "45ch",
    background: "grey",
    borderRadius: "5px",
    // backgroundImage: "url(../../media/yo.jpg)",

    backgroundSize: "cover",
    backgroundPosition: "center center",
    boxShadow: "0px 10px 30px -5px rgba(0,0,0, 0.3)",
    transition: "box-shadow 0.5s",
    willChange: "transform",
    border: "0px solid white",
    transform: props.xys.interpolate(trans)
  }
  return (
    <animated.div
      className="cardImg"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ ...style }}
    />
  )
};

export default CardIMG;
