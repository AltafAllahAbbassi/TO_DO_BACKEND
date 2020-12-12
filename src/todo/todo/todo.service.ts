import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from '../dto/create-todo-dto';
import { UpdateTodoDto } from '../dto/update-todo-dto';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
    private todos:Todo[]=[]

    private findTodo(id:string):Todo{
        const todo= this.todos.find(
            (todo)=>todo.id===id
        )
        if (todo){
            return todo
        }
        else {
            throw new NotFoundException(`le todo ${id} n'existe pas`)
        }

    }
    getTodo(id:string):Todo{
        return this.findTodo(id)
    }

    addTodo(newTodo:CreateTodoDto):Todo{
        const {name ,description}= newTodo
        const todo = new Todo()
        todo.name=name
        todo.description=description
        this.todos.push(todo)
        
        return todo
    }

    deleteTodo(id:string):Todo[]{
        const todo= this.findTodo(id);
        this.todos.splice(this.todos.indexOf(todo),1)
        return this.todos

    }

    updateTodo(id:string,newTodo:UpdateTodoDto):Todo{
        const {name, description,status}=newTodo
        const todo=this.findTodo(id)

        todo.name=name?name:todo.name
        todo.description=description?description:todo.description
        todo.status=status?status:todo.status

        return todo
    }
    getAllTodos():Todo[]{
        return this.todos;

    }


}
