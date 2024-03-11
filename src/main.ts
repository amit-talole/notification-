import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';
import type { CorsConfig, NestConfig } from './common/configs/config.interface';

async function bootstrap() {
  await initServer(AppModule, process.env.AUTH || 4000, 'Microservices');

  async function initServer(module: any, port: any, name: string) {
    // API Serve
    const app = await NestFactory.create(module, {
      // logger: false,
    });

    app.use(urlencoded({ extended: true, limit: '50mb' }));
    app.use(
      json({
        limit: '50mb',
      }),
    );

    // enable shutdown hook
    app.enableShutdownHooks();

    const configService = app.get(ConfigService);
    const nestConfig = configService.get<NestConfig>('nest');
    const corsConfig = configService.get<CorsConfig>('cors');
    // Cors
    if (corsConfig.enabled) {
      app.enableCors();
    }
    await app.listen(port || nestConfig.port).then(() => {
      console.log(name + ' Server running on port:' + port);
    });
  }
}
bootstrap();
