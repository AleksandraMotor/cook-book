import { HashRouter as Router } from 'react-router-dom';
import Page from '../layouts/page/Page';
import Navigation from '../layouts/navigation/Navigation';
import Footer from '../layouts/footer/Footer';

import './App.scss';

export default function App() {
  return (
    <Router>
      <div className='app'>
        <nav className='app__nav'>
          <Navigation/>
        </nav>
        <main className='app__main'>
          <Page/>
        </main>
        <footer className='app__footer'>
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}
