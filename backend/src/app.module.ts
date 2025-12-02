import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule } from '@nestjs/config';
import { CryptoModule } from './crypto/crypto.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL!),
    CryptoModule,
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
