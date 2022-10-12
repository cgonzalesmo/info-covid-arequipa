import React, { useEffect } from 'react';
import fire from '../Firebase/connection-firebase';

export default function Topbar() {
    const [user, setUser] = React.useState(1);
    const [useremail, setUseremail] = React.useState('');
    fire.auth().onAuthStateChanged(user => {
        if (user) {
            setUser(true);
            setUseremail(user.email);
        } else {
            setUser(false);
        }
    })

    const handleLogout = () => {
        fire.auth().signOut();
    };

    return (
        <>
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        {!user ?
                            <>
                                <a href="/login" className="nav-item nav-link"><font color="#ffffff">Inicio de sesión</font></a>
                                <a href="/register" className="nav-item nav-link"><font color="#ffffff">Registro</font></a>
                            </>
                            :
                            <>
                                <a href="/" className="nav-item nav-link"><font color="#ffffff">{useremail}</font></a>
                                <a href="/" onClick={handleLogout} className="nav-item nav-link"><font color="#ffffff">Cerrar Sesión</font></a>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a href="index.html" className="navbar-brand"> <img src="img/icono.png" /> </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <a href="/" className="nav-item nav-link">Inicio</a>
                            <a href="/vacufabri" className="nav-item nav-link">Vacunacion por fabricante</a>
                            <a href="/vacugrupo" className="nav-item nav-link">Vacunacion por grupo de riesgo</a>
                            <a href="/data" className="nav-item nav-link">Datos</a>
                            <a href="/contacto" className="nav-item nav-link">Contacto</a>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}
