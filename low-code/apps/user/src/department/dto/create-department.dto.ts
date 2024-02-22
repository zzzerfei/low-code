import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateDepartmentDto {
  @IsNotEmpty()
  @ApiProperty({ example: '部门1' })
  name: string;
}
