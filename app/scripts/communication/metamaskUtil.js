export function digestTweet(tweet, nonce) {
  const tweetDigest = web3.sha3(tweet + nonce);

  return tweetDigest;
}
