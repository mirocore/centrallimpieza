

const usersIndex = ( req, res ) => {
    res.json({
        ok: true,
        msg: "Listado de todos los usuarios"
    })
}

const usersStore = ( req, res ) => {

    const usuario = req.body;


    res.json({
        ok: true,
        msg: "Crear nuevo usuario",
        usuario
    })
}

const usersUpdate = ( req, res) => {
    res.json({
        ok: true,
        msg: "Editar usuario"
    })
}

const usersPatch = ( req, res) => {
    res.json({
        ok: true,
        msg: "Patch usuario"
    })
}

const usersDestroy = ( req, res) => {
    res.json({
        ok: true,
        msg: "Eliminar usuario"
    })
}

module.exports = {
    usersIndex,
    usersStore,
    usersUpdate,
    usersPatch,
    usersDestroy,
}