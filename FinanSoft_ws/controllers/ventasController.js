const ventas = require('../models').ventas_model;

module.exports = {
    list(req, res) {
        return ventas
            .findAll({})
            .then(ventas => {
                res.status(200).json(ventas);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    },

    getById(req, res) {
        console.log(req.params.id);
        return ventas
            .findByPk(req.params.id)
            .then((ventas) => {
                console.log(ventas);
                if (!ventas) {
                    return res.status(404).send({
                        message: 'ventas Not Found',
                    });
                }
                return res.status(200).send(ventas);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return ventas
            .create({
                producto_id: req.body.producto_id,
                cantidad: req.body.cantidad,
                total: req.body.total,
                forma_pago: req.body.forma_pago,
                fecha: req.body.fecha,
                usuario_id: req.body.usuario_id,
            })
            .then((ventas)=> res.status(201).send(ventas))
            .catch((error) => res.status(500).send(error));
    },
}