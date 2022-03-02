import { Schema, SchemaType } from "mongoose";

export const PlanetSchema = new Schema({
    name: {type: String, required: true},
    creatorId: {type: Schema.Types.ObjectId, required: true, ref: 'Profile'},
    starId: {type: Schema.Types.ObjectId, required: true, ref: 'Star'},
    galaxyId: {type: Schema.Types.ObjectId, required: true, ref: 'Galaxy'}
})