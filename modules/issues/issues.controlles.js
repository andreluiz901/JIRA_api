const express = require('express');
const { getIssue, getAllIssues, createIssue } = require('../projects/projects.services');
const usersRouter = express.Router();

// Rotas de Issues
usersRouter.get('/issues', async (req, res) => {
    const {method, issueId} = req.body
    const response = await getIssue(method, issueId);
    res.send({ message:`este é o issue  ${issueId} `, data:response })
})

usersRouter.get('/allIssues', async (req, res) => {
    const {method} = req.body
    const response = await getAllIssues(method);
    res.send({ message:`estes são os issues`, data:response})
})

usersRouter.post('/createIssue', async (req, res) => {
    const response = await createIssue();
    res.send({ message:`você cadastrou os issues`, data:response})
})