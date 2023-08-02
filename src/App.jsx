import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import LoginContext from './context'
import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import axiosInstance from './axios'

function App() {
  const [loginUser, setLoginUser] = useState(null)

  // useEffect(() => {
  //   const token = localStorage.getItem('access')
  //   if (token) {
  //     const decoded = jwtDecode(token)
  //     const getUser = () => {
  //       axiosInstance.get(`users/profile/${decoded.user_id}/`, { headers: { Authorization: `JWT ${token}` } })
  //       .then(res => {
  //         setLoginUser(res.data)
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //     }
  //     getUser()
  //   }
  // }, [])

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
