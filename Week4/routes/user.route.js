import express from  "express"
import userAuthMiddleware from "../middleware/user.js";
const router = express.Router();


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userAuthMiddleware ,(req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userAuthMiddleware , (req, res) => {
    // Implement fetching purchased courses logic
});


export default router;