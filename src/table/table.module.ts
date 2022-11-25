import { Module } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { TableController } from "./table.controller";


@Module({
    
    controllers:[TableController],
    providers:[],
})
export class TableModule{}