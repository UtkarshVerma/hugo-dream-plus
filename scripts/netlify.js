//Build script for netlify demos 
const exec = require('child_process').exec;
const site = process.env.URL;
const domain = site.split('/')[site.split('/').length - 1];

let buildCommand;
switch(domain) {
  case "dream-plus-posts.netlify.com":
    buildCommand = 'hugo --config posts.toml';
    break;
  case "dream-plus-cards.netlify.com":
    buildCommand = 'hugo --config cards.toml';
    break;
  default:
    throw `Domain ${domain} is invalid.`;
}

async function execute(command){
  return await exec(command, function(error, stdout, stderr){
    if (error) {
      throw error;
    }
    console.log(`Site: ${site}`);
    console.log(`Domain: ${domain}`);
    console.log(stdout);
  });
};

execute(buildCommand);
