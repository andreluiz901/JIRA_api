
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
      return data
    } catch (error) {
      console.log('error:', error)
    }
  }

module.exports = {getIssue, getAllIssues, createIssue}