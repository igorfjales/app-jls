const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { pk_id_legal_client, password } = request.body;

        const legal_client = await connection('tb_legal_client')
            .where('pk_id_legal_client', pk_id_legal_client)
            .and
            .where('password', password)
            .select('name', 'pk_id_legal_client')
            .first();

        if (!legal_client) {
            return response.status(400).json({ error: 'No legal client found with this ID.' })
        }
        return response.json(legal_client);
    }
}