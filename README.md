# Scratch_Project

HELLO ITERATION TEAM

hot module loading is not working. as it is right now, you have to stop the
server, 'npm run build', 'npm run dev' ('npm start' also works) every time you
make a change to the front end.

also, you have to

- connect this to your own database

- set this up with your own 'clientID' and 'clientSecret' to connect to spotify
  API. look for the comments mentioning these, refer to spotify API
  documentation (its REALLY good) for more help with that.

- I think you need a paid spotify account in order to set up the spotify api.
  We're not 100% sure though so I guess you can try.

- put everyone working in your team on a whitelist for spotify API (when they
  log in with spotify, nothing will work unless you've added their spotify email
  to a whitelist)

- refer to spotify web api node documentation for how to utilize this package
  and get data from spotify API. The authentication was the hard part, working
  with the data is pretty straightforward and there is a ton of data you can get
  from Spotify.
