# Template for IOT application
### Contents
- in *client/* directory
	- *web* directory that has web interface that makes request to server
	- *python* directory that makes request to the server (currently only outputs the response status)

### Using
Be sure that npm is installed and up to date using your prefered package manager. Then, initialize npm in desired directory, clone this repo, and install dependencies.

```
git clone https://github.com/josephbiwer/ServerTemplate.git
cd ServerTemplate
npm install
```

Once the repo is installed, you can run the server by typing `node server`, and use one of the clients by doing one of the following:
- Open the web page found here: *client/web/index.html*
- Run the python script found here: *client/web/client.py*

### Versions 
- **v0.1.0**
	- Updates
		- Web interface has been updated to include a command-line-like interface to interact with the backend. I do plan on adding more in the future.
		- Created crude state manager for the page causing the browser to dynamically load pages. This will make it easier to expand the UI.
		- Updated install instructions to make the install process go more smoothly.
		- Added *cors* npm package to the server. (more explained below in Bug Fixes)
	- Bug Fixes
		- There was an issue with CORS  (Cross Origin Resource Sharing) with the web UI, but the problem has since been fixed by using the *cors* npm package. You can find more information about CORS [here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).
