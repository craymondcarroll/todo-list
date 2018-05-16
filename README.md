## React Geting Started ##

- Safaribooks online video by Tom Dunclf
- React Projects
- Pub Date Feb 2017
- http://techbus.safaribooksonline.com/video/web-development/9781786465504?bookview=overview


- **Webpack** bundles all application code along React modules into a single javascript file. But it cant convert .jsx or ES6 to something that ES5 browser understand for that we need something else
- **Bable** which is a transpiler that can convert **ES6** to **ES5** which is understood by most browsers.


### Create a simple Hello World Project then a Todolist ###

- Install Chrome
 - Install React Debugger from Chrome

- Install Node
- Install NPM
- Install Editor such as Webstrom or Visaul Studio Code
- Under the project create a index.html with a  ```<div id=root></div>```  This is where we mount the react project

- Create your React project such as ***todo-list***
 - Create a ***src*** directory
 - Initialize Node ***npm init -y***
 - Install React modules ***npm install react --save***
  + ***save*** creates a package.json file so we can recreate node project

 - Install React virtual dom  ***npm install react-dom --save***  
  + ***save*** creates a package.json file so we can recreate node project  

- Under ***src*** create a ***index.jsx*** file 

```
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<div>Hello world</div>, document.getElementById('root'));
```

- We need to install babel and tell it we can call it anywhere on our computer
 - **npm install --global babel babel-cli**
 
- We need to use bable but need a couple bable modules to tell it we are using **ES6*
 - **npm install --save-dev babel-preset-env babel-preset-react**
 -  ***save-dev*** tells npm just save this from development and not production
 
- We to create a **.babelrc** in the project root to tell babel to use our **presets**

```
{
    "presets":["env","react"]
}

```

-We can now convert **react** code to a older javascript the browsers understand.
 - **babel src/index.jsx**

```
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  'Hello world'
), document.getElementById('root'));

```

- We now need to install **webpack** which will bundle all the neccessary files together.
 - **npm install --save-dev webpack**
 - **npm install --save-dev webpack-cli**
 
- We also need to install a couple of **webpack babel loader**
 - npm install -D babel-loader
 - **-D** is short for --save-dev

- We are now going to create a **webpack configuration** file.
 - create a directory off the **root** called **config**
 - create a file in **config** called **webpack.config.js**
 - **Note:** I had to convert this is little since the tutorial I watched was a little dated, it may not work.
 

```
var webpack = require('webpack');
var path = require('path');


module.exports = {

    // Which file types are in our project, and where they are located
    resolve: {
       extensions: ['.js', '.jsx'],
    },

    module: {

        // How to process project files with loaders

        rules: [
         // Process any .js or .jsx file with Babel
          {
             test: /\.jsx?$/,

             use: [

               {
                 loader: "babel-loader"
               }

             ] // end of use

          }

          ] // end of rules

    },
    // Which file is the entry point to our application


    entry: [
        './src/index.jsx'
    ],


    // Where to output the final bundled code to
    output: {
        filename: 'app.js'
    }
};
```

- We now need to run **webpack** from the command line, and the easist way to do this is a **npm script**. There is a script section and we can our own and run them but using the **npm run** command
 - open **package.json** in the editor and find the script section
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
``
 - Remove the line **"test": "echo \"Error: no test specified\" && exit 1"**  
 - and replace with **"build": "webpack --config config/webpack.config.js"**
 
 ```
   "scripts": {
    "build": "webpack --config config/webpack.config.js"
  },
```
 
- We can now run **npm run build** from our project directory and hopefully we will see a **success message**

```

> todo-list@1.0.0 build C:\Users\bop00019\git\javascript\react-projects\todo-list
> webpack --config config/webpack.config.js

Hash: 3209f763fa3bf0ebc87d
Version: webpack 4.4.1
Time: 3622ms
Built at: 2018-4-4 08:50:26
 Asset     Size  Chunks             Chunk Names
app.js  106 KiB       0  [emitted]  main
Entrypoint main = app.js
  [13] ./src/index.jsx 409 bytes {0} [built]
  [14] multi ./src/index.jsx 28 bytes {0} [built]
    + 13 hidden modules


```
 
- Once we are successful we will not add the **.app.js** file to our index.html file 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<div id="root"></div>
<script src="dist/app.js"></script>



</body>
</html>
```
 
- Open the **index.html** page in a browser
 
 - This might seem like a lot of work for a hello world but all the fundmentals are there for React.
 
 
 


## Create a Todo List Project, you should following along with the video for details ##
 
- We will use the fondation we created above but this will be a little more complicated and we will learn about **React Components**

- Create a **component** directory under **src**
 + Both the **markup**, the **logic**, and even the styles live in the same file so components are self contain.

- Create a file under components called **App.jsx** we will use **ES6** markup langauge and add the following.

```
import  React from 'react';

class App extends React.Component {
    
    render() {
        return <div>Hello world</div>;
        
    }
    
}

export default App;
```


- Now open the **index.jsx** and replace page with:

- **Remember** App.jsx is our **Root Component** where all of the other components live


```
import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

ReactDom.render(<App />, document.getElementById('root'));

```

- Rerun **webpack** and look at component in **index.html page**

- Now lets create the header, in the components directory create a file called **Header.jsx** and the the following:
 - It's just like the **App.jsx** 
 
 ```
 import  React from 'react';

class Header extends React.Component {

    render() {
        return <div>Todo List</div>;

    }

}

export default Header;
 
 ```

 - Now open up the **App.jsx** file and replace it with:
 
 ```
 import  React from 'react';

import Header from './Header';


class App extends React.Component {

    render() {
        return <Headaer />;
    }

}

export 
 
 ```
 
 - **Rerun webpack** npm run build 
 
 
 
  
 

 

 
  