
import "./App.css";
import ScrollToTop from "./utils/scrollToTop";
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
      <ScrollToTop />
      <Routes>

        <Route element={<Layout />}>

          <Route
            path="/cy-maths-in/"
            element={<Home />}
          />
          <Route
            path="/cy-maths-in/about-us"
            element={<AboutUs />}
          />
          <Route
            path="/cy-maths-in/about-us/aim"
            element={<OurAim />}
          />
          <Route
            path="/cy-maths-in/about-us/vision"
            element={<OurVision />}
          />
          <Route
            path="/cy-maths-in/services"
            element={<Services />}
          />
          <Route
            path="/cy-maths-in/services/services1"
            element={<ServicesOne />}
          />
          <Route
            path="/cy-maths-in/services/services2"
            element={<ServicesTwo />}
          />
          <Route
            path="/cy-maths-in/services/services3"
            element={<ServicesThree />}
          />
          <Route
            path="/cy-maths-in/contact"
            element={<Contact />}
          />
          <Route
            path="/cy-maths-in/events"
            element={<Events />}
          />
          <Route
            path="/cy-maths-in/events/events1"
            element={<EventsOne />}
          />
          <Route
            path="/cy-maths-in/events/events2"
            element={<EventsTwo />}
          />
          <Route
            path="/cy-maths-in/support"
            element={<Support />}
          />

        </Route>

      </Routes>
    </Router>
  );

}