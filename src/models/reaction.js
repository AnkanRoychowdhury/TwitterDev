import mongoose from 'mongoose';

const reactionSchema = new mongoose.Schema({
    onModel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    reactable: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

const Reaction = mongoose.model('Reaction', reactionSchema);
export default Reaction;
