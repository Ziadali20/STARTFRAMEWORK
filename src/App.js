import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';
import Portfolio from './Components/Portfolio/Portfolio';
let routers=createHashRouter([
  {path:'',element:<Layout/>,children:[
    {index :true,element:<Home/>},
    {path:'About',element:<About/>},
    {path:'Contact',element:<Contact/>},
    {path:'Portfolio',element:<Portfolio/>},
    {path:'*',element:<Notfound/>},
  ]}
])
function App() {
  return (
  <>
  <RouterProvider router={routers}></RouterProvider>
  </>
  );
}

export default App;
{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}