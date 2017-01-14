const router = require("express").Router();
const intDatabase = require("../database/intDatabase");


router.get('/getAllLists', (req, res, next) =>{
    return intDatabase.getAllLists().then( result => {
        res.json(result);
    }).catch( error => {
        res.json(error);
    });
});


router.post('/addList', (req, res, next) => { 
    return intDatabase.addList(req.body.title).then( result => {
        res.json(result);
    }).catch( error => {
        res.json(error);
    });
});

router.delete('/removeList', (req, res, next) => {
    return intDatabase.removeList(req.query['listId']).then( result => {
        res.json(result);
    }).catch( error => {
        res.json(error);
    });
});


router.post('/addTodo', (req, res, next) => {
    return intDatabase.addTodoItem(req.body.listId, req.body.todo).then( result => {
        res.json(result.todos[result.todos.length-1]);
    }).catch( error => {
        res.json(error);
    });
});

router.delete('/removeTodo', (req, res, next) => {
    return intDatabase.removeTodoItem(req.query['listId'], req.query['todoId']).then( result => {
        res.json(result);
    }).catch( error => {
        res.json(error);
    });
});

module.exports = router;