const express = require('express');
const usersRouter = express.Router();
const {getIssue, getAllIssues, createIssue, getAllProjects, createProject} = require('./projects.services')

usersRouter.get('/issues', async (req, res) => {
    const {method, issueId} = req.body
    const response = await getIssue(method, issueId);
    res.send({ message:`este é o issue  ${issueId} `, data:response })
})

usersRouter.get('/allIssues', async (req, res) => {
    const response = await getAllIssues();
    res.send({ message:`estes são os issues`, data:response})
})

usersRouter.post('/createIssue', async (req, res) => {
    const response = await createIssue();
    res.send({ message:`você cadastrou os issues`, data:response})
})

usersRouter.get('/allProjects', async (req, res) => {
    const {method, issueId} = req.body
    const response = await getAllProjects();
    res.send({ message:`estes são os projetos`, data:response })
})

usersRouter.post('/createProject', async (req,res) => {
    const response = await createProject();
    res.send({ message:'criado novo projeto ', data:response})
})

module.exports = usersRouter;

