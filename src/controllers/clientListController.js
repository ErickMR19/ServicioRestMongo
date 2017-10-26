const mongoose = require('mongoose'),
  Client = mongoose.model('Clients');

const helperError = (arr) => Object.entries(arr.errors).map( error => error[1].message ); 

module.exports.list_all_clients = (req, res) => {
  Client.find({}, function (err, clients) {
    if (err) {
      res.send(helperError(err));
    }
    res.json(clients);
  });
};

module.exports.create_new_client = (req, res) => {
  var new_client = new Client(req.body);
  new_client.save(function (err, client) {
    if (err) {
      res.send(helperError(err));
    }
    res.json(client);
  });
};

module.exports.get_client_information = (req, res) => {
  Client.findOne({ 'idCliente': req.params.clienteId }, function (err, client) {
    
    if (err || !client){
      client = { error : 'Cliente no existe'};
    }
    
    res.json(client);
  });
};