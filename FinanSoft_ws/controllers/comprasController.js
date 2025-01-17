const compras = require('../models').compras_model;

module.exports = {
    list(req, res) {
        return compras
            .findAll({})
            .then(compras => {
                res.status(200).json(compras);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    },

    getById(req, res) {

        console.log(req.params.id);
        return compras
            .findByPk(req.params.id)
            .then((compras) => {
                console.log(compras);
                if (!compras) {
                    return res.status(404).send({
                        message: 'compras Not Found',
                    });
                }
                return res.status(200).send(compras);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return compras
            .create({
                producto_id: req.body.producto_id,
                cantidad: req.body.cantidad,
                precio_compra: req.body.precio_compra,
                proveedor_id: req.body.proveedor_id,

            })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(400).send(error));
    },

}