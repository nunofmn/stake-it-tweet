export function digestTweet(tweet, nonce) {
  const tweetDigest = web3.sha3(tweet + 10);

  return tweetDigest;
}
