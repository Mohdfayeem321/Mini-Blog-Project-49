const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
     title:{
        type:String,
        required:true
    },
    
     body: {
        type:String,
        required:true,
     },
        
      authorId: {
        type:ObjectId,
        required:true,
        ref:Author
      },
        
       tags: [String],
    
    
        category: {
            type:[String],
            required:true
        },
            //  examples: [technology, entertainment, life style, food, fashion]}, 
        subcategory:{
        type:
        [String]
        },
        //  examples[technology-[web development, mobile development, AI, ML etc]] },
        //  createdAt, updatedAt, deletedAt: {when the document is deleted},
          isDeleted: {
            type:boolean,
             default: false
        },
            
           isPublished: {
            type:boolean,
             default: false
            },
        },
            { timestamps: true });

            module.exports = mongoose.model('Blog', blogSchema)