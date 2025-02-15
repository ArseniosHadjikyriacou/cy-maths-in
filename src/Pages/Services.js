import { lorem } from "../utils/dummyText";


export function Services() {
  return (
      <div className="services">
        <h1>Services</h1>
        <p>{lorem.generateSentences(15)}</p>
        <p>{lorem.generateSentences(15)}</p>
      </div>
  );
};

export function ServicesOne() {
  return (
      <div className="services">
        <h1>Service1</h1>
      </div>
  );
};

export function ServicesTwo() {
  return (
      <div className="services">
        <h1>Service2</h1>
      </div>
  );
};

export function ServicesThree() {
  return (
      <div className="services">
        <h1>Service3</h1>
      </div>
  );
};