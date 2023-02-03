import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.MONGO_HOST,
      port: parseInt(process.env.MONGO_PORT),
      username: process.env.MONGO_USER,
      password: process.env.MONGO_PASS,
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT')
  }
}
