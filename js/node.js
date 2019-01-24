const loadTemplate = require('./templateLoader');
const getFormDataAsJSON = require('./getFormDataAsJSON');
const simpleConfig = require('./simpleConfig');

var addNode = function (id) {
    loadTemplate('layout', 'render').then(() =>
        loadTemplate('addNode', 'content')
    ).then(() => {
        newNode(id);
    })
};


function newNode(id) {

    var formNewNode = document.getElementById("formNewNode");

    formNewNode.addEventListener('submit', function (event) {
        event.preventDefault();

        var nodo = getFormDataAsJSON(formNewNode,true);
            nodo.id = id;
          node= JSON.stringify(nodo);
        var config = {
            headers: {'Content-Type': 'application/json'}
          };

        axios.post('api/current/node/add', node, config).then(() => {
            window.location.assign('#/tree/'+ id+'/1');
        });

    }, false);

};


module.exports = addNode;