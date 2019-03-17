import React, {Component} from 'react'
import axios from 'axios'

export default class Things extends Component {
  constructor () {
    super()
    this.state = {
      things: [
          {favorites: []}
      ]
    }
  }

  componentDidMount () {
      axios.get('/api/things')
        .then(response => response.data)
        .then(data => {
            this.setState({things: data})
        })
  }

  render () {
    return (
        <ul>
            {this.state.things.map(thing => {
                return (
                    <li key={thing.id}>{thing.name}
                        <ul>
                            {thing.favorites.map(favorite => {
                                return (
                                    <li key={favorite.id}>favorited by: {favorite.user.name}</li>
                                )
                            })}
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
  }
}
