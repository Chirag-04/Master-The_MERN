import express from "express"
import { addLecture, createCourse, enrollInCourse, getCourses } from "./course.controller.js";

const router =  express.Router();

// POST /api/courses - Create a course (Teacher only)
router.post('/create', createCourse);

// POST /api/courses/:id/addlecture - Add a lecture to a course (Teacher only)
router.post('/:id/addlecture', addLecture);

// GET /api/courses - Get all courses
router.get('/', getCourses);

// POST /api/courses/:id/enroll - Enroll in a course (Student only)
router.post('/:id/enroll', enrollInCourse);

export default router;