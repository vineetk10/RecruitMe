var mongoose = require("mongoose");
const CompanySchema = require("./CompanySchema");

var jobSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
      },
      jobType: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
      },
      jobDescription: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
      },
      jobLocation:{
          type: String,
          maxlength: 50,
          trim: true
      },
      candidatesApplied : [CandidateSchema]
    }
)

module.exports = mongoose.model("Job",jobSchema);