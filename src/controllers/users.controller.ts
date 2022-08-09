import { Request, Response } from 'express';

class UserController {
  constructor() { }

  public find(req: Request, res: Response) {
    return res.json({
      message: 'Users have been found',
      users: [
        {
          id: 1,
          name: 'Mateus',
          cpf: '098.546.254-00',
        },
      ],
      method: req.method,
    });
  }

  public create(req: Request, res: Response) {
    const { name, cpf } = req.body;
    return res.json({
      message: 'User has been created succefully',
      user: {
        name,
        cpf,
      },
      method: req.method,
    });
  }

  public update(req: Request, res: Response) {
    const { id } = req.params;
    return res.json({
      message: `User ${id} has been updated`,
      method: req.method,
    });
  }

  public delete(req: Request, res: Response) {
    const { id } = req.params;
    return res.json({
      message: `User ${id} has been deleted`,
      method: req.method,
    });
  }
}

export const userController: UserController = new UserController();
