const fetch = require('node-fetch');
const envToken = process.env.TOKEN
const envEmail = process.env.EMAIL
const baseUrl = process.env.BASE_URL



function createHeader() {
    const header = {
        'Authorization': `Basic ${Buffer.from(
            `${envEmail}:${envToken}`
          ).toString('base64')}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
    }
  
    return header
};

async function createFetch(urlComplement, method, bodyData) {
  const url = `${baseUrl}${urlComplement}`
  const fetchResult = await fetch(url, {
  method: method,
  headers: createHeader(),
  body: bodyData
})
  const data = await fetchResult.json()
  return data
};

module.exports = {createHeader, createFetch}