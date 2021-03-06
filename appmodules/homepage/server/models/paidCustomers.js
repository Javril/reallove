'use strict';


var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PaymentsSchema = new Schema({

  numberOfMessages: {
    type: Number
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  memberObjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SiteMembers'
  },
  RegistrationId: {type: mongoose.Schema.Types.ObjectId, ref: 'registrations'}
});

var paymentModel = mongoose.model('payments', PaymentsSchema);

module.exports =
{
  paymentModel : paymentModel
}
