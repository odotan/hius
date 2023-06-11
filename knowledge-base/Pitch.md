HiU’s
Human interaction Units
Proof of Engagement (PoE) Game
[https://tiny.cc/hius](https://tiny.cc/hius)

![](https://lh5.googleusercontent.com/IT2IqPj0GGB4fO7Yb0ElJfbj45Ma8d-D-TR5bhuKXkDK1cs9aKIGj_43OmKrhy52rDzEgacCBonRe4iRkybe4MSlYXc_BRfP9i-NvtZgKNz6_H7laviejpKGceF475LgMXlV629Jgw2nYR5egWOIti8)

Hackathon page:
[https://ethprague2023.devfolio.co/?ref=ac40ff308c](https://ethprague2023.devfolio.co/?ref=ac40ff308c)

How the game concept started:

![](https://lh4.googleusercontent.com/EVJij8s5NvKb628pKHMib3oO7cuBqk5NWeD6hHTrN8B29LNiskuY7DjRhBPoTLQe8eg8hYHgPgDB-KMK2WpmHFmd2XQsNabUvfEZoEKB1L_-bHITJ3uub2_T4YiGqjLafOu564nZY31RtLv-kG2RE0I)

Proof of Engagement ([[PoE]]) in an app or website can be used as a reward/scoring mechanism to incentivize users to use a platform.

Proof of (human) engagement is yet another proof-of-something that has still not been cracked. If we can turn mining from something computers do (as proof of work or as proof of stake), into something humans can do, it could take ethereum/crypto in whole new directions.  

Such proofs can be generated when a user opens the app or website and uses public entropy created by some network such as block hashes and runs a hash-cash like hashing algorithm on the entropy to find nonces that produce certain hashes.
Valid nonces/hashes can be broadcast over the network or sent to another user to prove that the user engaged in the app.
A ping-pong game of such proofs can be played to accumulate points. These points could then be used to receive rewards, achieve certain functions, exchanged with other users, exchanged for other points, or “withdrawn” to an external address.

A user starts a game by finding a user or group to play with, and (#) taps a “HiU” button (Human interaction Unit).

The button creates a “message” consisting of the following:
-their own public key
-the recipient’s or group’s public key
-the contents of the message (the payload - “HiU”, or could be blank)
-”salt” - a random string of characters
-the latest ethereum block hash that the client has heard on the ethereum network at the time that the message is composed and its corresponding ethereum block height
-the hash of the last/previous message the client heard on the network
-the hash of the last/previous message transacted between these users/group/s
(A captcha could be employed at some moment during this flow)

This message is encrypted with the recipient’s public key, and the resulting encrypted message is concatenated with a nonce and the result is recursively run through a sha256 algorithm a certain number of times (r). The nonce is incremented/randomally generated until a hash below a certain value (h)  results.

The value for r and h are determined experimentally such that it takes a modern phone or laptop between one and two seconds on average to find a valid hash/nonce

The encrypted message along with the found nonce and valid resulting hash are broadcast on the network

The HiU button on the sender’s side becomes disabled and a counter shows the number of new ethereum blocks found on the ethereum network since the block used in their sent message.

Nodes listen to these broadcasts and save valid messages/nonces/hashes

When the recipient comes online their client requests the full list of recent messages/nonces/hashes heard on the network since they were last online, (or possibly only those aimed at their public key)

The recipient validates these messages/nonces/hashes and is able to decrypt the messages belonging to their public key. They save these messages (and drop the messages not aimed at them).

The recipient is shown a response HiU button for the HiU messages received.

If no new ethereum block has been found since the block in the received message, the button is disabled. The button becomes available as soon as a new ethereum block hash is available.

When the user responds by tapping the HiU button, the process repeats from (#) above.

The number of blocks elapsed on the first user’s button is then added to the first user’s total “score”, and the new block count starts counting on the second user’s counter.

When the first user responds, the whole process repeats, meaning that the last to respond is the one accumulating the points, and these points are only added to their total score when they get a response. Since the last message heard by the other user/network is used as the new entropy, this creates a chain of proof of engagement that can be traced back to the first message in the game or network.

Group games: In group games any member of the group can respond for the sake of the whole group.

Non-linear scoring: Depending on how many blocks had elapsed, a different number of points can be added per block to the total.

For example:

- The first 5 blocks count as 3600 point per block (so 18000 points after approximately one minute)

- The following 300 blocks (so approximately the following hour) count as 60 points per block (so  another 18000 points after approximately one hour and one minute (so 18000+18000=36000 total)

- The following 7200 blocks (so approximately the following 24 hours) count as 1 point per block (so 7200 additional points after approximately 25 hours and one minute (so 18000+18000+7200=43200 points total).

Non linear scoring incentivized both sides to respond as fast as they can as point accumulate slower and slower as time goes by

As long as there is a response within this time from the other player, the game continues.

If there is no response from the other side after this time, the points accumulated on the player’s counter disappear, and the game stops. Players can then start a new game.

  
Gaming the game with bots:
To prevent gaming the game with bots, certain measures can be implemented such as:

- Captchas at certain points in the flow
- Limiting the number of games that can be played per day/hour by a single user
- Introducing random elements in the scoring algorithm
- Tracking user behavior and detecting unusual patterns that may indicate bot usage 