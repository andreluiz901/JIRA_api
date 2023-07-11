const fetch = require('node-fetch');
const envToken = process.env.TOKEN
const envEmail = process.env.EMAIL



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

async function createFetch(url, method, {bodyData}) {
  const fetchResult = await fetch(url, {
  method: method,
  headers: createHeader(),
  body: bodyData
})
  console.log('fetchResult', fetchResult)
  const data = await fetchResult.json()
  console.log('data', data)
  return data
};

module.exports = {createHeader, createFetch}