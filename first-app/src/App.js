import './App.css';
import React from "react"

console.log(React, "<<<<")
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>Header</div>
  )
}

function Body() {
  return (
    <div>
      Body Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quas quo laboriosam id praesentium. Reiciendis at iusto autem quo quam repudiandae facere dolorum tenetur commodi nam? Voluptate, tempora excepturi! Dolor!
      <Image />
      <Title />
      <MainInfo />
    </div>
  )
}
function Footer() {
  return (
    <div>
      <ul>
        <li>facebook</li>
        <li>facebook</li>
        <li>facebook</li>
      </ul>
      <Address />
    </div>
  )
}


class Image extends React.Component {
  render() {
    return (
      <div>
        <img src="https://miro.medium.com/max/1400/0*3C6CUn1FEC_raM8c" alt="" width="200" />
      </div >
    )
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to our first react class</h2>
      </div >
    )
  }
}

class MainInfo extends React.Component {
  render() {
    return (
      <div>
        <h2>React is fast js library</h2>
      </div >
    )
  }
}

function Address(){
  return(
    <div>
      <p>123 example dr</p>
    </div>
  )
}

export default App;
