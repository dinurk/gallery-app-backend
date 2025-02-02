import { Module } from '@nestjs/common';
import { PicturesController } from './controllers/pictures.controller';
import { PicturesService } from './services/pictures.service';
import { picturesProviders } from './pictures.providers';
import { MongoDatabaseModule } from '../mongo-database/mongo-database.module';

@Module({
  imports: [MongoDatabaseModule],
  controllers: [PicturesController],
  providers: [...picturesProviders, PicturesService],
})
export class PicturesModule {}
