module.exports = {

    checkStatus(req, res) {
        res.status(201).send({
            "name": req.store.posts[req.store.posts.length - 1].name,
            "status": req.store.posts[req.store.posts.length - 1].status})
    },
    updatePost(req, res) {
        var resetStatus = req.params.postId
        req.store.posts[req.store.posts.length - 1].status = resetStatus
        res.status(200).send('updated status')
    },
    dellJobAssistAPIStatus(req, res) {
        res.status(201).send({
            "name": req.store.posts1[req.store.posts1.length - 1].name,
            "status": req.store.posts1[req.store.posts1.length - 1].status})
    },
    updateDellJobAssistAPIStatus(req, res) {
        var resetStatus = req.params.postId
        req.store.posts1[req.store.posts1.length - 1].status = resetStatus
        res.status(200).send('updated status')
    }
}
