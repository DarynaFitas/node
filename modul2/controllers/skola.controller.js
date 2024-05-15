const skolaService = require('../services/skola.service');
const createError = require('http-errors');

async function createSkola(req, res, next) {
    try {
        const skolaId = await skolaService.create(req.body);
        res.status(201).json({ skolaId });
    } catch (error) {
        next(error);
    }
}

async function getSkola(req, res, next) {
    try {
        const { searchString, page, perPage } = req.query;
        const result = await skolaService.find({ searchString, page, perPage });
        res.json(result);
    } catch (error) {
        next(error);
    }
}

async function getSkolaById(req, res, next) {
    try {
        const skola = await skolaService.findById(req.params.skolaId);
        if (!skola) {
            throw createError.NotFound("Skola not found");
        }
        res.json(skola);
    } catch (error) {
        next(error);
    }
}

async function updateSkola(req, res, next) {
    try {
        const skola = await skolaService.findByIdAndUpdate(req.params.skolaId, req.body);
        if (!skola) {
            throw createError.NotFound("Skola not found");
        }
        res.json(skola);
    } catch (error) {
        next(error);
    }
}

async function deleteSkola(req, res, next) {
    try {
        const skola = await skolaService.findByIdAndDelete(req.params.skolaId);
        if (!skola) {
            throw createError.NotFound("Skola not found");
        }
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createSkola,
    getSkola,
    getSkolaById,
    updateSkola,
    deleteSkola,
};