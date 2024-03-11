import { Controller, Get } from '@nestjs/common';
import { PushNotificationService } from './push-notification.service';

@Controller('pushNotification')
export class PushNotificationController {
  constructor(
    private readonly pushNotificationService: PushNotificationService,
  ) {}
  @Get()
  getHello(): string {
    return this.pushNotificationService.getHello();
  }
}
