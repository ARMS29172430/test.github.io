import './App.scss';
import Management from './screens/management/management';
import Navbar from './layouts/navbar/navbar.component';
import Footer from './layouts/footer/footer.component';
import ContactUs from './screens/contact-us/contact-us';

function App() {
  return (
    <>
      <Navbar />
      <Management />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
