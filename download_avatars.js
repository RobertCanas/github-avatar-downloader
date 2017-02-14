var request = require('request');

console.log('Welcome to GitHub Avatar Downloader!');

var GITHUB_USER = "RobertCanas";
var GITHUB_TOKEN = "321b033b375060fd93ef57506f6e0b11eb996425";


function getRepoContributors(repoOwner, repoName, cb) {
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL);
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});