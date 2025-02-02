import { Module } from '@nestjs/common';
import { mongoDatabaseProviders } from './mongo-database.providers';

@Module({
  providers: [...mongoDatabaseProviders],
  exports: [...mongoDatabaseProviders],
})
export class MongoDatabaseModule {}
