import { Controller, Param, Get } from '@nestjs/common';
import { LogementsService } from './logements.service';


@Controller('logements')
export class LogementsController {

    constructor(private readonly logementsService: LogementsService) { }

    @Get()
    async getLogements() {
        return this.logementsService.getLogements();
    }

    @Get(':id')
    async getLogement(@Param('id') id: string) {
        return this.logementsService.getLogement(id);
    }

}