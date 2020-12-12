import { TodoStatusEnum } from '../ennums/status.enum';
import { v4 as uuidv4 } from 'uuid';
export class Todo {
  constructor(
    public id: string = uuidv4(),
    public name: string = '',
    public description: string = '',
    public createdAt: Date = new Date(),
    public status: TodoStatusEnum = TodoStatusEnum.waiting,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.status = status;
  }
}
