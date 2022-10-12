import React from 'react';
import emailjs from 'emailjs-com';
export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    emailjs.sendForm('service_fn2h5ng', 'template_p7wob4z', e.target, 'user_dQPCsRcKd7S5saNOPiiq4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    function mialerta() {
        alert("El mensaje ha sido enviado.");
    }

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Contacto</h2>
                        </div>

                    </div>
                </div>
            </div>

            <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/sistemas.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <h2>¿Quiénes somos?</h2>
                            </div>
                            <div className="about-text">
                                <p> Somos un grupo de estudiantes de la carrera de Ingenieria de Sistemas de la Universidad Nacional de San Agustin  </p>
                                <p> Hemos trabajado para brindándoles información útil sobre como va la vacunación en nuestro departamento porque creemos que como poblacion debemos saberlo</p>
                                <a className="btn" href="http://fips.unsa.edu.pe/ingenieriadesistemas/" target="_blank">Descubre más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team">
                <div className="container">
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>Equipo Técnico</p>
                        <h2>Desarrolladores</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/deyson.jpg" alt="Image" />
                                    <div className="team-social">
                                        <a href="https://www.facebook.com/deyson.diaz.545" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.linkedin.com/in/deyson-diaz-192764208/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="https://www.instagram.com/d.diaz.choco/?hl=es-la" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h2>Deyson Victor Diaz Ticona</h2>
                                    <p>Líder de Proyecto</p>
                                    <a href="mailto:ddiazti@unsa.edu.pe?Subject=Informacion%20InfoAQP">ddiazti@unsa.edu.pe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/301956919_1467970550336423_2758130693007121308_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG8H5Ll98T2OttvRDy48I_3q6mOXYOhAuqrqY5dg6EC6gmX5VwBQerm0-hri5gGwZUsQPBEsGWrEo6zS_l8deu0&_nc_ohc=x8EVqWRkjMEAX-DRHOb&_nc_ht=scontent.faqp3-1.fna&oh=00_AT8ge5KQt5snC0ICRdc1be4V_VmsJvgMWEd95CcRe2objw&oe=6349F3A9" alt="Image"></img>
                                    <div className="team-social">
                                        <a href="https://www.facebook.com/cjgonzalesm" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.linkedin.com/in/carlos-jesus-gonzales-molina-722a241b3/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="https://www.instagram.com/cgonzamo/" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h2>Carlos Jesus Gonzales Molina</h2>
                                    <p>Desarrollador Backend</p>
                                    <a href="mailto:cgonzalesmo@unsa.edu.pe?Subject=Informacion%20InfoAQP">cgonzalesmo@unsa.edu.pe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/273808763_116220164309974_437635529277773936_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHSnEghwhuzmTalndZWPyDWfyZilGaZMPF_JmKUZpkw8cwBg6sWyMuNBzYrOFPblHgJlAwqansITMWnm_qU4erb&_nc_ohc=N1y9II-tM8IAX-RTxym&_nc_ht=scontent.faqp3-1.fna&oh=00_AT_WItiCfiW0KxmeyqwJRUJyZRiZaMzhYWBlGob7qkbhoA&oe=634AEE30" alt="Image" />
                                    <div className="team-social">
                                        <a href="https://www.facebook.com/profile.php?id=100077659733726" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h2>Jhonatan Jesus Acuña Huisacayna</h2>
                                    <p>Desarrollador Frontend</p>
                                    <a href="mailto:jacuna@unsa.edu.pe?Subject=Informacion%20InfoAQP">jacuna@unsa.edu.pe</a>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <div className="contact">
                <div className="container">
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>Contacto</p>
                        <h2>Contáctenos para mayor información</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.2s">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="contact-text">
                                        <h2>Ubicación</h2>
                                        <p>Santa Catalina 117, Arequipa, Perú</p>
                                    </div>
                                </div>
                                <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.4s">
                                    <i className="fa fa-phone-alt"></i>
                                    <div className="contact-text">
                                        <h2>Telefóno</h2>
                                        <p>+01 054 237808</p>
                                    </div>
                                </div>
                                <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.6s">
                                    <i className="far fa-envelope"></i>
                                    <div className="contact-text">
                                        <h2>Email</h2>
                                        <p>rectorado@unsa.edu.pe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="contact-form">
                            <form onSubmit={sendEmail}>
                                    <div className="control-group">
                                        <input type="text" className="form-control" placeholder="Nombre" required="required" name="name"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" placeholder="Email" required="required" name="email"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control" placeholder="Asunto" required="required" name="subject"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Mensaje" required="required" name="message"></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <input type="submit" onClick={mialerta} className="btn" value="Enviar Mensaje"></input>
                                    </div>
                            </form>
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
