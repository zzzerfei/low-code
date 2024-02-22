import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DepartmentService } from '../department/department.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.mysql.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private departmentService: DepartmentService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const dep = await this.departmentService.findOne(
      createUserDto.departmentId,
    );
    return this.userRepository.save({
      ...createUserDto,
      department: dep,
    });
  }

  findAll() {
    return this.userRepository.find({ relations: ['department'] });
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    console.log('remove: id', id);
    return this.userRepository.delete(id);
  }
}
