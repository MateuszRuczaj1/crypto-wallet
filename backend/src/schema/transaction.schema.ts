import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose"
export enum TransactionType {
    BUY= "buy",
    SELL="sell",
    TRANSFER="transfer"
}
@Schema()
export class Transaction{
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Wallet'})
  walletId: mongoose.Types.ObjectId
  @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Cryptocurrency'})
  currencyId: mongoose.Types.ObjectId
  @Prop({type:Date, default:Date.now})
  createdAt: Date;
  @Prop()
  amount: number
  @Prop({enum: TransactionType})
  type: TransactionType
  @Prop()
  transactionPrice: number
}
export const TransactionSchema = SchemaFactory.createForClass(Transaction)