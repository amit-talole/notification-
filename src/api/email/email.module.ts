import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
// import { EmailService } from './email.service';
import { BullModule } from '@nestjs/bull';
import { EmailProcessor } from './email.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  controllers: [EmailController],
  providers: [EmailProcessor],
})
export class EmailModule {}
