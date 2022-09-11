import { User } from "src/entities/User";

export interface IUsersRepository {
  save(user: User): Promise<User>;

  findByCpf(cpf: string): Promise<User | undefined>;

  findById(id: string): Promise<User | undefined>;

  findAll(): Promise<User[]>;
}