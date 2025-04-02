// Development Mode
import { BrowserRouter as Router } from 'react-router-dom';

//Production Mode
// import { HashRouter as Router } from 'react-router-dom';
import Page from '../layouts/page/Page';
import Navigation from '../layouts/navigation/Navigation';
import Footer from '../layouts/footer/Footer';

import './App.scss';

function App() {
  return (
    <Router>
      <div className='app'>
        <header className='app__nav'>
          <Navigation/>
        </header>
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

export default App;
