import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import LoginContext from './context'
import { useState, useEffect } from 'react'

function App() {
  const [loginUser, setLoginUser] = useState(null)

  return (
    <div className="App">
      <LoginContext.Provider value={{ loginUser, setLoginUser }}>
        <header className='App-header'>
          <Header />
        </header>
        <main className='App-main'>
          <Main />
        </main>
        <footer className='App-footer'>
          <Footer />
        </footer>
      </LoginContext.Provider>
    </div>
  )
}

export default App
