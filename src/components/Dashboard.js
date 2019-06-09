import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import House from './House'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios
        .get('/api/properties')
        .then(results => {
            console.log(results.data)
            this.setState({houses: results.data})
        })
    }

    deleteHouse(id) {
        axios
          .delete(`/api/properties/${id}`)
          .then(results => {
            this.setState({
              houses: results.data
            });
          })
          .catch(() => {
            alert("error");
          });
      }

    render() {
        let {houses} = this.state
        const house = houses.map((house, i) => {
            return <House house={house} key={i} />
        })
        return(
            <div className='Dashboard'>
                <h1 className='Dash-Header'>Dashboard</h1>
                <Link to='/wizard'>
                    <button className='add-prop'>Add New Property</button>
                </Link>

                <button onClick={(e) => this.deleteHouse(e)}>Delete Property</button>
                <div>{house}</div>
            </div>
        )
    }
}