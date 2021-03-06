import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy';
import { PlanetSchema } from '../models/Planet';
import { StarSchema } from '../models/Star';
import { ValueSchema } from '../models/Value'

class DbContext {
  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Stars = mongoose.model('Stars', StarSchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
