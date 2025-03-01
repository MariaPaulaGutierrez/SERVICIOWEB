const express = require("express");
const dbconnect = require("./config");
const { Model } = require("mongoose");
const ModelUser = require("./model");
const app = express();
const cors =require("cors");
const corsOptions={
    origin:"*",
}
app.use(cors(corsOptions))

const router = express.Router();

//Create
router.post('/', async(req, res) =>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
} )

//Consultar
router.get('/', async (req, res)=> {
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
})

//Consultar por Id
router.get('/:id', async (req, res)=> {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta)
})

//Actualizar
router.put('/:id', async (req, res)=> {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id},body);
    res.send(respuesta);
})

//Eliminar
router.delete('/:id', async (req, res)=> {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
})

app.use(express.json());
app.use(router);
app.listen(3005, ()=> {
    console.log("El servidor está en el puerto 3005")
})

dbconnect();