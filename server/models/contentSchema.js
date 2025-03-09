import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema({
    title : {
        type: String,
        Required: true
    },
    url: {
        type : String, 
        Required: true
    }
})

const Content = mongoose.model('Content', contentSchema);

export default Content;