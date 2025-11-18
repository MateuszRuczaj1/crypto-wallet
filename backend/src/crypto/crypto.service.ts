/* crypto.service.ts */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crypto } from './crypto.interface';

@Injectable()
export class CryptoService {
  constructor(
    @InjectModel('Crypto') private cryptoModel: Model<Crypto>, // wstrzykujemy model, nie schema
  ) {}

  async getAllCrypto(): Promise<Crypto[]> {
    return this.cryptoModel.find().exec();
  }
}
