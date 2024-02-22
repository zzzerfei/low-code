import { Department } from './department.mysql.entity';

export const DepProviders = [
  {
    provide: 'DEP_REPOSITORY',
    useFactory: async (AppDataSource) =>
      await AppDataSource.getRepository(Department),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
