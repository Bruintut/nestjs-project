import { Controller, Get, Post } from "@nestjs/common"

@Controller('table')
export class TableController {
    @Get()
    findAll(){
        return 'Find all'
    }

    @Post()
    create(){
        return 'create'
    }
}