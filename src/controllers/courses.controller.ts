import { Request, Response } from 'express';

class CourseController {
  constructor() { }

  public find(req: Request, res: Response) {
    res.json({
      message: 'Courses have been found',
      courses: [
        {
          id: 1,
          name: 'Angular',
          description: 'Angular is a complete rewrite of the platform that powers Google Chrome.',
          startDate: '2020-01-01',
          endDate: '2020-01-01',
          price: 100,
          createdAt: '2020-01-01',
          updatedAt: '2020-01-01',
        },
      ],
      method: req.method
    });
  }

  public create(req: Request, res: Response) {
    const { name, description, price } = req.body;
    res.json({
      message: 'Course has been created',
      course: {
        name,
        description,
        price,
      },
      method: req.method
    });
  }

  public update(req: Request, res: Response) {
    res.json({
      message: 'Course Updated',
      method: req.method
    });
  }

  public delete(req: Request, res: Response) {
    res.json({
      message: 'Course Deleted',
      method: req.method
    });
  }
}

export const courseController: CourseController = new CourseController();

