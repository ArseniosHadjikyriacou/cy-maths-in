import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}