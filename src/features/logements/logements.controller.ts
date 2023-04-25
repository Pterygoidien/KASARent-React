import { Controller, Param, Get, UseInterceptors } from '@nestjs/common';
import { TimeoutInterceptor } from '../../utils/interceptors/TimeoutInterceptor';
import { LogementsService } from './logements.service';


@Controller('logements')
export class LogementsController {

    constructor(private readonly logementsService: LogementsService) { }

    @Get()
    @UseInterceptors(TimeoutInterceptor)
    async getLogements() {

        return this.logementsService.getLogements();



    }

    @Get(':id')
    async getLogement(@Param('id') id: string) {
        return this.logementsService.getLogement(id);
    }

}