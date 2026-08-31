// Teacher Routes - Defines the API endpoints for the modulo

const express = require('express');
const router = express.Router();
const controller = require('../controllers/teacher.controller');

// GET direccion:/api/teachers - Get all teachers
router.get('/', controller.list);

// GET direccion: /api/teachers/:id - Get a teacher by ID
router.get('/:id', controller.getById);

// POST direccion: /api/teachers - Create a new teacher
router.post('/', controller.create);

// PUT direccion:/api/teachers/:id - Update a teacher
router.put('/:id', controller.update);

// DELETE direccion:/api/teachers/:id - Delete a teacher
router.delete('/:id', controller.remove);

module.exports = router;