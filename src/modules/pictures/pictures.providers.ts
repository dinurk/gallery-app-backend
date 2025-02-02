import { DataSource } from 'typeorm';
import { PictureEntity } from './entities/picture.entity';

export const picturesProviders = [
  {
    provide: 'PICTURES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PictureEntity),
    inject: ['DATA_SOURCE_MONGO'],
  },
];
