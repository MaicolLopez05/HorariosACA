// Profesor - entidad Teacher

class Teacher {
    constructor(teacher_id, teacher_name, amount_hour, schedule_id) {
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
        this.amount_hour = amount_hour || 0;
        this.schedule_id = schedule_id;
    }
}

module.exports = Teacher;