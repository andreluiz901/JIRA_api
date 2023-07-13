const fetch = require('node-fetch');
const {createHeader, createFetch} = require('../../services/jira');


// ROTAS DE PROJETOS

// Rota para retonar todos os PROJETOS
async function getAllProjects() {
  try {
    const url = '/project'
    const allProjects = await createFetch(url, 'GET')
    const data = allProjects
    return data
  } catch (error) {
    console.log('error: ', error)
  }
}

async function createProject(req) {
  try {
    const bodyPayload = JSON.stringify(req.body)
    const url = '/project'
    const createdProject = await createFetch(url, 'POST', bodyPayload)
    const data = await createdProject
    if (!data) {
      throw new Error('Data é requerido')
    }
    return data
  } catch (error) {
    console.log('error: ', error)
  }
}

async function deleteProject(projectId) {
  try {
    const url = `/project/${projectId}`
    const deletedProject = await createFetch(url, 'DELETE')
    return deletedProject
  } catch (error) {
    console.log('error: ', error)
  }
}

module.exports = {getAllProjects, createProject, deleteProject}