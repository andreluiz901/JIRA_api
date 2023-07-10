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

module.exports = createHeader