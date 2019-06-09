import React, {Component} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false,
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }

        this.handleChange=this.handleChange.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    makePost(e){
        e.preventDefault()
        axios
        .post('/api/properties', {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip 
        })
        .then(() => {
            this.setState({
                redirect: true,
                name: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            })
        })
    }

    cancel() {
        this.setState({ name: "", address: "", city: "", state: "", zip: '' });
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {

        const {redirect} = this.state;

        if(redirect) {
            return <Redirect to='/' />
        }

        return(
            <div className='Wizard'>
                <h3>Property Name</h3>
                <input name='name' value={this.state.name} onChange={this.handleChange} placeholder='Name'/>
                <h3>Address</h3>
                <input name='address' value={this.state.address} onChange={this.handleChange} placeholder='Address'/>
                <h3>City</h3>
                <input name='city' value={this.state.city} onChange={this.handleChange} placeholder='City'/>
                <h3>State</h3>
                <input name='state' value={this.state.state} onChange={this.handleChange} placeholder='State' />
                <h3>Zip Code</h3>
                <input name='zip' value={this.state.zip} onChange={this.handleChange} placeholder='Zip-Code'/>
                <button onClick={e=> this.makePost(e)}>Complete</button>

                <Link to='/'>
                    <button className='cancel' onClick={this.cancel}>Cancel</button>
                </Link>
            </div>
        )
    }
}