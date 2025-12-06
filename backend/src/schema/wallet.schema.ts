import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose"
@Schema()
export class Wallet {
    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'User'} )
    userId: mongoose.Types.ObjectId;
    @Prop([{
        currencyId: {type: mongoose.Schema.Types.ObjectId, ref: 'Cryptocurrency'},
        amount: {type:Number, default: 0}
    }])
    balances: {
    currencyId: mongoose.Types.ObjectId;
    amount: number;
     }[];
}
export const WalletSchema = SchemaFactory.createForClass(Wallet)