import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose"
@Schema()
export class PriceHistory{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Cryptocurrency'})
    currencyId: mongoose.Types.ObjectId
    @Prop()
    priceUSD: number
    @Prop({type:Date})
    timestamp: Date
}
export const PriceHistorySchema = SchemaFactory.createForClass(PriceHistory)