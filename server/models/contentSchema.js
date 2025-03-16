import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema({
    title : {
        type: String,
        Required: true
    },
    url: {
        type : String, 
        Required: true
    },
    category : {

        type : String,
        Required: true,
        default : 'Others'
    }
})

const Content = mongoose.model('Content', contentSchema);

export default Content;