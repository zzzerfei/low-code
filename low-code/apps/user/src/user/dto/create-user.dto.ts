import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'zerfei' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ example: '二肥' })
  username: string;

  @ApiProperty({ example: 'cookie' })
  enName?: string;

  @IsNotEmpty()
  @ApiProperty({ example: '' })
  email: string;

  @ApiProperty({ example: '' })
  avatar?: string;

  @ApiProperty({ example: '' })
  mobile?: string;

  @ApiProperty({ example: 0 })
  departmentId?: number;
}
