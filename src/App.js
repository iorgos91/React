import React from 'react';
import logo from './logo.svg';
import './App.css';

function ShowBanner(props){
  if (props.time > 45) {
    return(
      <div className='rest_block'>
        Отдых
      </div>
    )
  } else {
    return(
      <div className='work_block'>
        Пора работать!
      </div>
    )
  }
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  render(){
    return(
      <div>
        <ShowBanner time={this.state.date.getSeconds()}/>
        <h1>Текущее время </h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}


export default Clock;
