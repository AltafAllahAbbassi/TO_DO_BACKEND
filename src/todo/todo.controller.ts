import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo-dto';
import { UpdateTodoDto } from './dto/update-todo-dto';
import { TodoService } from './todo/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.getTodo(id);
  }

  @Post()
  addTodo(@Body() newTodo: CreateTodoDto) {
    return this.todoService.addTodo(newTodo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() newTodo: UpdateTodoDto) {
    return this.todoService.updateTodo(id, newTodo);
  }
}
