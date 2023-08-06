require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
// const {PORT} = process.env
// const {register, login, logout} = require('./controllers/auth.js')
// const {getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost} = require('./controllers/posts.js')
// const {isAuthenticated} = require('./middleware/isAuthenticated.js')

const {sequelize} = require('./util/database')
// const {User} = require('./models/user')
// const {Post} = require('./models/post')

// User.hasMany(Post)
// Post.belongsTo(User)

app.use(express.static(`${__dirname}/server`))

app.use(express.json())
app.use(cors())

// app.get('*', function (req, res) {
//     res.sendFile(path.resolve(`../src/index.js`));
//   });

// // Auth
// app.post('/register', register)
// app.post('/login', login)

// //Get all Posts
// app.get('/posts', getAllPosts)


// //AUTH Post usage
// app.get('/userPosts/:userId', getCurrentUserPosts)
// app.post('/posts', isAuthenticated, addPost)
// app.put('/posts/:id', isAuthenticated, editPost)
// app.delete('/posts/:id', isAuthenticated, deletePost)


sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log(`db sync successful & server running on port ${PORT}`))
})
.catch(err => console.log(err))