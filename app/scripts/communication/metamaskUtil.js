export function digestTweet(web, tweet) {
  console.log("Tweet: ", tweet);
  return web.sha3(tweet);
}
