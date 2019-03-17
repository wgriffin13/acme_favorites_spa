import React, {Component} from 'react'
import axios from 'axios'

export default class Users extends Component {
  constructor () {
    super()
    this.state = {
      users: [
          {favorites: []}
      ]
    }
  }

  componentDidMount () {
      axios.get('/api/users')
        .then(response => response.data)
        .then(data => {
            this.setState({users: data})
        })
  }

  render () {
    return (
        <ul>
            {this.state.users.map(user => {
                return (
                    <li key={user.id}>{user.name}
                        <ul>
                            {user.favorites.map(favorite => {
                                return (
                                    <li key={favorite.id}>{favorite.thing.name} (Ranked: {favorite.rank})</li>
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
