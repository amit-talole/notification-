// import { Injectable } from '@nestjs/common';
// import { Queue } from 'bull';
// import { InjectQueue } from '@nestjs/bull';

// @Injectable()
// export class EmailService {
//   constructor(@InjectQueue('email') private emailQueue: Queue) {}
//   async test() {
//     const ok = await this.emailQueue.add('test', {
//       msg: 'test',
//     });
//     console.log('ok',ok);
    
//   }
// }
