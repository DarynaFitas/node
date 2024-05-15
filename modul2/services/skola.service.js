const skolaModel = require('../models/skola.model');

async function create(skola) {
    const createdskola = await skolaModel.create(skola);
    return createdskola._id;
}

async function find({ searchString = '', page = 1, perPage = 20 }) {
    const filter = {
        lastName: { $regex: `^${searchString}`, $options: 'gi' },
    };

    const items = await skolaModel.find(filter)
            .select('-__v')
            .skip((page - 1) * perPage)
            .limit(Number(perPage));
    const count = await skolaModel.countDocuments(filter);

    return { items, count };
}

async function findById(id) {
    return skolaModel.findById(id).select('-__v');
}

async function findByIdAndUpdate(id, update) {
    return skolaModel.findByIdAndUpdate(id, update, { upsert: false, new: true }).select('-__v');
}

async function findByIdAndDelete(id) {
    return skolaModel.findByIdAndDelete(id);
}

async function findOne(filter) {
    return skolaModel.findOne(filter).select('-__v');
}

module.exports = {
    create,
    find,
    findById,
    findByIdAndUpdate,
    findByIdAndDelete,
    findOne,
};
