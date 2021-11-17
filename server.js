const express = require('express')
const routes = require('./routes')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')

let store = {
  posts: [
    {
      name: 'Dell Job Assist API',
      status: 'Healthy'
    }
  ],
    posts1: [
        {
            name: 'Dell API',
            status: 'Healthy'
        }
    ]/*,
    requests: [
        {
            endpoint: 'URL',
            actionEndpoint: 'URL',
            notificationType: 'Email',
            status: 'healthy'
        }
    ]*/
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

app.get('/delljobassist', routes.health.dellJobAssistAPIStatus)
app.get('/delljobassist/:postId', routes.health.updateDellJobAssistAPIStatus)
/*
app.get('/saveRequest', routes.request.saveRequest)
app.get('/getRequest', routes.request.getRequest)
*/


app.listen(port)
console.log('Dell Job Assistant rest API server started on: ' + port);
