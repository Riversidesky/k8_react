import './App.css';
import { FcHome } from "react-icons/fc";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import Hello from './01/Hello';
// import Name from './01/Name';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
import MyClock from './02/MyClock';
import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
import Gallery from './11/Gallery';
import Festival from './12/Festival';
// import RouteMain from './13/RouteMain';


function App() {


  return (
    <BrowserRouter>
      <div className="w-full xl:w-10/12 h-screen mx-auto
                      flex flex-col justify-center items-center">
        <header className='w-full h-20
                            flex justify-between items-center
                            bg-indigo-400'>
            <p className='text-3xl font-bold text-fuchsia-950 p-5' >리액트 실습</p>
            <ul className='flex justify-center items-center text-xl font-semibold'>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/시계'>시계</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/로또'>로또</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/푸드뱅크'>푸드뱅크</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/박스오피스'>박스오피스</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/교통사고'>교통사고</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/관광'>관광</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/축제'>축제</Link></li>
            </ul>
            <p className='p-5'><Link to='/'><FcHome className='w-14 h-14' /></Link></p>
            
        </header>
        <main className='w-full grow
                          flex flex-col items-center
                          overflow-y-auto bg-slate-200'>
                            <Routes>                          
                              {/* <MyDiv1 /> */}
                              <Route path='/시계' element={<MyClock />} />
                              {/* <MyList /> */}
                              <Route path='/로또' element={<Lotto />} />
                              <Route path='/푸드뱅크' element={<FoodMain />} />
                              <Route path='/박스오피스' element={<BoxOffice />} />
                              {/* <MyBox /> */}
                              <Route path='/교통사고' element={<Traffic />} />
                              {/* <MyRef /> */}
                              <Route path='/관광' element={<Gallery />} />
                              <Route path='/축제' element={<Festival />} />
                              {/* <RouteMain /> */}    
                            </Routes>       
        </main>
        <footer className='w-full h-20 flex-shrink-0
                            flex justify-center items-center
                            bg-black text-white'>
                              <p>이수민</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
