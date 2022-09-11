import { Course } from "src/entities/Course";

export interface ICourseRepository {
  save(course: Course): Promise<Course>;

  findById(id: string): Promise<Course | undefined>;

  findAll(): Promise<Course[]>;
}