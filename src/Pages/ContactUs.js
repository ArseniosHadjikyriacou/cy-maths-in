import { lorem } from "../utils/dummyText";


export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact us</h1>
      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>
    </div>
  );
};