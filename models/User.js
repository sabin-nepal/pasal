var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        trim:true,
        lowercase:true,
        required: [true,'Email Required'],
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        unique:true,
    },
    photo_url: String,
    role: { type: String, default: 'editor' },
    active: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date()
    },
});
// hash password before saving to database
UserSchema.pre('save', function(next)  {
    bcrypt.hash(this.password, Number(process.env.SALT_ROUNDS), (error, hash) => {
      if (error) {
        return next(error);
      }
    this.password = hash;
    next();
    });
});
module.exports = mongoose.model('User',UserSchema);