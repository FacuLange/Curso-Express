
console.log('Hola')

const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const morgan = require ('morgan')
const path = require("path")
require('ejs')

const app = express()

const HomeRoutes = require('../Routes/home')
const UserRoutes = require ('../Routes/users')
const { patch } = require("../Routes/home")

c
//settings
app.set('appName', 'Express Course')
app.set('port', 3000)
app.set('case sensitive routing', true)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views' ))


//middlewares
app.use(morgan('dev'))
app.use(express.json())

app.use(HomeRoutes)
app.use(UserRoutes)

//routs



app.get('/products', (req, res) => {
res.json(products)
} ) 

app.post('/products', (req, res) => {
    const newProduct = {...req.body, id: products.length + 1}
    products.push(newProduct)
    res.send(newProduct)
} )

app.delete('/products/:id', (req, res) => {
const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
    );
    if (!productFound)
    return res.status(204).json({
        message: "product not found",
    });
    const newProduct = products.filter(p => p.id !==req.params.id)
    console.log(newProducts)
    res.send('eliminando products');
} );

app.put('/products/:id', (req, res) => {
const newData =req.body
    const productFound = products.find(
        (product) => product.id === parseInt(req.params.id)
        );
        if (!productFound)
        return res.status(204).json({
            message: "product not found",
        });
        products = products.map(p => p.id === parseInt (req.params.id) ? {...p, ...newData} : p)


    res.send('actualizando products') 
})

app.get('/products/:id', (req, res) => {
    console.log(req.params.id)
    const  productFound = products.find(function(product) {
        return product.id === parseInt( req.params.id) 
    })
    if (!productFound) return res.status(404) ({
        message: "ProductFound"
    })
    console.log(productFound)
    res.json(productFound)
} )




app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);