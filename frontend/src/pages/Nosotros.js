import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
    return (
        <div className="nosotros-container">
            <h1 className="titulo">Mattelsa SAS</h1>
            <h2>Quiénes somos</h2>
            <p>La manera que hemos encontrado para perdurar es tratándonos con rigor y amor al mismo tiempo, a la vez que respetamos y retamos al otro, nos conectamos, colaboramos, nos divertimos y logramos que el trabajo y lo que amamos se conviertan en una sola cosa.</p>
            <p>Estamos en una lucha continua con el ego, con la intención de ver el mundo tal y como es, guiándonos con principios universales, y no con emociones, buscando así, tomar decisiones inteligentes.</p>
            <p>Todo esto basado en tres ejes fundamentales: Bienestar, Confianza, y Alto rendimiento. Que nacen de experiencias vividas, libros y tertulias que nos han ayudado a encontrar el camino.</p>
            <p>En otras palabras, lo más importante que tenemos en Mattelsa es nuestra cultura.</p>
            <h3>BIENESTAR</h3>
            <div className="bienestar-container">
                <div className="bienestar-block">
                    <h4>Equilibrio con el planeta</h4>
                    <ul>
                        <li>Respetamos la vida de todos los seres vivos.</li>
                        <li>Devolvemos todo lo que tomamos de la tierra.</li>
                        <li>Buscamos que lo único vivo que nos rodee no sean las personas.</li>
                        <li>Ponemos la vida por encima de la comodidad.</li>
                        <li>Nuestro planeta, nuestra responsabilidad.</li>
                    </ul>
                </div>
                <div className="bienestar-block">
                    <h4>Las personas son lo primero</h4>
                    <ul>
                        <li>Entendemos que el bien propio solo se logra a través del bien común.</li>
                        <li>No somos una empresa ni una familia, somos una comunidad.</li>
                        <li>Tenemos momentos de ocio.</li>
                        <li>Nos vestimos sin formalismos, como nos sentimos más cómodos.</li>
                        <li>Trabajar tiene que ser emocionante.</li>
                    </ul>
                </div>
            </div>
            <h2>Contacto</h2>
            <p><strong>Tel:</strong> 300 507 10 00</p>
            <p><strong>PBX:</strong> 01 8000 41 37 57</p>
            <p><strong>Escríbenos tu PQRS</strong></p>
        </div>
    );
}

export default Nosotros;