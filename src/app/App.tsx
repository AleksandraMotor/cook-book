import { HashRouter as Router } from 'react-router-dom';
import Page from '../layouts/page/Page';

import './App.scss';

function App() {
  return (
    <Router>
      <div className='app'>
        <nav className='app__nav'>menu</nav>
        <main className='app__main'>
          <Page/>
        </main>
        <footer className='app__footer'>footer</footer>
      </div>
    </Router>
  );
}

export default App;
