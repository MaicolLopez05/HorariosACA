// Teacher Controller - Handles logica de negocio for the Teacher module

const Teacher = require('../models/teacher.model');

// Simulated in-memory database todavia no vamos a tocar DBs
let teachers = [
    new Teacher(1, 'Carlos García', 20, 1),
    new Teacher(2, 'María López', 18, 1),
    new Teacher(3, 'Juan Pérez', 22, 2),
];

let nextId = 4;

// GET - Get all teachers
exports.list = (req, res) => {
    res.json(teachers);
};

// GET - Get teacher by ID
exports.getById = (req, res) => {
    const id = parseInt(req.params.id);
    const teacher = teachers.find(t => t.teacher_id === id);

    if (!teacher) {
        return res.status(404).json({ message: 'Teacher not found' });
    }

    res.json(teacher);
};

// POST - Create new teacher
exports.create = (req, res) => {
    const { teacher_name, amount_hour, schedule_id } = req.body;

    if (!teacher_name || !schedule_id) {
        return res.status(400).json({ message: 'teacher_name and schedule_id are required' });
    }

    const newTeacher = new Teacher(nextId++, teacher_name, amount_hour || 0, schedule_id);
    teachers.push(newTeacher);

    res.status(201).json({ message: 'Teacher created successfully', teacher: newTeacher });
};

// PUT - Update teacher
exports.update = (req, res) => {
    const id = parseInt(req.params.id);
    const index = teachers.findIndex(t => t.teacher_id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Teacher not found' });
    }

    const { teacher_name, amount_hour, schedule_id } = req.body;

    if (teacher_name) teachers[index].teacher_name = teacher_name;
    if (amount_hour !== undefined) teachers[index].amount_hour = amount_hour;
    if (schedule_id) teachers[index].schedule_id = schedule_id;

    res.json({ message: 'Teacher updated successfully', teacher: teachers[index] });
};

// DELETE - Delete teacher
exports.remove = (req, res) => {
    const id = parseInt(req.params.id);
    const index = teachers.findIndex(t => t.teacher_id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Teacher not found' });
    }

    const deleted = teachers.splice(index, 1);
    res.json({ message: 'Teacher deleted successfully', teacher: deleted[0] });
};