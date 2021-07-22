import NavBar from './sections/navbar'
import Team from './sections/team'
import Presentation from './sections/presentation';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './App.css';



function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <div className='container'>
          <Presentation></Presentation>
          <Team></Team>         

        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
