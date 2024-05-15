const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { skolaCreateSchema, skolaUpdateSchema } = require('../joi_validation_schemas/skola.schemas');
const skolaService = require('../services/skola.service');
const multer = require('multer');

const skolaByIdValidation = async (req, res, next) => {
    try {
        const { skolaId } = req.params;

        if (!skolaService.isValidObjectId(skolaId)) {
            throw createError.BadRequest("Skola id is not valid");
        }

        const skola = await skolaService.findById(skolaId);

        if (!skola) {
            throw createError.NotFound("Skola with such id not found");
        }

        next();
    } catch(err) {
        next(err);
    }
};

const skolaCreationDataValidation = async (req, res, next) => {
    try {
        const { error } = skolaCreateSchema.validate(req.body);

        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        next();
    } catch (err) {
        next(err);
    }
};

const skolaUpdateDataValidation = async (req, res, next) => {
    try {
        const { error } = skolaUpdateSchema.validate(req.body);

        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        const { skolaId } = req.params;
        const skola = await skolaService.findById(skolaId);

        if (!skola) {
            throw createError.NotFound("Skola with such id not found");
        }

        next();
    } catch (err) {
        next(err);
    }
};

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res, next) => {
    try {
        if (!req.file) {
            throw createError.BadRequest("No file uploaded");
        }

        const results = [];
        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                for (const result of results) {
                    await skolaService.create(result);
                }

                fs.unlinkSync(req.file.path);

                res.status(200).send("File uploaded and data imported successfully");
            });
    } catch (error) {
        next(error);
    }
});

module.exports = {
    skolaByIdValidation,
    skolaCreationDataValidation,
    skolaUpdateDataValidation,
    router
};
