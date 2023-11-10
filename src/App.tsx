import React from 'react'
import Nav from './sections/Nav'
import Home from './sections/Home'
import About from './sections/About'
import Project from './sections/Project'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </div>
  )
}

export default App
