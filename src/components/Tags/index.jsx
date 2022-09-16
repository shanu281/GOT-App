import './style.css'
import React from 'react';
import {got} from '../data'
import Cards from '../cards';

class Tags extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        activeHouse : ''
        }
    }
    handleClick = (house) => this.setState({activeHouse: house})
    render(){
        let houses = got.houses.map(house => house.name );
        console.log(houses)
        return(
           <>
           { houses.map(house =>  <button onClick={() => this.handleClick(house)} className={house === this.state.activeHouse ? 'active btn': 'btn'}>{house}</button>)}
           
           </>
            
            
        )
    }
}
export default Tags;