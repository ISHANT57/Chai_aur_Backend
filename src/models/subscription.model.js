import mongoose, {Schema} from "mongoose";

const SubscriptionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    stripeCustomerId: {
        type: String,
        required: true
    },
    stripeSubscriptionId: {
        type: String,
        required: true
    },
    stripePriceId: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
        },

})

export const Subscription = mongoose.model("Subscription", SubscriptionSchema)