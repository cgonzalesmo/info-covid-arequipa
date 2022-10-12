import React, { Component, useEffect } from 'react'
import fire from '../Firebase/connection-firebase';

export default function Home() {
    const [user, setUser] = React.useState(1);
    useEffect (() => {
        
    }, []);

    fire.auth().onAuthStateChanged(user => {
        if (user) {
            setUser(true);
        } else {
            setUser(false);
        }
    })

    
    return (
        <>
            <div className="hero">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="hero-text">
                                <h1>¡Vacúnese!</h1>
                                <p>
                                    Las vacunas contra la COVID-19 están disponibles para todos.
                                    Encuentre el número de personas con COVID-19 en Arequipa, el calendario
                                    de vacunación actualizado, noticias relevantes y más. </p>
                                <div className="hero-btn">
                                    <a className="btn" href="/register" >Regístrese</a>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-none d-md-block">
                            <div className="hero-image">
                                <img src="img/covid1.png" alt="Hero Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
            { user &&

                <div className="about wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="about-img">
                                    <img src="img/calendario.jpg" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="section-header text-left">
                                    <p>Gerencia Regional de Salud Arequipa</p>
                                    <h2>Calendario de Vacunación actualizado</h2>
                                </div>
                                <div className="about-text">
                                    <a className="btn" href="http://www.saludarequipa.gob.pe/" target="_blank">Conocer más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
                <div className="about wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="about-img">
                                    <img src="img/hombro.jpeg" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="section-header text-left">
                                    <p>Gobierno del Perú</p>
                                    <h2>Campaña Nacional de Vacunación contra la COVID-19</h2>
                                </div>
                                <div className="about-text">
                                    <p>
                                        Pongo el hombro por el Perú: conoce si estás en el Padrón Nacional de Vacunación.  </p>

                                    <a className="btn" href="https://www.gob.pe/institucion/pcm/campa%C3%B1as/3451-campana-nacional-de-vacunacion-contra-la-covid-19" target="_blank">Conocer más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               

            <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/aqp.jpeg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Gobierno Regional de Arequipa</p>
                                <h2>Situación del COVID-19
                                    Arequipa</h2>
                            </div>
                            <div className="about-text">
                                <p>24 julio 2021 a las 00:00 horas  </p>

                                <a className="btn" href="https://www.saludarequipa.gob.pe/epidemiologia/enlac/Covid19.html" target="_blank">Conocer más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/foto4.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Diario El Búho</p>
                                <h2>Pico de 225 casos de coronavirus en 24 horas</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    La Gerencia Regional de Salud informó además que dos pacientes con COVID-19 fallecieron en las últimas 24 horas. La cifra total de víctimas mortales se ha incrementado a 56.

                                    Los fallecidos son una mujer de 77 años y un varón de 61 años, que estaban internados en el hospital Honorio Delgado Espinoza. Este es el nosocomio designado para región como Hospital COVID.

                                    Hasta el momento se han procesado 54 mil 249 muestras, entre pruebas rápidas y pruebas moleculares. De ese total, 51 mil 088 resultaron negativas.

                                    Hasta hoy ya se dieron de alta a 1 276 pacientes. Además, del total de infectados en Arequipa, se ha hospitalizado a 126. De ellos, 34 permanecen en la Unidad de Cuidados Intensivos (UCI).
                                </p>
                                <a className="btn" href="https://elbuho.pe/2020/05/arequipa-pico-de-225-casos-de-coronavirus-en-24-horas-suman-3-mil-146/" target="_blank">Conocer más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/noticia1.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Diario El Correo</p>
                                <h2>COVID-19 mantiene presión en hospitales de Arequipa</h2>
                            </div>
                            <div className="about-text">
                                <p>Epidemiólogo asegura que descenso de contagios aún no tiene impacto significativo en centros asistenciales.</p>
                                <a className="btn" href="https://diariocorreo.pe/edicion/arequipa/covid-19-mantiene-presion-en-hospitales-de-arequipa-noticia/" target="_blank">Conocer más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            { user &&
     
            <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/noticia2.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Diario La República</p>
                                <h2>Arequipa registró 22 fallecidos por COVID-19 en las últimas 24 horas</h2>
                            </div>
                            <div className="about-text">
                                <p>Cifras de muertes diarias continúan en descenso. Además, la Gerencia Regional de Salud registró 488 nuevos casos de coronavirus.</p>
                                <a className="btn" href="https://larepublica.pe/sociedad/2021/07/15/arequipa-registro-22-fallecidos-por-covid-19-en-las-ultimas-24-horas-lrsd/" target="_blank">Conocer más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            }

            { user &&
    
            <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/noticia3.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Diario La República</p>
                                <h2>COVID-19: desde este jueves aplicarán segunda dosis a mayores de 50 años en Arequipa</h2>
                            </div>
                            <div className="about-text">
                                <p>Campaña empieza con personas cuyo último dígito de DNI inicie con 1, 2, 3 y 4. Conoce aquí los 27 puntos de inmunización habilitados.</p>
                                <a className="btn" href="https://larepublica.pe/sociedad/2021/07/14/covid-19-desde-este-jueves-aplicaran-segunda-dosis-a-mayores-de-50-anos-en-arequipa-lrsd/" target="_blank">Conocer más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            }
            
            <div className="discount wow zoomIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="section-header text-center">
                    <p>Situación Arequipa al 15 de Julio del 2021</p>
                    <h2>Total muestras <span> 2,066,361</span> </h2>
                    <h2>Casos Positivos<span> 249,160</span> </h2>
                    <h2>Casos Negativos<span> 1,816,689</span> </h2>
                    <h2>Defunciones<span> 6,318</span> </h2>
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
