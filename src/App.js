import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div>
            <Navbar/>

            <Switch>
              <Route path='/About/Me'>
                <Home/>
              </Route>

              <Route path='/About'>
                <About/>
              </Route>

              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
      </div>
    );

}

export default App;

//1//let rnd = Math.random()*10;
  //2//let userReq = prompt('Which page?');

  //8//const [activePage, setActivePage] = useState(<Home/>);

  //4//let rndPage = <Home/>;

  /*3   if (userReq == 'About') {
    rndPage = <About/>;
  } else {
    rndPage = <Home/>;
  } */

/*5 
  let goHome = () => {
    setActivePage(<Home/>);
  }

  let goAbout = () => {
    setActivePage(<About/>);
  }

  <button onClick = {()=>setActivePage(<Home/>)}>Home</button>
  <button onClick = {()=>setActivePage(<About/>)}>About</button>
 */

/* 7
  let pageUpdateHandler = (page) => {
    //let page = e.target.innerHTML;
    switch (page) {
      case 'Home':
        setActivePage(<Home/>)
        break;
    
      case 'About':
        setActivePage(<About/>)
        break;
    
      default:
        break;
    }
  }
 */

/*6
return (
    <div>
<section>
      <button onClick = {()=>pageUpdateHandler('Home')}>Home</button>
      <button onClick = {()=>pageUpdateHandler('About')}>About</button>
    </section>
      {activePage}
      </div>
    );
*/


/*7

            <Link to="/Home">
              <button>Home</button>
            </Link>

            <Link to="/About">
              <button>About</button>
            </Link>

*/