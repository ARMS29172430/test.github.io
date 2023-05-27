import './App.scss';
import Management from './screens/management/management.component';
import Navbar from './layouts/navbar/navbar.component';
import Footer from './layouts/footer/footer.component';

function App() {
  return (
    <>
      <Navbar />
      <Management />
      <Footer />
    </>
  );
}

export default App;
