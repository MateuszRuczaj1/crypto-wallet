/* eslint-disable prettier/prettier */
/* crypto.schema.ts */
import * as mongoose from 'mongoose';

export const CryptoSchema = new mongoose.Schema(
  {
    sign: String,
    currentPriceUSD: Number,
    name: String,
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'cryptocurrency',
  },
);
