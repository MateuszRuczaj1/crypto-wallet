import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose"
@Schema()
export class Wallet {
    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'User'} )
    userId: mongoose.Types.ObjectId;
    @Prop()
    balances: number
}