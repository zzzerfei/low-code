import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { BusinessException } from './common/exceptions/business.exception';

@Controller({
  path: 'user',
  version: '1',
})
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  @Version([VERSION_NEUTRAL, '1'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Version('2')
  findAll() {
    return this.appService.findAll();
  }

  // 伪造业务异常
  @Get('findBusinessError')
  @Version([VERSION_NEUTRAL, '1'])
  findBussindessError() {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch (err) {
      throw new BusinessException(err + '错误啦');
    }

    return this.appService.findAll();
  }

  // 测试环境配置
  @Get('getTestName')
  @Version([VERSION_NEUTRAL, '1'])
  getTestName() {
    return this.configService.get('TEST_VALUE').name;
  }
}
