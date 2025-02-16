import { lorem } from "../utils/dummyText";


export default function Home() {
  return (
    <div className="home">
      <h1>Homepage</h1>
      <p>CY-MATHS-IN is a newly established national network of academics whose research lies in the broad field of mathematical sciences and are interested in collaborative projects with industry.</p>
      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>
    </div>
  );
};