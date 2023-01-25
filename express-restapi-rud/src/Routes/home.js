const {Router} = require ('express')

const router = Router()

const axios = require('axios')


router.get("/", (req, res) => {
    let isActive = true

    res.render('index', {
        title: "Index page",
        isActive
    })
})

router.all('/about', (req, res) => {

    const title = 'Mi pagina creada desde Express 2'

    res.render('about', { title: title})
});

router.get("/dashboard", (req, res) => {
    res.render('dashboard')
});

router.get("/post", async (req, res) => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    res.render('post', {
        post: response.data
    })
});

router.get("/users", (req, res) => {
res.render('users')
});


module.exports = router