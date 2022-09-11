import { uuid } from "uuidv4";

export class User {
  public readonly userId: string;
  public name: string;
  public cpf: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: Omit<User, 'userId'>, userId?: string) {
    Object.assign(this, props);

    if (!userId) {
      this.userId = uuid();
    }
  }


}