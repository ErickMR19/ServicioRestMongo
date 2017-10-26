module.exports = function() {
    const   express = require('express'),
            app = express(),
            port = process.env.PORT || 8888,
            mongoose = require('mongoose'),
            Client = require('./src/models/clientListModel'), 
            bodyParser = require('body-parser');

            
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://win:win@ds044689.mlab.com:44689/prueba_smartsoft', { useMongoClient: true }); 

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    
    var router = require('./src/routes/clientListRouter');
    router(app);

    app.listen(port);
}
