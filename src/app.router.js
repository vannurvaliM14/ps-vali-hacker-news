import React from 'react'
import {  Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/layout.component'


export default function AppRouter(props) {

    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/search_by_date?tags=story' />} />
            <Route exact path='/search_by_date' render={props => <Layout {...props} />} />
        </Switch>
    )
}