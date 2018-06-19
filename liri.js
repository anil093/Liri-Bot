require("dotenv").config();

var keys = require("./key.js");
var fs= require ("fs");
var request = require("request");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
  
var command = process.argv[2];
var x = process.argv[3];




// if( command = "my-tweets"){
//     showtweet();
// }
// else if(x= )






 switch(command){
     case "my-tweets":
     showtweet();
     break;

    case("spotify-this-song"):
     if(x){
        Songsinfo(x)  
     }
     else{
        Songsinfo("perfect")
     } 

     
     case "movie-this":
     if(x){
        console.log(x);
       omdbData(x)
       
    
     } 
   break;
    }

function Songsinfo(song)

{
  spotify.search({ type: 'track', query: song }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
}
 
 else{
    for(var i = 0; i < data.tracks.items.length; i++){
     var songData =data.tracks.items[i];
    console.log(songData.artists[0].name);
    console.log("----------------------------------")
    console.log(songData.name);
    console.log("----------------------------------")
    console.log(songData.preview_url);
    console.log("----------------------------------")
    console.log(songData.album.name);

    
    fs.appendFile('log.txt',  songData.artists[0].name );
    fs.appendFile('log.txt',  songData.name );
    fs.appendFile('log.txt',  songData.preview_url );
    fs.appendFile('log.txt',  songData.album.name);
    console.log("----------------------------------")

 }

}
 }

)};


function showtweet(){
    var params = {screen_name:'FactSoup'};
    client.get('statuses/user_timeline', params, function(error, tweets, response){

    if(!error){
       // console.log(tweets)
    
        for( var i=0; i<tweets.length; i++){

            var date = tweets[i].created_at;
            console.log(tweets[i].text);
            console.log("---------------------------")
            console.log(tweets[i].created_at)
            console.log("----------------------------")
                
            //---------------------------------

       fs.appendFile('log.txt', "@Anil093: " + tweets[i].text + " Created At: " + date.substring(0, 19));
       fs.appendFile('log.txt', "-----------------------");

            }
          }
          else{
              console.log(error);
          }
   

    }
    )}

    function omdbData(movie){
        var omdbURL = request("http://www.omdbapi.com/?t="+ movie +"&y=&plot=short&apikey=dbd7fa7e");
       console.log(movie);
        request(omdbURL, function (error, response, body){
          if(!error && response.statusCode == 200){
            //var body = JSON.parse(body);
             
            console.log(response);
           /* console.log("Title: " + body.Title);
            console.log("Release Year: " + body.Year);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
            console.log("Rotten Tomatoes URL: " + body.tomatoURL); */
      
            //adds text to log.txt
            // fs.appendFile('log.txt', "Title: " + body.Title);
            // fs.appendFile('log.txt', "Release Year: " + body.Year);
            // fs.appendFile('log.txt', "IMdB Rating: " + body.imdbRating);
            // fs.appendFile('log.txt', "Country: " + body.Country);
            // fs.appendFile('log.txt', "Language: " + body.Language);
            // fs.appendFile('log.txt', "Plot: " + body.Plot);
            // fs.appendFile('log.txt', "Actors: " + body.Actors);
            // fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + body.tomatoRating);
            // fs.appendFile('log.txt', "Rotten Tomatoes URL: " + body.tomatoURL);
      
          } else{
            console.log('Error occurred.' + error)
          }
  
        });
      
    }


























