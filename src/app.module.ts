import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { PicturesModule } from './modules/pictures/pictures.module';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [
    PicturesModule,
    RouterModule.register([
      {
        path: 'pictures',
        module: PicturesModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
