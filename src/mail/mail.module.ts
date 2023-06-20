import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailService } from './mail.service';

@Module({
  imports: [ConfigModule],
})
export class MailModule {
  static register(): DynamicModule {
    return {
      module: MailModule,
      providers: [MailService],
      exports: [MailService],
    };
  }
}
