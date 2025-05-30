import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  domainName?: string;
  mailgunAPIKey: string;
  mailgunDomainName: string;
  maigunRoute?: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'local',
  domainName: process.env.DOMAIN_NAME || 'localhost',
  mailgunAPIKey: process.env.MAILGUN_API_KEY || '',
  mailgunDomainName: process.env.MAILGUN_DOMAIN_NAME || '',
  maigunRoute: process.env.MAILGUN_ROUTE || '',
};

export default config;
