import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';


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
        // host: configService.get<string>('database.host'),
        // port: configService.get<number>('database.port'),
        // username: configService.get<string>('database.user'),
        // password: configService.get<string>('database.password'),
        // database: configService.get<string>('database.db'), 
        autoLoadEntities: true,
        synchronize: true,
      }), 
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
