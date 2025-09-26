import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from './components/Items'

class App extends React.Component() {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'chair.jpg',
          desc: 'df;j womv orjmgk spromg,k vokmtr[o',
          category: 'chairs',
          price: '499'
        },

        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'df;j womv orjmgk spromg,k vokmtr[o',
          category: 'tables',
          price: '3199'
        },

        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'df;j womv orjmgk spromg,k vokmtr[o',
          category: 'sofas',
          price: '9999'
        }
      ]
    }
  }
  render() {
  return (
    <div className="wrapper"> 
    <Header/>
    <Items items = {this.state.items}/>
    <Footer/>
    </div>
  );
}
}

export default App;