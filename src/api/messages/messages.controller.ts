import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getHello(): string {
    return 'test';
  }
}
