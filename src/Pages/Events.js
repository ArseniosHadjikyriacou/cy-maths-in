import { lorem } from "../utils/dummyText";


export function Events() {
  return (
    <div className="events">
      <h1>Events</h1>
      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>
    </div>
  );
};

export function EventsOne() {
  return (
    <div className="events">
      <h1>Event1</h1>
    </div>
  );
};

export function EventsTwo() {
  return (
    <div className="events">
      <h1>Event2</h1>
    </div>
  );
};