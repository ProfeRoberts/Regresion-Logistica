import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home"; //Componente derivado de App
import 'bootstrap/dist/css/bootstrap.min.css'; //Estilo (no es componente)
import "./styles/styles.css"
import Login from "./components/login" //Componente derivado de App

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/Proyecto/">
                    <Login />
                </Route>
                <Route exact path="/Proyecto/home">
                    <Home />
                </Route>
                <Route path="*" render={() => <h1>RECURSO NO ENCONTRADO</h1>} />
            </Switch>
        </div>
    );
}
export default App;

//Exportamos el index como App