import './App.scss'
import { ArrowIcon } from './components/arrow-icon'
import { Logo } from './components/logo'

function App() {
  return (
    <main>
      <header className='header_container'>
        <Logo />
        <nav className='menu_options'>
          <a href="#">What we offer</a>
          <a href="#">How it works</a>
          <a href="#">Portfolio</a>
        </nav>
        <button>
          <div className='btn-face-white'>
            Contact us
            <ArrowIcon />
          </div>

          <div className='btn-face-purple'>
            Contact us
            <ArrowIcon />
          </div>

        </button>
      </header>
    </main>
  )
}

export default App
