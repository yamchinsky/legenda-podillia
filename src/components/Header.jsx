import { Navigation } from './Navigation';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import { handleNavigation } from '../utils/handleNavigation';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      className="fixed top-0 z-50 flex flex-col lg:flex-row justify-between items-center p-4 lg:p-10 text-stone-900 bg-white w-full shadow-md"
      style={{ position: 'fixed', top: 0, backgroundColor: 'white', zIndex: 1000 }}
    >
      <div className="flex items-center gap-2 mb-4 lg:mb-0 cursor-pointer" onClick={() => handleNavigation(navigate, 'home')}>
        <img src={logo} alt="Agency logo" className="w-20 lg:w-24" />
        <div>
          <div className="text-lg lg:text-xl font-bold">Легенда</div>
          <div className="text-md lg:text-lg">Поділля</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto mb-4">
        <Navigation />
      </div>

      <button className="mt-4 lg:mt-0 px-5 py-2.5 text-base font-bold text-blue-500 border border-blue-500 rounded-3xl hover:bg-blue-500 hover:text-white transition hidden lg:flex">
        Зв'язатися з нами
      </button>

      <button className="flex lg:hidden px-4 py-2 text-sm font-bold text-blue-500 border border-blue-500 rounded-3xl hover:bg-blue-500 hover:text-white transition">
        Зв'язатися
      </button>
    </header>
  );
};
