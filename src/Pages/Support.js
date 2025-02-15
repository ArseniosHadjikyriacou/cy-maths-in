import { lorem } from "../utils/dummyText";


export default function Support() {
  return (
    <div className="support">
      <h1>Support us</h1>
      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>
    </div>
  );
};