import mongoose, { Schema } from 'mongoose';

// Define movie schema
const playerSchema = new Schema({
  iteration: Number,
  team: String,
  teamId: Number,
  primaryKey: Number,
  lastName: String,
  firstName: String,
  position: String,
  jerseyNum: Number,
  ovr_rating: Number,
  ovr_diff: Number,
  speed_rating: Number,
  speed_diff: Number,
  acceleration_rating: Number,
  acceleration_diff: Number,
  strength_rating: Number,
  strength_diff: Number,
  agility_rating: Number,
  agility_diff: Number,
  awareness_rating: Number,
  awareness_diff: Number,
  catching_rating: Number,
  catching_diff: Number,
  carrying_rating: Number,
  carrying_diff: Number,
  throwPower_rating: Number,
  throwPower_diff: Number,
  throwAccuracy_rating: Number,
  throwAccuracy_diff: Number,
  kickPower_rating: Number,
  kickPower_diff: Number,
  kickAccuracy_rating: Number,
  kickAccuracy_diff: Number,
  runBlock_rating: Number,
  runBlock_diff: Number,
  passBlock_rating: Number,
  passBlock_diff: Number,
  tackle_rating: Number,
  tackle_diff: Number,
  jumping_rating: Number,
  jumping_diff: Number,
  kickReturn_rating: Number,
  kickReturn_diff: Number,
  injury_rating: Number,
  injury_diff: Number,
  stamina_rating: Number,
  stamina_diff: Number,
  toughness_rating: Number,
  toughness_diff: Number,
  trucking_rating: Number,
  trucking_diff: Number,
  elusiveness_rating: Number,
  elusiveness_diff: Number,
  bCVision_rating: Number,
  bCVision_diff: Number,
  stiffArm_rating: Number,
  stiffArm_diff: Number,
  spinMove_rating: Number,
  spinMove_diff: Number,
  jukeMove_rating: Number,
  jukeMove_diff: Number,
  impactBlocking_rating: Number,
  impactBlocking_diff: Number,
  runBlockStrength_rating: Number,
  runBlockStrength_diff: Number,
  runBlockFootwork_rating: Number,
  runBlockFootwork_diff: Number,
  passBlockStrength_rating: Number,
  passBlockStrength_diff: Number,
  passBlockFootwork_rating: Number,
  passBlockFootwork_diff: Number,
  powerMoves_rating: Number,
  powerMoves_diff: Number,
  finesseMoves_rating: Number,
  finesseMoves_diff: Number,
  blockShedding_rating: Number,
  blockShedding_diff: Number,
  pursuit_rating: Number,
  pursuit_diff: Number,
  playRecognition_rating: Number,
  playRecognition_diff: Number,
  manCoverage_rating: Number,
  manCoverage_diff: Number,
  zoneCoverage_rating: Number,
  zoneCoverage_diff: Number,
  spectacularCatch_rating: Number,
  spectacularCatch_diff: Number,
  catchInTraffic_rating: Number,
  catchInTraffic_diff: Number,
  routeRunning_rating: Number,
  routeRunning_diff: Number,
  hitPower_rating: Number,
  hitPower_diff: Number,
  press_rating: Number,
  press_diff: Number,
  release_rating: Number,
  release_diff: Number,
  throwAccuracyShort_rating: Number,
  throwAccuracyShort_diff: Number,
  throwAccuracyMid_rating: Number,
  throwAccuracyMid_diff: Number,
  throwAccuracyDeep_rating: Number,
  throwAccuracyDeep_diff: Number,
  playAction_rating: Number,
  playAction_diff: Number,
  throwOnTheRun_rating: Number,
  throwOnTheRun_diff: Number,
  height: Number,
  weight: Number,
  age: Number,
  portraitId: Number,
  id: {
    type: String,
    unique: true,
  },
  encryptedId: String,
  firebaseId: 0,
  drafts: Array,
  round: Number,
  adp: Number,
  fullName: String,
  experience: Number,
  development: String,
});


// Export Mongoose model
export default mongoose.model('player', playerSchema, 'players');
