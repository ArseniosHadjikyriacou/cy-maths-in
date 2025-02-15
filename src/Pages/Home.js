import { lorem } from "../utils/dummyText";


export default function Home() {
  return (
    <div className="home">
      <h1>Homepage</h1>
      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>
    </div>
  );
};