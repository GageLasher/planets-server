import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    name:{type: String, required: true},
    creatorId:{type: Schema.Types.ObjectId, ref: 'Profile', required: true}
},
{timestamps: true, toJSON:{virtuals: true}}
)