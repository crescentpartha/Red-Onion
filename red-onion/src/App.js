import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfasts from './components/Home/Breakfast/Breakfasts/Breakfasts';
import Dinners from './components/Home/Dinner/Dinners/Dinners';
import Home from './components/Home/Home/Home';
import Lunches from './components/Home/Lunch/Lunches/Lunches';
import Footer from './components/SharedPage/Footer/Footer';
import Header from './components/SharedPage/Header/Header';
import NotFound from './components/SharedPage/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>
          <Route path='breakfast' element={<Breakfasts></Breakfasts>}></Route>
          <Route path='lunch' element={<Lunches></Lunches>}></Route>
          <Route path='dinner' element={<Dinners></Dinners>}></Route>
        </Route>
        <Route path='/notFound' element={<NotFound></NotFound>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
