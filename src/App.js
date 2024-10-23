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
import Fcst from './14/Fcst';
import FcstList from './14/FcstList';
import RecoilMain from './15/RecoilMain';
import Rest from './16/Rest';


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
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/time'>시계</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/lotto'>로또</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/foodbank'>푸드뱅크</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/boxoffice'>박스오피스</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/traffic'>교통사고</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/gallery'>관광</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/festival'>축제</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/fcst'>일기예보</Link></li>
              <li className='mx-2 p-2 hover:bg-indigo-500 rounded-md'><Link to='/rest'>실습</Link></li>
            </ul>
            <p className='p-5'><Link to='/'><FcHome className='w-14 h-14' /></Link></p>
            
        </header>
        <main className='w-full grow
                          flex flex-col items-center
                          overflow-y-auto bg-slate-200'>
                            <Routes>                          
                              {/* <MyDiv1 /> */}
                              <Route path='/time' element={<MyClock />} />
                              {/* <MyList /> */}
                              <Route path='/lotto' element={<Lotto />} />
                              <Route path='/foodbank' element={<FoodMain />} />
                              <Route path='/boxoffice' element={<BoxOffice />} />
                              {/* <MyBox /> */}
                              <Route path='/traffic' element={<Traffic />} />
                              {/* <MyRef /> */}
                              <Route path='/gallery' element={<Gallery />} />
                              <Route path='/festival' element={<Festival />} />
                              {/* <RouteMain /> */}    
                              <Route path='/fcst' element={<Fcst />} />
                              <Route path='/fcstlist' element={<FcstList />} />
                              <Route path='/recoil' element={<RecoilMain />} />
                              <Route path='/rest' element={<Rest />} />
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
