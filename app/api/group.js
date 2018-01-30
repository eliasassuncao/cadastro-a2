var api = {};

api.list = function(req, res) {

    var group = [
        { 
            _id: 1,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        {
            _id: 2,
            nome: 'João',
            genero: 'Masculino',
            cpf: '343-244-365-65',
            ddn: '19/03/1998',
            telefone: '9238-2938'
        },
        { 
            _id: 1,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 1,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 1,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 1,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 1,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 1,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 1,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        }
    ];

    res.json(group);
};

module.exports = api;
