import React from 'react'

export default function Data() {
    return (
        <>
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Datos</h2>
                    </div>
                  
                </div>
            </div>
        </div>

        <div className="single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-15">
                        <div className="single-content wow fadeInUp">
                            
                            <h3>Dataset</h3>
							<p>La dataset utilizada fue obtenida de la Plataforma Principal de Datos Abiertos. Esta es una plataforma que permite encontrar, 
							explorar y reutilizar datos gubernamentales de manera simple, segura y confiable para crear aplicaciones, realizar investigaciones, 
							analizar oportunidades de negocio, desarrollar la economía, ejercer el control ciudadano y contribuir al diseñar diseño de las políticas públicas.</p>
							
							
							<p>Si desea obtener información relacionada a algún tema en específico u obtener los datos utilizados en esta página, debe seguir los siguientes pasos:</p><br></br>
                            <div className="single-bio wow fadeInUp">
                                <h2>Paso 1</h2>
                            </div>
                            <p>Debe ingresar a la Plataforma Principal de Datos Abiertos. Inmediatamente después observará la siguiente pantalla:</p><br></br>                     
                            <img src="img/datos1.jpg" alt="Image" width="100" height="100"/>

                            <div className="single-bio wow fadeInUp">
                                <h2>Paso 2</h2>
                            </div>  
                            <p> La plataforma cuenta con un buscador para temas específicos. Se puede encontrar contenido variado, categorías, etiquetas y formatos para explorar. 
								Deberá escribir "Covid 19" o "Vacunación contra Covid 19" en el buscador de la página y pulsar "ENTER": </p><br></br>
                            <img src="img/datos2.jpg" alt="Image" />

                            <div className="single-bio wow fadeInUp">
                                <h2>Paso 3</h2>
                            </div>  
                            <p>Deberá seleccionar el vínculo con el nombre "Vacunación contra COVID - 19 [Ministerio de Salud - MINSA]": </p><br></br>							
                            <img src="img/datos3.jpg" alt="Image" />

                            <div className="single-bio wow fadeInUp">
                                <h2>Paso 4</h2>
                            </div>  
                            <p>Bajo su decisión, podrá descargar los 3 archivos disponibles, compartirlos y revisarlos: </p><br></br>								
                            <img src="img/datos4.jpg" alt="Image" /><br></br>

                            <p>Del mismo modo, es posible seleccionar revisiones para ver las actualizaciones del archivo que deseamos utilizar.</p><br></br>
                            <img src="img/datos5.jpg" alt="Image" />
                            
                            <p>Finalmente, se utilizo el archivo .xls que se muestra a continuación.</p><br></br>
                            <img src="img/datos6.jpeg" alt="Image" />

                        </div>
                        <div className="single-bio wow fadeInUp">
                            
                            <div className="single-bio-text">
                                <h3>Link del Dataset</h3>
                                <a href="https://www.datosabiertos.gob.pe/dataset/vacunaci%C3%B3n-contra-covid-19-ministerio-de-salud-minsa" target="_blank">DATASET</a>
                                
                            </div>
                        </div>
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

