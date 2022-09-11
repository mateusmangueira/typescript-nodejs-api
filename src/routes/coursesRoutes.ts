import { Router } from 'express';
import { courseController } from '../controllers/courses.controller';

const courseRoutes: Router = Router();

courseRoutes.get('/courses', courseController.find);

courseRoutes.post('/courses', courseController.create);

courseRoutes.patch('/courses/:id', courseController.update);

courseRoutes.delete('/courses/:id', courseController.delete);

export { courseRoutes };
