/* crypto.interface.ts */
import { Document } from 'mongoose';

export interface Crypto extends Document {
  sign: string;
  currentPriceUSD: number;
  name: string;
  lastUpdated: Date;
}
