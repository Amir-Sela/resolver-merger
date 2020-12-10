const {
    faceRecognitionResolver
} = require('../resolvers/faceRecognitionResolvers')
module.exports={
    faceRecognitionQueryType:{
        getFaceRecognition: faceRecognitionResolver
    }
}