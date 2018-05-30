import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Products extends Component {
    constructor(){
        super();

        this.state = {
            item: {}
        }
    }

    componentDidMount(){
        axios.get(`https://practiceapi.devmountain.com/products/${this.props.match.params.id}`).then(res => {
            this.setState({
                item: res.data
            })
        })
    }

    render(){
        let {item} = this.state;
        return(
            <div>
                <h1>{item.title}</h1>
                <img src={item.image} width='600' />
                <h2>{`Price: $${item.price}.00`}</h2>
                <Link to='/' ><button>Back to Products</button></Link>
            </div> 
        )
    }
}