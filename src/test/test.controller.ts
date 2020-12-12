import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get()
    testGet():string {
        return 'test get'
    }
    @Post()
    testPost():string {
        return 'test post'
    }
    @Delete()
    testDelete():string {
        return 'test delete'
    }
    @Put()
    testPut():string {
        return 'test put'
    }
    @Patch()
    testPatch():string {
        return 'test patch'
    }
}
