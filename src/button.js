import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component{
    constructor(props){
        super(props)
        this.myClick = this.myClick.bind(this)
    }
    myClick(){
        document.getElementsByClassName('wrapper')[0].style.backgroundColor = '#f5f5aa';
    }
    render(){
        return(
            <button className='clicker'
                    onClick={this.myClick}>
                Изменить дизайн
            </button>
        )
    }
}
export default Button;