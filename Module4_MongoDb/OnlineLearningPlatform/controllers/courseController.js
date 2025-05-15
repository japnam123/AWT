const Course = require('../models/courseModel');
const Enrollment = require('../models/enrollmentModel');

const createCourse = async (req, res) => {
    const { title, description } = req.body;
    const course = new Course({ title, description, instructor: req.user._id });
    await course.save();
    res.status(201).send(course);
};

const enrollInCourse = async (req, res) => {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).send('Course not found');

    course.students.push(req.user._id);
    await course.save();

    const enrollment = new Enrollment({ student: req.user._id, course: courseId });
    await enrollment.save();

    res.status(200).send('Enrolled successfully');
};

module.exports = { createCourse, enrollInCourse };
