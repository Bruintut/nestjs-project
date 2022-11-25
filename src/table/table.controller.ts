import { Controller, Get, Post, Body } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { CreateTableDto } from "./Dto/crreate-table.dto"
import { TableService } from "./table.service"


@ApiTags()
@Controller('table')
export class TableController {
    constructor(private tableService: TableService){}
    @Get()
    findAll(){
        return this.tableService.findAll()
        
    }

    @Post()
    create(@Body() createTableDto: CreateTableDto){
        return this.tableService.create(createTableDto)
    }
}