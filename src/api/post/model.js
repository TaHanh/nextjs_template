const mongoo = require('mongoose')

// mongoose.connect("mongodb://yp9tdlorbv:yp9tdlorbv@176.9.57.130:27017/yp9tdlorbv",{
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// } );

const Post = new mongoo.Schema(
  {
    idPost: {
      type: String,
    },
    title: {
      type: String,
    },
    summary: {
      type: String,
    },
    image: {
      type: String,
    },
    idCreator: {
      type: String,
    },
    idCategory: {
      type: String,
    },
    viewCount: {
      type: Number,
    },
    tags: {
      type: [],
    },
    compositions: {
      type: [],
    },
  },
  {
    collection: 'posts',
  }
)

module.exports = mongoo.model('Post', Post)
