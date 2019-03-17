import React from 'react'
import Nav from './Nav'
import Users from './Users'
import Things from './Things'
import axios from 'axios'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

export default class App extends React.Component {

    constructor () {
        super()
        this.state = {
            usersCnt: '',
            thingsCnt: ''
        }
    }

    componentDidMount () {
        axios.get('/api/usersCount')
          .then(response => response.data)
          .then(data => {
              this.setState({usersCnt: data.count})
          })
        axios.get('/api/thingsCount')
          .then(response => response.data)
          .then(data => {
              this.setState({thingsCnt: data.count})
          })
    }

    render () {
        return (
            <HashRouter>
                <div>
                    <h1>Acme Favorites</h1>
                    <Nav usersCnt={this.state.usersCnt} thingsCnt={this.state.thingsCnt} />
                    <Switch>
                        <Route exact path="/users" component={Users} />
                        <Route exact path="/things" component={Things} />
                        <Redirect exact from="/" to="/users" />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
