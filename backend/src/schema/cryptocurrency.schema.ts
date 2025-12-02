import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class CryptoCurrency{
   @Prop()
   sign: string;
   @Prop()
   currentPriceUSD: number;
   @Prop()
   name: string;
   @Prop()
   lastUpdated: Date;
}
export const CryptoCurrencySchema = SchemaFactory.createForClass(CryptoCurrency)