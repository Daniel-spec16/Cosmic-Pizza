import dbConnect from "../../../util/mongo";
import Order from '../../../models/Order'

const handler = async (req, res) => {
    const {method, query: {id}} = req;

    await dbConnect();

    if (method === 'GET'){
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
        } catch (err){
            res.status(500).json(err)
        }
    }
    if (method === 'POST'){
        try {
            const order = await Order.create(req.body);
            res.status(201).json(order);
        } catch (err){
            res.status(500).json(err)
        }
    }
    if (method === 'DELETE'){

    }
}

export default handler;