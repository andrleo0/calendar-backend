

const { response } = require('express');


const getEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Eventos encontrados'
    });
}

const crearEvento = (req, res = response) => {
    //verificar que tenga el evento
    console.log(req.body);

    res.json({
        ok: true,
        msg: 'crearEvento'
    });
}

const actualizarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarEvento'
    });
}

const eliminarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarEvento'
    });
}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}

