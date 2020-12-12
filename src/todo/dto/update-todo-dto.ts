import { TodoStatusEnum } from "../ennums/status.enum";
import { CreateTodoDto } from "./create-todo-dto";

export class UpdateTodoDto extends CreateTodoDto {
    status:TodoStatusEnum

}
