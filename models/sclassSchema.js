import mongoose from 'mongoose';

const sclassSchema = new mongoose.Schema({
    sclassName: {
        type: String,
        required: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    }
}, { timestamps: true });

export default mongoose.model("sclass", sclassSchema);

