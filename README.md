# yatam-web-client

## Project setup
1. Install Node.JS in your computer:
	* In Windows: https://nodejs.org/es/download/
2. Restart computer and open terminal and install Vue CLI as Administrator:
	```
	npm install -g @vue/cli
	```
3. Open project folder and install all dependencies in node_modules in your local repository.
	```
	npm i
	```

## Operations inside the project:

### Compiles and hot-reloads for development (server in localhost for debug)
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## How to create a Vue project:
```
vue create [projectName]
```
App.vue and main.js are the main files of the project. Other files are located in 'components' folder. 'assets' folder is for images and other static data.

## How to "Code" in the project:
* Use *camelCase*, *kebab-case* or *PascalCase* for functions and variables (but don't mix them in the same file...)
* Write the code in english.
* Use Components Hierarchy.

## Troubleshooting with Node.js and npm:
Sometimes *npm* can cause problems... This is due to some possible incompatibilities between dependencies, so these are some of the possible solutions when npm fails:

* Restart the terminal or the computer if you installed a new package.
* Use *nvm* to change/install different Node.js versions. Some packages are incompatible with new node.js versions or hasn't been updated.
* Delete node_modules folder inside a project and use:
	```
	npm i
	```
to reinstall all dependencies and Node.js modules.

## Extra dependencies:
Note: If you use:
```
npm i
```
Inside the folder, it will install all the new dependencies. 
If you need a new one, just use the command:
```
npm install --save [dependencie]
```
And it will be added to the packages.json files. Later, just add it to the commit.

Commands:
```
npm install leaflet vue2-leaflet --save
npm install --save axios
npm install --save node-sass
npm install --save buefy
npm install --save vue-particles
npm install --save sass-loader
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/vue-fontawesome@latest
npm i --save @fortawesome/free-brands-svg-icons
```
## Error: System Limit for Number of File Watchers Reached
This error is common since React/Angular/Vue hot-reloads and recompiles files on save it needs to keep track of all project's files. Increasing the inotify watch limit should hide the warning messages.

* Linux solution:
	```
	nano /etc/sysctl.conf
	```
	You can use the text editor you want. You can use kate instead of nano. Add/edit this line:
	```
	fs.inotify.max_user_watches=524288
	```
	Restart your computer. Check if it has been updated with:
	```
	sudo sysctl -p
	```
	And now you can use npm run serve again.

## How to run Climacell Weather API

In CurrentWeather.vue, in the <script> part, uncomment the lines in mounted() and change all the variables inside data() return{} to null. This is to avoid reaching the daily limit of 1000 API calls when testing.
