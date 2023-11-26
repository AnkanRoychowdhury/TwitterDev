import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        max: [250, 'Tweets cannot be more than 250 characters'],
        required: true
    },
    reacts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reaction'
        }
    ]
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;