import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
// import { DepartmentModule } from '../department/department.module';
import { DatabaseModule } from '@comm/comm/database/database.module';
import { DepartmentService } from '../department/department.service';
import { DepProviders } from '../department/department.providers';
import { DepartmentModule } from '../department/department.module';

@Module({
  imports: [DatabaseModule, DepartmentModule],
  controllers: [UserController],
  providers: [
    ...UserProviders,
    ...DepProviders,
    UserService,
    DepartmentService,
  ],
  exports: [UserService],
})
export class UserModule {}
