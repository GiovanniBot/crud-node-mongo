# POC CRUD: Node.js - Express.js - MongoDB

## Util commands
1. ./mongod --dbpath [PATH]
2. brew services start mongodb-community@6.0 || brew services stop mongodb-community@6.0
3. mongosh

Enter in your MongoDB folder and run the first command. This sets the path where your MongoDB data will be stored.
The MongoDB default port is 27017. If this port is occupied, or you have another mongoDB running on your machine, use another port with -port [PORT] in the command.

The second command will start the MongoDB via homebrew and now on you'll be able to manage your databases through the third command "mongosh".