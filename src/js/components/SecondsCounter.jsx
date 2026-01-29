function SecondsCounter({ seconds, pause, resume, reset }) {
    const digitos = seconds.toString().padStart(6, "0").split("");


    return (

        <div className="Contenedor">

            <div className="Contador">
                <div className="Reloj">

                    <i className="fa-regular fa-clock"></i>

                </div>

                <div className="digitosTiempo">

                    {digitos.map((digito, index) => (
                        <div key={index} className="digitBox" >
                            {digito}

                        </div>

                    )


                    )}



                </div>
            </div>

            <div className="Buttons">

                <button className="Yellow" onClick={pause}>Pausar</button>
                <button className="Green" onClick={resume}>Reanudar</button>
                <button className="Red" onClick={reset}>Reiniciar</button>

            </div>

        </div>



    )
}

export default SecondsCounter;