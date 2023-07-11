const fetch = require('node-fetch');
const {createHeader, createFetch} = require('../../services/jira');
const baseUrl = process.env.BASE_URL


async function getIssue(method, issueId) {
  const url = `${baseUrl}issue/${issueId}`
  try {
    const data = await createFetch(url, method)
    return data    
  } catch (error) {
    console.log('error: ', error)
  }
};

async function getAllIssues(method) {
  const url = `${baseUrl}events`
  try {
    const allUsersReturned = await createFetch(url, method)
    const data = await allUsersReturned.json()
    return data
  } catch (error) {
    console.log('error: ', error)
  }
};

async function createIssue(method, reqBody) {
  try {
    const bodyData = {
      "project": {"id":"10000"}
   }
    const postIssue = await fetch('https://aluizsilva.atlassian.net/rest/api/3/issue', {
      method: 'POST',
      headers: createHeader(),
      body: JSON.stringify(bodyData)
    })
    const data = await postIssue.json()
    console.log('data', data, 'postIssue', postIssue)
    return data
  } catch (error) {
    console.log('error:', error)
  }
}

// Rota para retonar todos os PROJETOS
async function getAllProjects(method) {
  try {
    const url = `${baseUrl}project`
    const allProjects = await createFetch(url, method)
    const data = allProjects
    return data
  } catch (error) {
    console.log('error: ', error)
  }
}

async function createProject(req) {
  try {
    const bodyPayload = JSON.stringify(req.body)
    const url = `${baseUrl}project`
    const createdProject = await createFetch(url, 'POST', bodyPayload)
    const data = await createdProject
    return data
  } catch (error) {
    console.log('error: ', error)
  }
}




module.exports = {getIssue, getAllIssues, createIssue, getAllProjects, createProject}