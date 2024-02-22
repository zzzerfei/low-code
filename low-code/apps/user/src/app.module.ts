import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
// import { UserService } from './user.service';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [UserModule, DepartmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
