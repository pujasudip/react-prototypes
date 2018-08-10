import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from '../components/welcome';
import Nav from '../components/nav';
import Macarons from '../components/our_macarons';
import GiftAndParties from '../components/gifts_parties';
import Contact from '../components/contact';

const App = () => {
    return (
        <div class="container">
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={Macarons}/>
            <Route path="/gift_parties" component={GiftAndParties}/>
            <Route path="/contact" component={Contact}/>
        </div>
    );
};

export default App;