import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Footer from './components/SharedPage/Footer/Footer';
import Header from './components/SharedPage/Header/Header';
import NotFound from './components/SharedPage/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/notFound' element={<NotFound></NotFound>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
