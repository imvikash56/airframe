import Analytics from './component/Analytics';
import System from './component/System';
import Project from './component/Project';
import Monitor from './component/Monitor';
import Financial from './component/Financial';
import Stocks from './component/Stock';
import Report from './component/Report';
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path='/' extra element={<Analytics/>}></Route>
  <Route path='/project' extra element={<Project/>}></Route>
  <Route path='/system' extra element={<System/>}></Route>
  <Route path='/monitor' extra element={<Monitor/>}></Route>
  <Route path='/financial' extra element={<Financial/>}></Route>
  <Route path='/stocks' extra element={<Stocks/>}></Route>
  <Route path='/report' extra element={<Report/>}></Route>
 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
