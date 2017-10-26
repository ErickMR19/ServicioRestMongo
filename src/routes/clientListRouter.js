module.exports = (app) => {
    const clientList = require("../controllers/clientListController");
    app.route('/clientes')
        .get(clientList.list_all_clients)
        .post(clientList.create_new_client);

    app.route('/cliente/:clienteId')
        .get(clientList.get_client_information);
};