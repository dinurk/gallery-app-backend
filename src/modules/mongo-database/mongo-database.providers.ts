import { DataSource } from 'typeorm';

export const mongoDatabaseProviders = [
  {
    provide: 'DATA_SOURCE_MONGO',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'pictures',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
