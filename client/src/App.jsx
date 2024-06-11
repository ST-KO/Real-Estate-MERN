import Navbar from './components/navbar/Navbar';
import './layout.scss';
import Home from './routes/home/Home';

function App() {
  return (
    <div className="layout">
      <section className='navbar'>
        <Navbar />
      </section>
      <section className='content'>
        <Home />
    </section>
    </div>
  )
}

export default App