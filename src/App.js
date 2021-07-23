import NavBar from './sections/navbar'
import Footer from './sections/footer'

import Team from './sections/team'
import Presentation from './sections/presentation';
import Contact from './sections/contact';
import Services from './sections/services';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './App.css';

function App() {
  return (
    <div className='app-div'>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <div>
          <div className="presentation">
            <div className='container'> <Presentation ></Presentation> </div>
          </div>
          
          <div className='container'><Services></Services> </div>
          <div className='container'><Contact></Contact> </div>
          <div className='container'><Team></Team>  </div>

        </div>        
      </main>
      <footer className="page-footer App-footer"><Footer></Footer></footer>
      
    </div>
  );
}

export default App;
