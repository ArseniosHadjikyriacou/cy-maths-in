import { lorem } from "../utils/dummyText";


export function AboutUs() {
  return (
    <div className="about-us">
      <h1>About us</h1>
      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>
    </div>
  );
};

export function OurAim() {
  return (
    <div className="about-us">
      <h1>Aim</h1>
    </div>
  );
};

export function OurVision() {
  return (
    <div className="about-us">
      <h1>Vision</h1>
    </div>
  );
};