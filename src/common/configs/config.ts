import type { Config } from './config.interface';

const config: Config = {
  // Error email send
  errorEmailId: 'viraj@woyce.io,atalole@woyce.io,stilekar@woyce.io',

  // port
  nest: {
    port: 4000,
  },
  cors: {
    enabled: true,
  },
};
export default (): Config => config;
