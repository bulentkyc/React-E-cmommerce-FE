import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import The404s from './pages/404';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {

  let mock = [{
    id: 'p6',
    title: 'Dell',
    details: 'Lorem Ipsum ....',
    imgSrc: 'https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
    price: 2000,
    amount:5
}];
  
  return (
    <div>
            <Navbar/>

            <Switch>
              <Route path='/About'>
                <About/>
              </Route>

              <Route path='/Cart'>
                <ProductList cart = {mock}/>
              </Route>

              <Route exact path='/'>
                <Home/>
              </Route>

              <Route path='/'>
                <The404s/>
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


/*8

            <Link to="/Home">
              <button>Home</button>
            </Link>

            <Link to="/About">
              <button>About</button>
            </Link>

*/


/*9

              <Route path='/About/Me'>
                <Home/>
              </Route>


*/