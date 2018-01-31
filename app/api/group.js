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
            _id: 3,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 4,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 5,
            nome: 'Maria',
            genero: 'Feminino',
            cpf: '111-111-111-11',
            ddn: '20/10/1980',
            telefone: '0000-2938'
        },
        { 
            _id: 6,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 7,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 8,
            nome: 'Elias',
            genero: 'Masculino',
            cpf: '542-244-452-65',
            ddn: '19/03/1998',
            telefone: '8428-2938'
        },
        { 
            _id: 9,
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
