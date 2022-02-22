import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Chart from "./components/Chart"
import Header from './components/Header';
import Error404 from './components/Error404';

import * as React from "react";
import { Routes, Route } from "react-router-dom";

//Firebase
import { db } from './firebase';
import { collection, onSnapshot } from "firebase/firestore";


class App extends React.Component {
  constructor(props){
      super(props)
      this.state= {
        //This comes from fb
        itemList : [],
        // This goes to Chart component
        chart: []
      }
  }
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.title} => ${doc.data()}`);
    // });
  render(){
    return (
        <div>
          <Header/>
          <Routes>
              <Route path="/" element={<Home itemsx = {this.state.itemList} addToChartX={(id)=>this.addToChart(id)} />} />
              <Route path="chart" element={<Chart chartx = {this.state.chart} removeItemX = {(id)=>this.removeItem(id)} handleChangeX = {(id, number)=>this.handleChange(id, number)}/>} />
              <Route path='*' exact={true} element = {<Error404/>} />
          </Routes>
        </div>
    );
  }
  ///// Methods ///////////////////////////////////////////
    addToChart(id){
      let item; 
      if(this.state.chart.some(item => item.id === id)){
        item = this.state.chart.filter(product => product.id===id);
        item[0].number++;
        console.log(item[0].number)
        this.updateLS()

        alert("product quantity increased")
      }else{
        item = this.state.itemList.filter(product => product.id===id);
        //Now item is equal to an array with the wanted value
        this.setState(
          (state)=>(
            {chart: [...state.chart,
              {
                'id': item[0].id,
                'title': item[0].title,
                'image': item[0].image,
                'price': item[0].price,
                'number': 1
              }
            ]}
          )
        );
        this.updateLS()

        alert("Product added")
      }
    }
    ////////////////////
    removeItem(id){
      this.setState((state)=>({
        chart: [...state.chart.filter((item) => item.id!==id)]
      }));
    }

    handleChange(id, number){
      let found = this.state.chart.find(element => element.id === id)
      if(number===1){
        found.number--
        this.setState((state)=>({chart: [...state.chart]}));
      }else if(number===2){
        found.number++
        this.setState((state)=>({chart: [...state.chart]}));
      }
      this.updateLS()
    }
    ///// ON MOUNT //////////////////
    componentDidMount(){
      onSnapshot(collection(db, "items"), (lista) => {
        lista.forEach((item) => {
          this.setState((state)=>({itemList:[...state.itemList ,item.data()]}));
        });
        console.log(this.state.itemList)
      });
      // UPDATE CHART LS WHEN REFRESHIN PAGE //////////
      if(localStorage.chart){
        this.setState({chart: JSON.parse(localStorage.getItem("chart"))});
      }
    }
    ////// LOCALstorage UPDATE /////////
    updateLS(){
      localStorage.setItem("chart", JSON.stringify(this.state.chart));
    }
}



export default App;