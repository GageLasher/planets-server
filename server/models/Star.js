import { Schema } from "mongoose";

export const StarSchema = new Schema({
    name:{type: String, required: true},
    creatorId:{type: Schema.Types.ObjectId, ref: 'Profile', required: true},
    galaxyId:{type: Schema.Types.ObjectId, required: true, ref: 'Galaxy'}
},
{timestamps: true, toJSON:{virtuals: true}} 
)
StarSchema.virtual('galaxy', {
    localField: 'galaxyId',
    foreignField: '_id',
    ref: "Galaxy",
    justOne: true
})