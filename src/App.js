import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/home';
import Vacunafabricante from './components/vacunafabricante';
import Vacunagrupo from './components/vacunagrupo';
import Login from './components/login';
import Contact from './components/contact';
import Data from './components/data';
import Topbar from './components/topbar';

export default function App(props) {

    
    return (
        <>
            <Router>
                <Route path="/" component={Topbar} />
                <Route path="/" exact component={Home} />
                <Route path="/vacufabri" exact component={Vacunafabricante} />
                <Route path="/vacugrupo" exact component={Vacunagrupo} />
                <Route path="/contacto" exact component={Contact} />
                <Route path="/data" exact component={Data} />   
                <Route path="/login" exact> <Login hasAccount={false} >  </Login>    </Route>
                <Route path="/register" exact> <Login hasAccount={true}>  </Login>   </Route>           
            </Router>
        </>
    );
}


