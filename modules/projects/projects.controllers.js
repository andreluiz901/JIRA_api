const express = require('express');
const usersRouter = express.Router();
const {getIssue, getAllIssues, createIssue, getAllProjects, createProject, deleteProject} = require('./projects.services')

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


// Rotas de Projetos
usersRouter.get('/allProjects', async (req, res) => {
    const response = await getAllProjects();
    res.send({ message:`estes são os projetos`, data:response })
})

usersRouter.post('/createProject', async (req,res) => {
    const response = await createProject(req);
    res.send({ message:'criado novo projeto ', data:response})
})

usersRouter.delete('/deleteProject', async (req, res) => {
    const {projectId} = req.body
    const response = await deleteProject(projectId);
    res.send({ message: `Deletando o projeto`, data:response})
})

module.exports = usersRouter;

