const productos = require('../models').productos_model;

module.exports = {
    list(req, res) {
        return productos
            .findAll({})
            .then(productos => {
                res.status(200).json(productos);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    },

    getById(req, res) {

        console.log(req.params.id);
        return productos
            .findByPk(req.params.id)
            .then((productos) => {
                console.log(productos);
                if (!productos) {
                    return res.status(404).send({
                        message: 'productos Not Found',
                    });
                }
                return res.status(200).send(productos);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return productos
            .create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                cantidad: req.body.cantidad,
                precio_venta: req.body.precio_venta,
                precio_compra: req.body.precio_compra,
                proveedor_id: req.body.proveedor_id,
                categoria : req.body.categoria,

            })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(400).send(error));
    },


}