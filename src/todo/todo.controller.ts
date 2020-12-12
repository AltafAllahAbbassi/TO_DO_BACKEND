import { Body, Controller, Get, NotFoundException, Param, Post ,Delete, Put} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo-dto';
import { UpdateTodoDto } from './dto/update-todo-dto';
import { Todo } from './models/todo';

@Controller('todo')
export class TodoController {
    private todos:Todo[]=[]
    //constructor(){}

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

    @Get()
    getAllTodos(){
        return this.todos;
    } 

    @Get(':id')
    getTodoById(
        @Param('id') id:string
    ){
        return this.findTodo(id)
       

    }

    @Post()
    addTodo(
        @Body() newTodo:CreateTodoDto
    ){
        const {name ,description}= newTodo
        const todo = new Todo()
        todo.name=name
        todo.description=description
        this.todos.push(todo)
        
        return todo

    }

    @Delete(':id')
    deleteTodo( 
        @Param('id')id:string
    ){
        const todo= this.findTodo(id);
        this.todos.splice(this.todos.indexOf(todo),1)
        return this.todos


    }

    @Put(':id')
    updateTodo(
        @Param('id') id:string,
         @Body() newTodo:UpdateTodoDto
    ){

        const {name, description,status}=newTodo
        const todo=this.findTodo(id)

        todo.name=name?name:todo.name
        todo.description=description?description:todo.description
        todo.status=status?status:todo.status

        return todo
    }
     
}
