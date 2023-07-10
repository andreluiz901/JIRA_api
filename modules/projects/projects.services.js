const fetch = require('node-fetch');
const createHeader = require('../../services/jira');
const envToken = process.env.TOKEN
const envEmail = process.env.EMAIL
const baseUrl = process.env.BASE_URL


async function createFetch(method, issueId) {
  const fetchResult = await fetch(`${baseUrl}${issueId}`, {
  method: method,
  headers: createHeader(),
})
  const data = await fetchResult.json()
  return data
};

async function getIssue(method, issuedId) {
  try {
    const fetchData = await createFetch(method, issuedId)
    return fetchData    
  } catch (error) {
    console.log('error: ', error)
  }
};

async function getAllIssues() {
  try {
    const allUsersReturned = await fetch('https://aluizsilva.atlassian.net/rest/api/3/events', {
      method:'GET',
      headers:createHeader()
    })
    const data = await allUsersReturned.json()
    return data
  } catch (error) {
    console.log('error: ', error)
  }
};

async function createIssue() {
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
async function getAllProjects() {
  try {
    const allProjects = await fetch('https://aluizsilva.atlassian.net/rest/api/3/project', {
      method:'GET',
      headers:createHeader()
    })
    const data = await allProjects.json()
    return data
  } catch (error) {
    console.log('error: ', error)
  }
}

async function createProject() {
  
  try {
    const bodyData = JSON.stringify({
      "key": "TEST",  
      "name": "Test",
      "projectTypeKey": "business",
      "leadAccountId": "70121:ad8ea697-9864-45b7-916c-553b5bbe74b2"
    });
    const createdProject = await fetch('https://aluizsilva.atlassian.net/rest/api/3/project', {
      method: 'POST',
      headers: createHeader(),
      body: bodyData
    });
    const data = await createdProject.json()
    return data
  } catch (error) {
    console.log('error: ', error)
  }
}




module.exports = {createFetch, getIssue, getAllIssues, createIssue, getAllProjects, createProject}