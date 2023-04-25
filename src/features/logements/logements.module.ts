import { Module } from "@nestjs/common";
import { LogementsController } from "./logements.controller";
import { LogementsService } from "./logements.service";

@Module({
    imports: [],
    controllers: [LogementsController],
    providers: [LogementsService],
})
export class LogementsModule { }