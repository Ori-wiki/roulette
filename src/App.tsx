import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className='min-h-screen bg-[#1E2025]'>
      <div className='mx-auto w-full max-w-294 px-3 pb-10 pt-3 min-[768px]:px-5 min-[768px]:pb-12 min-[768px]:pt-4.5'>
        <div className='flex justify-center pb-6 min-[768px]:pb-10'>
          <Header />
        </div>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
