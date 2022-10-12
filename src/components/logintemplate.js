import React from 'react';

const Logintemplate = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError, 
    } = props;

    return (
            <section className="login">
                <div className="loginContainer">
                    <label>E-mail</label>
                    <input 
                        type="text" 
                        autoFocus 
                        required 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Contraseña</label>
                    <input 
                        type="password"    
                        required 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
            
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                                
                                <button onClick={handleSignup}>Registrarse</button>
                                <p>
                                    ¿Tiene cuenta?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Ingresar</span>
                                </p>
                                
                            </>
                        ) : (
                            <>
                                <button onClick={handleLogin}>Ingresar</button>
                                <p>
                                    ¿No tiene cuenta?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Registresé</span>
                                </p>
                    
                            </>
                        )} 
                    </div>
                </div>
            </section>
    )
}

export default Logintemplate;