const Candidate = require("../Models/CandidateSchema");
const Job = require("../Models/JobSchema");

exports.apply_job = (req,res) =>
{
    Job.findById(req.body.job_id, (err,doc) => 
    {
        if (err)
        {
            res.send("Job not found.")
        }
        else
        {
            doc.candidatesApplied.push(req.body.candidate_id)
            doc.save()
        }
    })
}

exports.withdraw_job = (req,res) =>
{
    Job.findById(req.body.job_id, (err,doc) => 
    {
        if (err)
        {
            res.send("Job not found.")
        }
        else
        {
            const index = doc.candidatesApplied.indexOf(req.body.candidate_id)
            if (index > -1)
            {
                doc.candidatesApplied.splice(index)
                doc.save()
            }
        }
    })
}