const express = require('express')
const routes = require('./routes')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')

let store = {
  posts: [
    {
      name: 'API name',
      status: 'Healthy'
    }
  ]
}

let app = express()

app.use(bodyParser.json())
app.use(errorhandler())

app.use((req, res, next) => {
    req.store = store
    next()
})


app.get('/health', routes.health.checkStatus)
app.get('/health/:postId', routes.health.updatePost)




app.listen(port)
console.log('Dell Job Assistant rest API server started on: ' + port);
