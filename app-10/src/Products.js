import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Products extends Component {
    constructor(){
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get('https://practiceapi.devmountain.com/products/').then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    render(){
        let display = this.state.products.map((item, i) => {
            if(item.image) {
                return (
                    <Link key={i} to={`/details/${item.id}`}>
                        <img src={item.image} width='300' alt='Error'/>
                    </Link>
                )
            }
        });

        return(
            <div>
                <h1>Products</h1>
                {display}
            </div> 
        )
    }
}
