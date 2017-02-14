var request = require('request');
var fs = require('fs');

console.log('Welcome to GitHub Avatar Downloader!');

var GITHUB_USER = "RobertCanas";
var GITHUB_TOKEN = "321b033b375060fd93ef57506f6e0b11eb996425";
function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };


  request.get(requestURL, function(error, response){
    extract_avatarUrl(JSON.parse(response.body));
  })

  function extract_avatarUrl(response){
    response.map(function(cv, index){
      console.log(cv.avatar_url);
    });
  }

function downloadImageByURL(url, filePath) {
  // ...
  request.get(url)
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log('Response Status Code: ', response.statusCode);
  })
  .pipe(fs.createWriteStream('./' + afilePath));
}


}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
  // result.map(function(cv, index){
  //   console.log(cv);
  // });
});