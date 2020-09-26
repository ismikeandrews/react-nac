import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/login.page';
import Contacts from './pages/contacts/contacts.page';
import ContactDetail from './pages/contact-detail/contact-detail.page'
import GroupInfo from './pages/group-info/group-info.page'
import Register from './pages/register/register.page'

import { Header } from './components'

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact={true} path="/" component={Login}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/contact-detail/:id" component={ContactDetail}/>
            <Route path="/group-info" component={GroupInfo}/>
            <Route path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;