export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  errorEmailId: string;
}

export interface NestConfig {
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
}
