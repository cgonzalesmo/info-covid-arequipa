import React, { Component, useEffect } from 'react'
import { db } from '../Firebase/connection-firebase';
import Table from './Table';
import Graph from '../graficos/Graph';
import Graphthree from '../graficos/Graphthree';

const valuesall = [
    { id: 1, value: "Grupo de Riesgo", rep: "GRUPO_RIESGO" },
    { id: 2, value: "Provincia", rep: "PROVINCIA" },
    { id: 3, value: "Distrito", rep: "DISTRITO" },
    { id: 4, value: "Sexo", rep: "SEXO" },
    { id: 5, value: "Edad", rep: "EDAD" },
    { id: 6, value: "Fecha de vacunación", rep: "FECHA_VACUNACION" },
    { id: 7, value: "Dosis", rep: "DOSIS" }];

export default class Vacunagrupo extends Component {

    constructor() {
        super();
        this.state = {
            key: Math.random(),
            confirmar: false,
            data: [],
            data2: [],
            values: valuesall
        }
    }
    async componentDidMount() {
        const vac1 = [];
        const vac2 = [];
        const datadb = db.ref();
        await datadb.child("Datos").get().then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({
                    data: snapshot.val(),
                    data2: snapshot.val(),
                    confirmar: true,
                    key: Math.random()
                })
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }


    filter(param) {
        const option = document.getElementById(param).value;
        let datos = [];
        let filtro;
        if (option == 0){
            this.setState({
                data2: this.state.data,
                key: Math.random()
            })
            return;
        }
        else if (option == 1){
            filtro = 'ADULTO MAYOR';
        }
        else if (option == 2){
            filtro = 'BRIGADISTAS';
        }
        else if (option == 3){
            filtro = 'ESTUDIANTES DE CIENCIAS DE LA SALUD';
        }
        else if (option == 4){
            filtro = 'PERSONAL DE SALUD';
        }
        else if (option == 5){
            filtro = 'PERSONAL DE SEGURIDAD';
        }
        else if (option == 6){
            filtro = 'PERSONAL MILITAR Ó FF AA';
        }
        else if (option == 7){
            filtro = 'POLICIA NACIONAL DEL PERU';
        }
        else if (option == 8){
            filtro = 'TRABAJADOR Ó PERSONAL DE LIMPIEZA';
        }
        console.log(filtro);
        this.state.data.map(element => {
            if (element.GRUPO_RIESGO == filtro) {
                datos.push(element);
            }
        });
        console.log(datos);
        this.setState({
            data2: datos,
            key: Math.random()
        })
    }

    render() {
        return (
            <>
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Vacunación por grupo de riesgo</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="col-12">
                        <div className="col-12 text-center wow zoomIn" data-wow-delay="0.1s">
                            <div className="col-12" >
                                <div className='row'>
                                    <div className='filtrotex col-12 col-md-3 col-lg-2 mx-0 px-0'>
                                        <div className='text-center my-2'>
                                            BUSCAR POR:
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-5 col-md-4 col-lg-3 ml-0'>
                                        <select className='form-control mx-auto col-12' id="combo_1" onChange={() => this.filter("combo_1")}>
                                            <option value="0" >Todos</option>
                                            <option value="1" >Adulto Mayor</option>
                                            <option value="2" >Brigadistas</option>
                                            <option value="3" >Estudiantes de Ciencias de la Salud</option>
                                            <option value="4" >Personal de Salud</option>
                                            <option value="5" >Personal de Seguridad</option>
                                            <option value="6" >Personal Militar o FFAA</option>
                                            <option value="7" >Policia Nacional del Perú</option>
                                            <option value="8" >Trabajador o Personal de limpieza</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="containerTable mb-3">
                                {this.state.confirmar ?
                                    <Table key={this.state.key} columns={this.state.values} data={this.state.data2} paginacion={true}></Table>
                                    :
                                    <center>
                                        <div className='row pt-5'>
                                            <img
                                                src='../assets/load.gif'
                                                style={{ width: '80px', margin: 'auto' }}
                                                alt='loading...'
                                            />
                                        </div>
                                        <div className="col-12 bg-light" style={{ paddingTop: "106px" }}></div>
                                    </center>
                                }
                                </div>
                            </div>

                            <div className="price-action mt-5 mb-3" style={{ textAlign: 'center' }}>
                                <h1>Gráficas Estadísticas</h1>
                            </div>
							<div className="container col-6" style={{width:"90%",height:"90%", background: '#E5E8E8', borderRadius: '10px', marginTop:"15px", marginBottom:"15px"}}>
		                        <Graph></Graph>
		                    </div>
							<div className="container col-6" style={{width:"90%",height:"90%", background: '#E5E8E8', borderRadius: '10px',marginTop:"15px", marginBottom:"15px"}}>
		                        <Graphthree></Graphthree>
		                    </div>


                        </div>
                    </div>
                </div>

                <div className="footer wow fadeIn" data-wow-delay="0.3s">
                <div className="container-fluid">
                    <div className="container">
                        <div className="footer-info">
                            <a href="index.html" className="footer-logo">I<span>nfo</span>AQP</a>
                            <h3>Universidad Nacional de San Agustín</h3>
                            <div className="footer-menu">
                                <p>Arequipa, Perú</p>
                            </div><br></br>
                            <div className="footer-social">
                                <a href="https://twitter.com/UNSA_Oficial?s=20" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/PaginaOficialUNSA/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.youtube.com/channel/UCA47Nkx4SU8refybyb6Ny_g/featured" target="_blank"><i className="fab fa-youtube"></i></a>
                                <a href="https://www.instagram.com/unsa_aqp/?hl=es-la" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.unsa.edu.pe/" target="_blank"><i className="fas fa-globe"></i></a>
                                <a href="https://www.linkedin.com/school/universidad-nacional-de-san-agustin-de-arequipa/?originalSubdomain=pe" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="container copyright">
                        <div className="row">
                            <div className="col-md" align='center'>
                                <p>&copy; InfoAQP, All Right Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
            </>
        )
    }
}
