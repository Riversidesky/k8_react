import './App.css';
// import Hello from './01/Hello';
// import Name from './01/Name';
import { FcHome } from "react-icons/fc";
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
//import FoodMain from './06/FoodMain';
//import MyClock from './02/MyClock';
import BoxOffice from './07/BoxOffice';
import MyBox from './08/MyBox';
import Traffic from './09/Traffic';
import MyRef from './10/MyRef';
import Gallery from './11/Gallery';
import Festival from './12/Festival';


function App() {
  return (
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                          flex justify-between items-center
                          bg-indigo-400'>
          <p className='text-3xl font-bold text-fuchsia-950 p-5' >리액트 실습</p>
          <p className='p-5'><FcHome className='w-14 h-14' /></p>
          
      </header>
      <main className='w-full grow
                        flex flex-col items-center
                        overflow-y-auto bg-slate-200'>
                          {/* <MyDiv1 /> */}
                          {/* <MyClock /> */}
                          {/* <MyList /> */}
                          {/* <Lotto /> */}
                          {/* <FoodMain /> */}
                          {/* <BoxOffice /> */}
                          {/* <MyBox /> */}
                          {/* <Traffic /> */}
                          {/* <MyRef /> */}
                          {/* <Gallery /> */}
                          <Festival />
                          
      </main>
      <footer className='w-full h-20 flex-shrink-0
                          flex justify-center items-center
                          bg-black text-white'>
                            <p>이수민</p>
      </footer>
    </div>
  );
}

export default App;
