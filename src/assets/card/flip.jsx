import { useState } from "react";

const styles = `
  .flip-card { perspective: 1000px; width: 400px; height: 400px; cursor: pointer; }
  .flip-card-inner {
    width: 100%; height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }
  .flip-card-inner.flipped { transform: rotateY(180deg); }
  .flip-card-front, .flip-card-back {
    position: absolute; width: 100%; height: 100%;
    backface-visibility: hidden;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
    font-size: 24px; color: #fff;
    border-radius: 16px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  .flip-card-front {
    border: 1px solid;
    transform: rotateY(0deg);
  }
  .flip-card-back {
    border: 1px solid;
    transform: rotateY(180deg);
  }
  .flip-hint {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

function Card({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <h1>{front}</h1>
          <span className="flip-hint">See More</span>
        </div>
        <div className="flip-card-back">
          <p className="text-sm justify-items-center text-center py-2 px-2 font-sans font-light">{back}</p>
          <span className="flip-hint">Back</span>
        </div>
      </div>
    </div>
  );
}

export default function FlipCard() {
  return (
    <>
      <style>{styles}</style>
      <div className="flex flex-row gap-6 mt-14">
        <Card front="Curated Premium Selection" 
        back="Every sneaker is carefully chosen, focusing on quality, style,
         and relevance so you always get the best drops and classics." />
        <Card front="Streetwear Meets Performance" 
        back="STRYDE blends fashion and function, giving you shoes 
        that look good on the street and perform when it matters." />
        <Card front="Built for Expression"
        back="It’s not just footwear—it’s identity. 
        STRYDE helps you express your individuality through bold,
         modern sneaker culture." />
      </div>
    </>
  );
}