import { Module } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { TableController } from "./table.controller";
import { TableService } from "./table.service";


@Module({
    
    controllers:[TableController],
    providers:[TableService],
})
export class TableModule{}