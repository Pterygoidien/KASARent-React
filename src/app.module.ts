import { Module } from '@nestjs/common';

import { LogementsModule } from './features/logements/logements.module';

@Module({
  imports: [LogementsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
