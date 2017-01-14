# TODO-list-app

## Requirements
- Nodejs **(v6+)**
- MongoDB **(v3.2.4+)**
- NPM
- Bower

## Run the project
```
$ npm install
$ bower install
$ mongod
$ npm start
```
- The server will run on - **localhost:3000**

## API Calls
- **/getAllLists** - GET
- **/addList** - POST - ( **title**[String] )
- **/removeList** - DELETE - ( **listId**[String] )
- **/addTodo** - POST - ( **listId**[String], **todo**[Object:{ **text**[String] }] )
- **/removeTodo** - DELETE ( **listId**[String],**todoId**[String] )