import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepProviders } from './department.providers';
import { DatabaseModule } from '@comm/comm/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DepartmentController],
  providers: [...DepProviders, DepartmentService],
  exports: [DepartmentService],
})
export class DepartmentModule {}
