import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Management from './screens/management/management';
import Navbar from './layouts/navbar/navbar.component';
import Footer from './layouts/footer/footer.component';
import ContactUs from './screens/contact-us/contact-us';
import './App.scss';

// create a routes array to manage all routes
const routes: { path: string; element: JSX.Element }[] = [
  { path: '', element: <div>Home!</div> },
  { path: 'about-us', element: <div>About us!</div> },
  { path: 'contact-us', element: <ContactUs /> },
  { path: 'management', element: <Management /> },
];

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((routeObj) => (
          <Route {...routeObj} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
