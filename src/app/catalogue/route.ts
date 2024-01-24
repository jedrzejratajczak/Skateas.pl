import { NextApiRequest, NextApiResponse } from 'next';
const {
    addItem,
    updateItem,
    getAllItems,
    getItem,
    deleteItem,
} = require('../../../server/controllers/itemControllers');
const { itemModel } = require('../../../server/models/item');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    switch (req.method) {
        case METHOD_POST:
            try {
                const data = addItem(req.body);
                res.status(201).json(data);
            } catch (error) {
                if (error.code)
                    res.status(error.code).json({ message: error.message });
                else
                    res.status(500).json({ error: 'Internal Server Error' });
            }
            break;

        case METHOD_GET:
            try {
                const data = getItem();
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
            break;

        case METHOD_PUT:
            try {
                const data = updateItem(req.body);
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
            break;

        case METHOD_DELETE:
            try {
                const data = deleteItem();
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
            break;

        default:
            res.status(405).json({ error: 'Method Not Allowed' });
    }
}
