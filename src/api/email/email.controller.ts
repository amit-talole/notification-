import { Controller, Post } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { EmailProcessor } from './email.processor';

@Controller('email')
export class EmailController {
  constructor(
    @InjectQueue('email') private emailQueue: Queue,
    private readonly emailProcessor: EmailProcessor,
  ) {}

  @Post('test')
  async test() {
    const ok = await this.emailQueue.add('test', {
      msg: 'test',
    });
    // console.log('ok', ok);
  }
}
