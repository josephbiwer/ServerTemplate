# Template for IOT application
### Contents
- in *client/* directory
	- *web* directory that has web interface that makes request to server
	- *python* directory that makes request to the server (currently only outputs the response status)

### Using
Be sure that npm is installed and up to date using your prefered package manager. Then, initialize npm in desired directory, clone this repo, and install dependencies.

```
mkdir iot_server && cd iot_server
npm init
git clone https://github.com/josephbiwer/ServerTemplate.git
npm install
```

Once the repo is installed, you can run the server by typing `node server`, and use one of the clients by doing one of the following:
- Open the web page found here: *client/web/client.html*
- Run the python script found here: *client/web/client.py*
