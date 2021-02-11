import './App.css';
import MiddelPage from './components/MiddelPage';
import Navbar from './components/Navbar';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <MiddelPage 
        img='images/illustration-1.svg'
        header='All your files in one secure location, accessible anywhere.'
        fp='Fylo stores your most important files in one secure location. Access them wherever you need, shere and collaborate with friends, family, and co-workers.'
        type='files'
        />
        <MiddelPage 
        img='images/illustration-2.svg'
        header='Stay productive, wherever you are'
        fp='Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.'
        sp='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!'
        tp='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
        type=''
        auth='images/avatar-testimonial.jpg'
        authName = 'Kyle Burton'
        authJob = 'Founder & CEO, huddle'
        />
        <EarlyAccess />
        <Footer />
      </main>
    </div>
  );
}

export default App;
