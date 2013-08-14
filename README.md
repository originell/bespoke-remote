bespoke-remote
==============

nodejs + socketio based remote control "template" for bespoke.

This really just serves as basic template to implement your own remote control.

I used bespoke in some presentations that also directly included tech demos,
which involved passing data from a "second screen" (smartphone, tablet) to the
viewing clients. For example taking the HTML5 Device Orientation and applying
them to a CSS3 transform across all connected viewers. Therefore it was a
logical step to also use that device as a remote control. Really easy!

Since this is using websockets where possible, I found the delay between
pressing and slide switch pretty acceptable in most wifis.


Usage
-----

That's pretty simple. Install all dependencies via `npm`:

    npm install

Then have a look at the `server.js` and configure it to your desires.

After you did that just navigate your remote-control-to-be to the correct IP.
For example:

    http://192.168.1.101/remote/

and you will see the remote loading and connecting.


Bugs? Features?
---------------

Feel free to submit pull requests and issues :)

*Note* that I left out any authentication for the remote, since in some cases
you don't really have to worry about someone hijacking your presentation. At
least I am trusting my audience that much. Feel free to roll your own :+1:
