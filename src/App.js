
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import Home from "./Pages/Home";
import {
  AboutUs,
  OurAim,
  OurVision,
} from "./Pages/AboutUs";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./Pages/Services";
import {
  Events,
  EventsOne,
  EventsTwo,
} from "./Pages/Events";
import Contact from "./Pages/ContactUs";
import Support from "./Pages/Support";
import Layout from './Layout'

export default function App() {

  return (
    <Router>
      <Routes>

        <Route element={<Layout />}>

          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
          <Route
            path="/about-us/aim"
            element={<OurAim />}
          />
          <Route
            path="/about-us/vision"
            element={<OurVision />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/services/services1"
            element={<ServicesOne />}
          />
          <Route
            path="/services/services2"
            element={<ServicesTwo />}
          />
          <Route
            path="/services/services3"
            element={<ServicesThree />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/events"
            element={<Events />}
          />
          <Route
            path="/events/events1"
            element={<EventsOne />}
          />
          <Route
            path="/events/events2"
            element={<EventsTwo />}
          />
          <Route
            path="/support"
            element={<Support />}
          />

        </Route>

      </Routes>
    </Router>
  );

}