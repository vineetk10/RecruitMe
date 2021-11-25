const express = require("express");
const router = express.Router();
const { checkAuth } = require("../Utils/auth");

const{apply_job,getSuitableJobs,getcandidateprof} = require("../Controllers/candidateController")
const{withdraw_job,getCandidateProfile,getJobs} = require("../Controllers/candidateController")
const{getSimilarJobs} = require("../Controllers/TFIDF")

router.get("/getSuitableJobs",  getSuitableJobs);
router.post("/getSimilarJobs",  getSimilarJobs);
router.get("/getJobs",  getJobs);
router.post("/apply_job", checkAuth, apply_job);
router.post("/withdraw_job", checkAuth, withdraw_job);
router.post("/candidate/profile", getCandidateProfile);
router.post("/candidate/prof", getcandidateprof);

module.exports = router;