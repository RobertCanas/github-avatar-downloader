var request = require('request');
var fs = require('fs');

console.log('Welcome to GitHub Avatar Downloader!');

var GITHUB_USER = "RobertCanas";
var GITHUB_TOKEN = "321b033b375060fd93ef57506f6e0b11eb996425";
var owner = process.argv[2];
var name = process.argv[3];


function downloadImageByURL(url, filePath) {
  request.get(url)
    .on('error', function(err) {
      throw err;
    })
    .pipe(fs.createWriteStream(filePath));
}

function getRepoContributors(repoOwner, repoName, cb) {
  if (!owner || !name) {
    console.log("Please specify both arguments");
    return;
  }
  var requestURL = {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + owner + '/' + name + '/contributors',
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };

  request.get(requestURL, function(error, response) {
    var contributors = (JSON.parse(response.body));
    for (var i = 0; i < contributors.length; i++) {
      var loginUser = contributors[i].login;
      var filePath = './avatars/' + loginUser + '.jpg';
      cb(contributors[i].avatar_url, filePath);
    }
  });

}

getRepoContributors(owner, name, downloadImageByURL);