import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { TestmonialModule } from './testmonial/testmonial.module';
import { PartnerModule } from './partner/partner.module';
import { ActivityModule } from './activity/activity.module';
import { AnimateurModule } from './animateur/animateur.module';
import { NewletterModule } from './newletter/newletter.module';
import { ContactModule } from './contact/contact.module';
import { SoutenirModule } from './soutenir/soutenir.module';
import { MailModule } from './mail/mail.module';
import { ImageModule } from './image/image.module';

const isProduction = process.env.NODE_ENV === "production";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('database.url'),
        ssl: isProduction ? {
          rejectUnauthorized: false,
        } : null,
        autoLoadEntities: true,
        synchronize: true,
      }), 
      inject: [ConfigService],
    }),

    CommonModule,
    UserModule, 
    AuthModule, 
    EventsModule, 
    TestmonialModule, 
    PartnerModule, 
    ActivityModule, 
    AnimateurModule, 
    NewletterModule, 
    ContactModule, 
    SoutenirModule, 
    MailModule, 
    ImageModule,
    
  ],
})
export class AppModule {}
