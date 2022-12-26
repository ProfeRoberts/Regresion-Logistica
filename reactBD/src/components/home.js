import React from "react";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { nodeName } from "jquery";
import { Redirect } from 'react-router';

class Home extends React.Component {

    state = {
        datos: [],
        status: false,
        redirect: false
    }

    cargarDatos=()=>{
        axios.get("Preguntas").then(response => { 
            console.log(response.data);
            this.setState({
                datos:response.data
                ,status:true
            });
        });

    } 

    componentDidMount() {
        this.cargarDatos();
    }

    handleClick(id){
        axios.post(`Eliminar?id=${id}`).then(response => {
            console.info(response.data);
            if (response.data.message) {
                alert(response.data.message);
            } else {
                alert(response.data.error);
            }
        }).catch(error => {
            console.info(error);
            alert(response.data.message);
        }).finally(() => {
            window.location.href = "/Proyecto/";
        });
    } 

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/Proyecto/home'/>;
        }
        const { data, showAlert, alertText } = this.state;
        return (
            <Container className="box" >
                <h1 className="AlignCenter" > CREAR, ALTAS, BAJAS Y CAMBIOS </h1>
                <hr style={{ width: "80%" }} />
                    <Link to="/Proyecto/formulario" className="Boton2">NUEVA PREGUNTA</Link>
                    <Link to="/Proyecto/login" className="Boton2">CERRAR SESION</Link>
                <Table className="Tabla" bordered >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ejercicio </th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.status===true && (
                    this.state.datos.map((preg,i)=>{
                    return(
                    <tr key={i}>
                        <td>{preg.ID}</td>
                        <td>{preg.TITLE}</td>
                        <td>
                        <Button variant="warning" style={{ margin: "12px" }}>
                            <NavLink to={"/Proyecto/Consulta/"+preg.ID} className="CustomLink">Ver</NavLink>
                        </Button>
                        <Button variant="danger" style={{ margin: "12px" }} onClick={this.handleClick.bind(this, preg.ID)}>
                            Eliminar
                        </Button>
                        <Button variant="warning" style={{ margin: "12px" }}>
                            <NavLink to={"/Proyecto/Modificar/"+preg.ID} className="CustomLink">Modificar</NavLink>
                        </Button>
                        <Button variant="success" style={{ margin: "12px" }}>    
                            <NavLink to={"/Proyecto/pregunta/"+preg.ID} className="CustomLink">Probar</NavLink>
                        </Button>
                        </td>
                    </tr>
                    );
                    })
                    )}
                    </tbody>
                </Table>
            </Container>
        )
    }

}

export default Home;