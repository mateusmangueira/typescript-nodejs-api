import { uuid } from "uuidv4";

export class Course {
  public readonly courseId: string;
  public name: string;
  public description: string;
  public price: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: Omit<Course, 'courseId'>, courseId?: string) {
    Object.assign(this, props);

    if (!courseId) {
      this.courseId = uuid();
    }
  }




}