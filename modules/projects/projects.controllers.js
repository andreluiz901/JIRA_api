const express = require('express');
const usersRouter = express.Router();
const {getAllProjects, createProject, deleteProject} = require('./projects.services')

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
    res.send({ message: `Deletando o projeto ${projectId}`, data:response})
})

module.exports = usersRouter;

