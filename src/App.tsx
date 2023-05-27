import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './screens/contact-us/contact-us';
import Footer from './layouts/footer/footer.component';
import Management from './screens/management/management';
import Navbar from './layouts/navbar/navbar.component';

// create a routes array to manage all routes
const routes: { path: string; element: JSX.Element }[] = [
  { path: '', element: <div>Home!</div> },
  { path: 'about-us', element: <div>About us!</div> },
  { path: 'contact-us', element: <ContactUs /> },
  { path: 'management', element: <Management /> },
];

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((routeObj) => (
            <Route key={routeObj.path} {...routeObj} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
