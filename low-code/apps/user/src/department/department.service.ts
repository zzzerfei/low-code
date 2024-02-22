import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Department } from './department.mysql.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DEP_REPOSITORY')
    private depRepository: Repository<Department>,
  ) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    console.log(createDepartmentDto);
    return this.depRepository.save(createDepartmentDto);
  }

  findAll() {
    return this.depRepository.find({ relations: ['users'] });
  }

  findOne(id: number) {
    return this.depRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.depRepository.update({ id }, updateDepartmentDto);
  }

  remove(id: number) {
    return this.depRepository.delete(id);
  }
}
