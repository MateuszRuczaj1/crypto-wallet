/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CryptoSchema } from './crypto.schema';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Crypto',
        schema: CryptoSchema,
      },
    ]),
  ],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class CryptoModule {}
