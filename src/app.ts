import express from "express";
import { courseRoutes } from "./routes/coursesRoutes";
import { userRoutes } from "./routes/userRoutes";

export class App {
  public server: express.Application;
  constructor() {
    this.server = express();
    this.middlaware();
    this.routes();
  }

  private middlaware(): void {
    this.server.use(express.json());
  };

  public routes(): void {
    this.server.use(userRoutes);
    this.server.use(courseRoutes);
  }
}