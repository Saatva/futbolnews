import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;