"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[217],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(a),u=r,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3458:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Django Basics for a Beginner"},p=void 0,l={unversionedId:"Web Development/django-setup",id:"Web Development/django-setup",title:"Django Basics for a Beginner",description:"Published on March 23, 2023",source:"@site/docs/Web Development/django-setup.md",sourceDirName:"Web Development",slug:"/Web Development/django-setup",permalink:"/website/docs/Web Development/django-setup",draft:!1,tags:[],version:"current",frontMatter:{title:"Django Basics for a Beginner"},sidebar:"tutorialSidebar",previous:{title:"Ubuntu User Manual for Beginners",permalink:"/website/docs/Tooling and OS/ubuntu-user-manual-for-beginners"},next:{title:"Guide on Installation and Configuration of Tailwind CSS",permalink:"/website/docs/Web Development/tailwind-installation-guide"}},c={},d=[],h={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Published on March 23, 2023"),(0,o.kt)("p",null,"This blog will give you knowlege of some basic things that a beginner should know before starting web development using django.\n",(0,o.kt)("img",{alt:"image1",src:a(6005).Z,width:"365",height:"512"})),(0,o.kt)("p",null,"Django Control Flow Structure"),(0,o.kt)("p",null,"Django is s a high-level Python web framework. You might ask, what is a framework?  ",(0,o.kt)("em",{parentName:"p"},"\u201cA framework is a software framework that is designed to support the development of web applications including web services, web resources and web APIs"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Alright you now know the meaning of a web framework. Now another question arises, why do we need a web framework? ",(0,o.kt)("em",{parentName:"p"},'" A web framework is a server-side application framework which is designed to support the development of dynamic websites. "'),". By using a web framework, you won't have to handle the complexities of web development and it's inner details. Therefore, it makes the process of creating a website much easier as the developer don't have to program everything from the scratch.\nThere are various web development frameworks available in the market. Some of them are listed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React JS, Angular, Vue, Django and many more.")),(0,o.kt)("p",null,"Django is that it is built on python. It follows the DRY rule, which means \u201cDon't Repeat Yourself\u201d. As the name says, this rule is all about keeping the code simple and non redundant. Some advantages of using Django are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It takes care of user authentication, content administration, site maps."),(0,o.kt)("li",{parentName:"ul"},"Django is highly secure. It helps the developers to avoid many common security mistakes, such as SQL injection, cross-site scripting, csrf/ xsrf (cross-site request forgery) and click-jacking. Its user authentication system provides a secure way to manage user accounts and passwords."),(0,o.kt)("li",{parentName:"ul"},"It\u2019s scalable. (",(0,o.kt)("a",{parentName:"li",href:"https://djangosites.org/"},"Example"),": Instagram, Disqus).  Django uses a \u201cshared-nothing\u201d architecture, which means you can add hardware at any level database servers, caching servers or Web/application servers."),(0,o.kt)("li",{parentName:"ul"},"The framework cleanly separates components such as its database layer and application layer. And it ships with a simple-yet-powerful ",(0,o.kt)("a",{parentName:"li",href:"https://docs.djangoproject.com/en/dev/topics/cache/"},"cache framework"),"."),(0,o.kt)("li",{parentName:"ul"},"Django is very versatile it can be used to create content management systems, social networks to scientific computing platforms etc."),(0,o.kt)("li",{parentName:"ul"},"Django is also a high level, MVT architecture based."),(0,o.kt)("li",{parentName:"ul"},"It has various other advantages as it has an automatic administration interface, Object-relational mapper (ORM), RSS feeds and many more.")),(0,o.kt)("p",null,"Let's dive into the working of Django."),(0,o.kt)("h1",{id:"django-architecture"},"Django Architecture"),(0,o.kt)("p",null,"Django follows the MVT (",(0,o.kt)("a",{parentName:"p",href:"https://pythonistaplanet.com/difference-between-mvc-and-mvt/"},"Model View Template architecture")," ) which is based on the MVC or (Model View Controller architecture). The main difference between these two is that Django itself takes care of the controller part."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MVC stands for _Model View Controller"),"_. It is used for developing the web applications, in this the code is broken into various segments. There are 3 segments, they are:\n",(0,o.kt)("img",{alt:"image2",src:a(9461).Z,width:"1080",height:"720"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Model"),": Model is used for storing and maintaining your data. It is the backend where your database is defined."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Views"),": View is all about the presentation and it is not at all aware of the backend. Whatever the user is seeing, it is referred to a view."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Controller"),": Controller is a business logic which will interact with the model and the view."),(0,o.kt)("p",null,"Now that we have understood MVC, lets learn about ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Django MVT pattern")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MVT stands for ",(0,o.kt)("em",{parentName:"strong"},"Model View Template")),". In MVT, there is a predefined template for user interface. Using this template, you don\u2019t need to rewrite the code again and again!"),(0,o.kt)("p",null,"Now you might be wondering where is the controller?"),(0,o.kt)("p",null,"The controller part is inbuilt in Django. That is, it\u2019s probably the framework itself: the machinery that sends a request to the appropriate view, according to the Django URL configuration."),(0,o.kt)("p",null,"So, in the case of Django, this is what each component is doing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"MODEL")," helps to handle database. It is a data access layer, which contains the required fields and behaviors of the data you\u2019re storing. There\u2019s hardly an application without a database. A model is a Python class, and it does not know anything about other Django layers. Models help developers to create, read, update, and delete objects (CRUD operations) in the original database. Also, they hold business logic, custom methods, properties, and other things related to data manipulation."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"VIEW")," is used to execute the business logic and interact with a model to carry data and renders a template. The view fetches data from a model. Then, it either gives each template access to specific data to be displayed, or it processes data beforehand. It accepts HTTP requests, applies business logic provided by Python classes and methods, and provides HTTP responses to the client requests."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"TEMPLATE")," is a presentation layer that handles the User Interface part completely. These are files with HTML code, which is used to render data. The contents of these files can be static or dynamic. A template is used only to present data since there\u2019s no business logic in it.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The \u2018controller\u2019 here is Django itself which sends the request to the appropriate view in accordance with the specified URL. This is why Django is referred to as MTV rather than MVC architecture.")),(0,o.kt)("p",null,"The developer provides the model, the view, and the template, then maps it to a URL, and Django serves it to the user."),(0,o.kt)("p",null,"In short, a web application has data, layout, and logic. The model will work with the data, the view will work with the logic, and the template will work with the layout."),(0,o.kt)("p",null,"Let\u2019s consider a simple overview of Django MVT Architecture\n",(0,o.kt)("img",{alt:"image3",src:a(8049).Z,width:"590",height:"312"})),(0,o.kt)("p",null,"Template is the front end. Templates interact with the views. The Model servers as a backend. Then View will access Templates and Models and maps. View maps the template to a url and Django works as a controller and serves the Templates to the user."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understanding The Project File Structure")),(0,o.kt)("p",null,"For creating a web application, make sure you have python and django installed. Then, to create a project, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"django-admin startproject myproject\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image3a",src:a(6202).Z,width:"207",height:"246"}),"\nHere ",(0,o.kt)("inlineCode",{parentName:"p"},"myproject")," is the name of the project and it can be named as anything you want. Now you project is created, there is a list of files inside the ",(0,o.kt)("strong",{parentName:"p"},"project directory.")," Let\u2019s understand them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"manage.py"),": It is a command-line utility that lets you interact with this Django project in various ways."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"myproject/"),": It is the actual Python package for your project. It is used to import anything, say  ",(0,o.kt)("inlineCode",{parentName:"p"},"myproject.urls"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"init.py"),": Init just tells the python that this is to be treated like a python package."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"settings.py"),": This file manages all the settings & configuration of your project."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"urls.py"),": This is the main controller which maps it to your website."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"wsgi.py"),": This is an entry-point for the web servers to serve the project you have created. It serves as an entry point for WSGI (Web Server Gateway Interface) compatible web servers. It describes how a web server communicates with web applications, and how web applications can be chained together to process one request.\nIt is used to forward requests from a web server to a backend Python web framework. From there, responses are then passed back to the web server to reply to the requestor.",(0,o.kt)("br",{parentName:"p"}),"\n","Requests are sent from the client\u2019s browser to the server. WSGI forwards the request to the webserver python app, which then returns the completed request back to the webserver and on to the browser"),(0,o.kt)("p",null,"Note that to create your application, make sure you are in the same directory as manage.py and then type the below command:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"python manage.py startapp webapp"),"\n",(0,o.kt)("img",{alt:"image4",src:a(4060).Z,width:"244",height:"423"}),"\nHere ",(0,o.kt)("inlineCode",{parentName:"p"},"myproject")," is the name of the project and it can be named as anything you want. Now if you look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp")," directory, you have some extra things from the original ",(0,o.kt)("inlineCode",{parentName:"p"},"myproject"),". It includes model, test which are related to your backend databases."),(0,o.kt)("p",null,"Next, you need to import your application manually inside your project settings. For that, open your ",(0,o.kt)("inlineCode",{parentName:"p"},"myproject/settings.py")," and add your app manually by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS"),"\n",(0,o.kt)("img",{alt:"image5",src:a(1025).Z,width:"966",height:"380"})),(0,o.kt)("p",null,"Creating a View:  Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp/views.py")," and put the given code in it:\n",(0,o.kt)("img",{alt:"image6",src:a(1917).Z,width:"968",height:"265"})),(0,o.kt)("p",null,"In the above code ,you created a view which returns ",(0,o.kt)("inlineCode",{parentName:"p"},"httpResponse"),". Now to map this view to a URL. You need to add URLconf in your application. So create a new python file ",(0,o.kt)("inlineCode",{parentName:"p"},"urls.py")," inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp"),". In ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp/urls.py")," include the following code:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image7",src:a(622).Z,width:"967",height:"229"})),(0,o.kt)("p",null,"Url Mapping: In the above code, you referenced a view which will return index (defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"views.py")," file). The next step is to point the root URLconf at the ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp.urls")," module. Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"myproject/urls.py")," file and write the below code:\n",(0,o.kt)("img",{alt:"image8",src:a(4501).Z,width:"966",height:"252"})),(0,o.kt)("p",null,"The include() function allows ",(0,o.kt)("em",{parentName:"p"},"referencing other")," ",(0,o.kt)("strong",{parentName:"p"},"URLconfs"),"."),(0,o.kt)("p",null,"Note that there is a trailing slash, this means whenever Django encounters include(), it chops off whatever part of the URL matched up to that point and sends the remaining string to include URLconf for further processing.\nCoding part is completed. To start the server, type the below command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"python manage.py runserver\n")),(0,o.kt)("p",null,"After running the server, go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000/webapp/"},(0,o.kt)("strong",{parentName:"a"},"http://localhost:8000/webapp/"))," in your browser, and you should see the text \u201cHello World\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image9",src:a(4324).Z,width:"749",height:"337"})),(0,o.kt)("p",null,"Congratulations! You have successfully created a basic \u201cHello World\u201d Web App."),(0,o.kt)("p",null,"Let's  understand a bit more about the rest of the files in your website directory."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First, you need to create a \u2018",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"templates")),"\u2019 folder inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," directory and inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"templates")," directory, create one more directory with the same name (django convention) as ",(0,o.kt)("inlineCode",{parentName:"p"},"websitename")," .This will keep all html/css/static files, etc files for your webpage.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After that, you\u2019ll need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"views.py")," file (present in your App directory) where you\u2019ll have to define the view functions which will be called using a specific URL and this function will return the response to the server.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now that you have created an App response page and associated it also with a view through the function defined in",(0,o.kt)("inlineCode",{parentName:"p"},"views.py"),". You need to route different URLs to your different applications/logics through",(0,o.kt)("inlineCode",{parentName:"p"},"urls.py")," in project folder.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"So, now you have to create a similar ",(0,o.kt)("inlineCode",{parentName:"p"},"urls.py")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_NAME")," directory also which will be almost same as the ",(0,o.kt)("inlineCode",{parentName:"p"},"urls.py")," file in the project directory, but this",(0,o.kt)("inlineCode",{parentName:"p"},"APP_NAME/urls.py")," file will only keep the list of all the urls in this specific app(APP_NAME) only. And then you have to link this ",(0,o.kt)("inlineCode",{parentName:"p"},"urls.py"),"(of APP_NAME) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"urls.py"),"(websitename) by simply adding a reference of app\u2019s url file in the Project\u2019s url file."))),(0,o.kt)("p",null,"To make these templates files work & also the database associated with each app, you need to add the APP in the main project\u2019s ",(0,o.kt)("strong",{parentName:"p"},"settings.py")," file manually in the list of ",(0,o.kt)("strong",{parentName:"p"},"INSTALLED_APPS=","[ ]",",")," so that, by doing this, now django will know to look at the ",(0,o.kt)("em",{parentName:"p"},"templates directory for files.")),(0,o.kt)("p",null,"To add your app in the INSTALLED_APPS list, you need to add the App Configuration of your app (class name inside the apps.py file inside your app) in the INSTALLED_APPS list in the project\u2019s settings.py file.",(0,o.kt)("br",{parentName:"p"}),"\n","Example: ",(0,o.kt)("strong",{parentName:"p"},"apps.py")," file inside the \u2018pages\u2019 app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django.apps import AppConfig  \nclass PagesConfig(AppConfig):  \n name = 'pages'\n")),(0,o.kt)("p",null,"Here the app configuration name of your app is the name of the class. Here it is \u201c",(0,o.kt)("strong",{parentName:"p"},"PagesConfig\u201d")," in the above example."),(0,o.kt)("p",null,"So, copy this class name from the ",(0,o.kt)("inlineCode",{parentName:"p"},"apps.py")," file of your app, and add it inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," list in the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.py")," file inside the main project directory.",(0,o.kt)("br",{parentName:"p"}),"\n","Here you need to add the path to the ",(0,o.kt)("inlineCode",{parentName:"p"},"app configuration")," of your app in this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"INSTALLED_APPS = [  \n    'pages.apps.**PagesConfig',  \n    '<APP_NAME>.apps.<ClassName>',  \n 'django.contrib.admin',\n]\n")),(0,o.kt)("p",null,"After adding your app configuration in the main projects app list, it\u2019ll automatically render the templates files and the database of each app."))}u.isMDXComponent=!0},6005:function(e,t,a){t.Z=a.p+"assets/images/1-b5a68326fcc8b1917420b31331e532f6.jpg"},9461:function(e,t,a){t.Z=a.p+"assets/images/2-516005d1169bbe95d680ae1968df1779.jpg"},8049:function(e,t,a){t.Z=a.p+"assets/images/3-fd93531751f069de5089f8b8213ec341.png"},6202:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAD2CAYAAABx9NM6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABzsSURBVHhe7Z1tbFvXeccfKVYcm1mMSLaotXUbUS46rqlUIJyFGgFKoZ22YtpcKhg89Eu3aSriAlHXWv6Qth6EGck+VO6LMkQbDG1tPwQz1lg1qgaY0k3qonoxqiWR4ZV1Z0vtlNimEr1EFiNFsqSd55xzL++lSEo6Is17mf8POCbvG0kD96/nnMt7fiyrqalZJ2MC1Hyyh47XT1Lv4100mNSrN+F3z1zXz8z4xYk6/SydNuoZiBFdaKGOs3qVRVMXnTtRSYMtHdSnV7U9M0ANl1P7ymUap+DUeTp2elitBCAL5frRjE8cp2MPby84haWPOs6MUvDoAA0M6PZcF0X11s3ouzxOodogxUcQHLA5O6w8Znz4az+lisoP6KXtsfJ2gv73b4/oJQCKx84qjyFzP39eP9s+cy//i34GQHEpSuUBoBQoSuUBoBRAeAAwBOEBwBCEBwBDEB4ADEF4ADAE4QHAEIQHAEOK8iXpgeYOOvAHX9JLKZbf+jXdfP5vKPmrn+k1AHiXooQn113V63eW6Z3fvKqXNvLmv32H3rl+SS/5A75bO0b91PKEdT83KAU8F57NWHr9Co1/66heeo/Q3kMDTTPU/bkuwv3e3sEoPIGqB4mmZyn7LIQAPVhFNDudeQ8OT/JXI/Sbf/y8XrM1qj9zgvZ/+os55vOUKAiPJzEIzxH66vdOUt2VXur4xmCGAAWo+Wv/QMdDY/SNtm66qNc64fDcvvIiTf7z43rN1qj5k69R5Sf/cpPJcM00cylBkcaQXDPOE+NInHxHHcs8+S3DCcndq+apbuql49RZPSg6WjGK1apt9nECtd8oJRojFJofVa8hJ9tFxP9ekbzUbU+os17XWo6eOkedjXrPCXd3zrVNvPaP42H6I2tZ4PwcoLgYXG27SE9/sZcm649Tz8lm+2RRqOC0ieD0dmQOjgWPbbZLWcVu/SwXAYpUj1FLSwu1XBinEE+Mq3cu94iICc6O0fgDYYo2yYMEbdRQO06D1gzS2picZSqPkxPszlGXva94l8ZKGuNtMnwitCI4CXFiy/1buike7qSedr2zExHaznCcuuV+LTKg506p6XoyOM5tcaL46WPyc3OQeD2C4x3MLlUnB6nr8fQAqSnZHJw+EZzNZpYahWfXVsKTpNHz+i85B2TDcpAOyhD00dhEgCoPyS3ipG6g0IT47HqRK4J9og510aDYN/xoak5q8tJ5e9/oqWZxrGN/EaeuIRHUehlTB1ERwBCNi9ezqh3PXg1UcyWNUjRMNHrWse106jnwHubf8+gAXX9Y/NU9Kf5ScnB+J76l4DDrq9sPT/mue/Wz/CCnXesTvK1enNSXU92ndK5P5f5PJafSLoJcm6Fk1cGMU8BlNbSmiXN3Uu5XR5UPJGhySO8EPM/OviQVAXr6i30iQI9vKzjM2sq7+tk22FWhn+SJs+dptKpBdLpUl20sR5eorjpAiVvZ64CqHg4OVVJgejJD5RCV8IzVvdPNHndZVRH4gZ3fYcAB+nwLxdq2HhzGpPKU3ZPfysPdq+F4kBqeaaCgoxsmqW1OjXHEOCWWI1zDI3FKijFSaoyju2cbKhm/H1GkPZOURHUjndvaTm1dXgLuPjsPjyFrK8XvtjF84gczGXMmxFnebnWtgqJapJRVGxBjmGMua08nVQ5lHtwPnz5G/dMR6rS6baJZoet7osW1LVatKxdXSFLrM16EAEWhKF+Ssj1nefYNvbQ97t3/UH7tOXyJWZyQvY5L1vKqV/Vg3u4IkD44hx8OlAZFqTxszwnUNW677QpU5t2e09YaoYTj6lf+4fFUkmau6UVQMhSl8ngCMY6RV7rSvqRk8lN5lL2Uv5p1fmEKSof3bngA2CFFu2AAgN9BeAAwBOEBwBCEBwBDEB4ADEF4ADAE4QHAEE9+zwO7DvADngwP7DrAD/guPJsBuw64WxQkPLDr3GUQnqJQgPDArgO7znuDAlxtg12HgV2n9CnMpWrYdWDXeQ9QuO95YNdxAbtO6VHYL0lh17GBXaf0KPwdBrDrwK5TohQ+PIbArmPtC7uOV/Hkl6Sw6wA/4MnKA7sO8AOerDyeQIxjYNcBuUB4ADDEsxcMAPA6CA8AhiA8ABiC8ABgCMIDgCElcbWtfHeAqj/1OJVX3Ee7Ag8Sra/Rndtv0btvTtDsqz+mteV39J4A5I+SqDwHon9Fu4Nq7kDZrnvlPW4V+2ro/rrDtL/xT+V6APJNSYSnrLyc1pcXRcVZpzJRdbjyWK2sIv/3uwHAlER4Fm9cpbevvEjJX/83zb72gsjQKtHaqsgOP4oQFQK+523APXs0G3zv2sAz6RPfgN/x7Zjnwd97jHbv/6CsLutrouIQP3JQ1um+Aw/p9av07tQ4PfvZl+hIQ4C+2z9FT/bcUC9QLKTLoJIGW3LchQ18gS8rz/0f/gQ98PCnaXd1nWz3VYdo9wHRqmtlcDg0dtXhxl04sfznf/wgHfv9ffpVANgZvgzPng88bI9t5KOoOvZz+chjH1FQxfPlt29RTeUu8VwsiyB96rBbSWKM7LZpWYi8yVN04dp5nZ6H4+imcbdNSjz4ZlNp0AlRTOxjiT1M4JtT+T1kl1C/pzWXx34/G/35MAs1r/gyPLv3f0jkQlUW7qqtLS/R8swkLd26JttiQjwmrtP8r0aoueYShd4nwrOq9n/kI1uRhJgQoIg4OXvl1Ol+GnfNHNWc7ZCmnSSNU7/Yb8d3Umcx+EhpSDiammUq5SWD1AX/QV7xZXjK7qmQVcVqZWP/RO2HfkjPtr4k2gj1ivZsbIReODlJ3z75flV1dJMVqSAkHWYbnjJNFKwp8CTpbAYfqc2qJMuasJm8BJjhy/DcWZiWVYTWV2ll7gZ9qXWNjv9ZkI403C8vDByp57aXan9bVBzezx7/rNLoL+7OF6ab2XQKQeo9ObwhapCVb3N5CTDDl+FZfP1/xL+q6qwuLdBD7xddMVlZ1LpUU+McWrO2rdO//7x07zZwGnz6zotuHGuz0n1zIG/4Mjxzr/2Ybl8dEXngYKSqinxcXaOLr9ymi69yW6CLr4k2tkCDL9+mv//XGTr3Hwv6VXwIX3B4zmHMyWXwGRqmeFUD9dQHU1JHkFd8GR5mZvSH9H/nnqTEsDgxZNVxVh69LKvTOj325A36/OkEPfX9OXVwMZFjk51fbZPkNPgobVaoKk7DuFBQEErixtDnv3VIjHX26gqk2tVfL4mKk6SPHNxFj331pt6zdNiKR4H3OU698CMUiJIIz/eeeoiaG39LhEZ03bjiiEcOz39dfodqKu+hv3gqoffMTY/4C65+KyHF1K0kVdekfTdk/fKBXjQm7ZcTFElKvBmg4AG9aJHp1xJyhoe/22mgMdzJUDBKIjwHg/fSJx8JUONH94i2m/btLaPJW8v0yi8X6envz9LcgqhGJUau8PCXpPzTJ/i5kcJSEuEBoBj49oIBAMUG4QHAEIQHAEMQHgAMQXgAMKQkrrbBngOKQUlUHmnPqXbacyqoYl+QAqHDVAV7DigQJRGesrJyWl8R1cW+v40fldegHPYcUCBKIjyLN6/S/JWfSHvO3GsviODwbToFtudshW0YdoD/8O2YJ2XPsarNRnsOB2dp6rq37DmgZPBl5XHbc7Q5R7ZaEaiUPUc1FSy+WRT2HJBPfBkepz3H2XiMIxuPd3RFWrHsOTybVARpM3uOtNJoG82Abcdh+C5la727K+Y22PB++jiXYceBtb69xz7Otu1kOEZ+JkgTPYcvw+O053BbW3Hbc5Yy2XP0/pGc9pwoRavj1C0NOC3Uz5PW5Ekbpa7nYkQXtKmm5ZhtouETO0b9en0LjdWr3xndHPHa9WP6uG4arYqpyXE8A3Te8g8w4jOFCbNBPYgvw8Mid2XB0RXHtueMuFome45sWRmmridS83RY4aQYpsnpTDacNmptdJ/YfU/0k3VUbsap355OIN53yNJF8QzQZOq9mqIUJswG9SK+DM+dhbdk5eG27LLnBLQ9Zy8d+Zi256yKgElnm2qb2nPaHV0p/jVsTd8T3RQPd8r17unTCZrMx4l9bYYs983wSJxIe9eij4qyExeBUpuAh/BleKQ9hyuOaGtLt7U9R499ZFeOKwwvOx9Vy2nP4eA0zdjdtpYLzhoiqsPnVBeLQ5QSGgbpoPNSdNNBscaAQ5UUmJ5UIWHPwXSYoqLqcJctPoLoeBFfhkfac8R4JnUlzd2UOUc0NudIe05S23Nmc9pzojXitLdOYAHLAjfi7MKxHy1AkdbUYL6tNX1atWbDhYAQNdsVrI16RJVzign7Lico3NpK4WmYPr2KL8PD2PacIXHC2ZWFw5SqMrIR23Pe0PacWXVwFoZP98qBu9Vta7BHL3zBQHflROMLBJZUg7tzrmMub33ME6fj+rgYBS91u6dMnx2jRG2IEjB9epaSuDHUtufw+EZXoqLZc7jCiC5dby5BCO+z6c+MQODhdXxbeZwsvHNHBIYrjVV5VIj4itx8Ujy/a4gK1R7JywA/eqpZVKPzCI6HgT1nh1imGps0RVRGclUeuU2Mm/KltwIFA/YcAAwpiW4bAMUA4QHAEIQHAEMQHgAMQXgAMAT2HAAMKYnKI+05Qac9516q2FdDgbrDtB/2HFAgSiI8ZeXltL686Lq7QN1hIBrsOaBAlER4Fm9cpbevvGjbc9bZnqPn+8g7rYuMnKaNadQlRwnYc9iaoxxtRbHnWHOA7Ftp+A7sTqocwg9LlTq+rDxue04d3acNOvdV18rgcIismaay8sggwZ4D8osvK8+BpnYKfOjjMiRlLDfUVUbJDq3nKkC3r71MA1+ZoND7K+T6H/10jr7wVPbqI3+usFFPZ3Pc5JlpvWudYPxCP9FRhwBE39xZJ7ptzVPdcg4Qd+Gap/opHo5R5AHeaZz6nTeIWjeG8nNxfH88TM3Wj/I6t6UfJ5Cfp3qQ+ilm36xq/7TihgqpupPW5wLbx5eVJ2XPUV62tWW3PWcxkz2HPQaiPZLLniNOsM5wPDUN27o7Om09n5zsMRg+fUxN1eaQiPUdZ/uog0048+qkbclyV3SgsZnorH4t29DDtFHPiTDFz+j3Fyd9sx3OtG3Z5vnUxqjhst7nzCgFj2pN1tkxGn+Ap3ar3fj1GmrHaRDBMcaX4WGRu6wwuqXsOS9Ja04v23Nimew5ao5PVljC8UAl1elFhRjDNIVofCgVBLbqBER30ZTkpV57arU09FQdVLKPU80UmnBMuxbv2XvJ0oJcp5n5AFWqK/LZEVXRHmuxC2EiQOFHU1PG7ePbG8R7jWUOINgSvgzPnYVpu5u24rLn3K/tOcqgI+05vJ819hEtpz1HnGzHLhDF5NRot3gwdFRNs5aNrTr6hN8xDmsOk5y6rp+lwwIS7haqz5ASkOTm+lTq1TmooXr1v2I/g9OZALaPL8Mj7Tna2ba6tKDtOaqyuJtYJ0NjbdvEnsOc7VBdHg7Rc106IEkatbtLuhVoolp6RaurTo2puHp0yPfnEG1NIM/HJ27pT3r2PI1WNYg/CqrLNoargTvCl+GR9pyr2p5jVxX9uLpGF19Jt+csaHvOTE57jgu7C8cSQqJIuxWkwsG+tmRtcyoUTV3U7JylauPowvGFADvkAufxYlvMFRL+vwSp4ZkGTPHOA74MD2Pbc4bFKSCrjrPyOJfZnnND23Pm9NFZ4BPR6prJwbkalPOFgf7pCHVa25zdJv5rTmqbWqfsn7Kb5zypt4LsNiYockK/j3i9QXvMw0IQ6/07KRxPs+1YTIikt+v9jgZFxXRfWOCABmuDcMHlgZK4MdS258gKpFrR7Dl5hi8n89WzrXzhal2qzulQ4Mvdm9l9wJbwbeVxIu05XGk4OI6KU0Z3256TZzZ0u3YOSxkTjiuHwJySCM/Xe27QyTOv0w9enKPJm0s0f/sO3VlZpXvK1unL33lT7+UDuCrYXbPM3S5jdJeUhY24bSg/wJ4DgCElUXkAKAYIDwCGIDwAGILwAGAIwgOAIbDnAGBISVQeac+pdtpzKqhiX5ACocNUBXsOKBAlEZ6ysnJaXxHVxXF3gbrDYE1UI9hzQGEoifAs3mR7zk9se46ajn037Dl8s+bWpgaA0sO34WF7Ts1nvkw1f/jXtKfmEO0JsghENPGoqo81a3Sdnv/2h+nm0Mfp7zrepw4GIA/4Mjxue44y58jG9pz9bM9RVceuPBwm8Rz2HJBPfBmePR94WNpAZSgcTa4T4xyuOLLqiOXlt29RTeUu8VwsiyB96rBzZmY63A1zT7/mKQHW3B1+fu5Ul5pXk2GuDk8JsG/qzCA5VMe3OX5ZO9XlU9ucr4guodfxZXhS9hwRFtHWV9z2nKVs9hyxbySXPWcLBBoraSzTNOz2LOadNJzmnBY58U2FVUpFwtFUIKWgwyEDAZ7Dl+Fhkbsaz+iqY9tzRnT7mXzcaM/RbQcks01fzmje2YjTnCNnoc6HqIErm1RDpY6HoMP7+DI8dxbekpWH27LLnrNX23P20JGPaXuO9rUpx8FqbnvOTshh3snOME1O66cikmMTOkjiaAg6vI8vwyPtOXqMs7Z0W9tzuAqJqiK7clxh9HJa29SesxMymndyEaWDVUmauaaW+s6PUpDVUHCq+QJfhkfac8R4RtlzNjZpznHZc5LanjO7iT2HrTTWX3+BnAatn28HRxcu/UJAoLHVrkrRU8cpQnEatiWHwxSvaqCe+iCNnkd0vI4vw8Nkt+e4K434hx578g1tz5lVB2fFYb7h7lf9GPVP6E2bIYJmX2lzmHfSSV6aoQa9X2djgvpdFx6UGipU5QgU8CylZc9Z5fCo6uNFew5Xoc3E6ny5+7gldgeexreVx4m057jGOSpEfEXOX/acNmoV1QjydX9QEuGR9pxvpttz1uiecv/Yc7gqDQzEiC7kyZYDCg7sOQAYUhKVB4BigPAAYAjCA4AhCA8AhiA8ABgCew4AhpRE5ZH2nKDTnnMvVeyrofvrDtN+2HNAgSiJ8JSVl9P68qK8uyB9hmkZ7DmgQJREeBZvsD3nRWnPmX3tBZEhNXfHnm3qAeQU7e3+zCLwNL4d87A9Z/f+D8rqsr6mHG1yigKt030HHtLrV+ndqXF69rMvyUly3+2foid7bqgXAGCH+LLyuO05rJxy2HNEcKxZpvYcH+7CiWXYc0A+8WV4nPYcy5hjP5ePZvYcvjnT/pVr0cFiy01qIhsvWzYb5y9TOw03zvU91MZzfLRFR3bbMhh1rPXqxlDV7M/Ax6d19dIn14Hi4cvwOO053FVbW3bbcxZz2HMeyWHPYYNNiKdBS+qokpJEorJJmqIUlrM+OUR897M24LQc00KP9PVj1HA0JA/dlNqY/MVredyZUQoe1YGUUpAwRR3hZLcBpix4A1+Gh0XuXFWsVmbbc16S1pxeNujEMttzlHUnCzx9urZBTZNub6BgPE4Ja/lQJVF8mOd6SmlHsCbtr397K0VolM7b0o4+6rgwrp9vwoTjR3aHumhwIkDhR/n1WQoSoEp1FV5+JrgNvIMvw3NnQZy9ciyzSisue8792p7DTdtzeD97/LOJPYcdAvNBOij+0rfVByk+0iVOXms5RIlb6i9+3xPdFA93yi6Wqws1PemYUm3O9SlR8TTOaggdlbfwZXikPUePc1aXFrQ9R41x3E2Nc5yzTHPbc9ghQOKvfhsd1GKO61N6ucqpghqmrs9xN0uFyB6jVB10jU+iNUH9bHvUVQfsoEq3WxVXP+iovIYvwyPtOVcte06qqsjH1TW6+Iq257xq2XMWtD1nZhN7jojFrQQFws1ifKOqyPAIp0ksT2fqLjm6cHJ8EqFW+4IDT6nOcnEi/UJAbXPqooPYFnOFRElBGp4R3chswkVQFHwZHia7PUdVGNlkdWJ7zg1tz5lTB+dChkD85be6R9yVIxGCqetqWV4YSF0Zi1G/lnWIMY4c7FvbGmhsy2MeEdB2fdzRII2mmXc4wMFa7kbmo1MI8kVp2XNkBVLNC/acrZhweJ/O6sGsbmtJUxedExWtN92PDYqKbyuPE9uew8FxVKAyKqI9R5zwxxspL9WirTVCiSEEx2uUROU5GLyXPvlIgBo/uke03bRvbxlN3lqmV365SE9/f5bmFu5GgPgL0hg5v9kZv9CSugSdhZyVR4x/Bvi7oon+3JUJFAXYcwAwpCS6bQAUA4QHAEMQHgAMQXgAMAThAcAQX1xtgx0HeBFfVB5px6l22nEqqGJfkAKhw1QFOw4oEr4IT1lZOa2viOpi3z3Aj8pbUA47DigSvgjP4s2rNH/lJ9KOM/faCyI4q7J5yY4D3nt4dsyTsuNY1WajHYeDszR1HXYcUBQ8WXncdhxtxpGtVgQqZcdRTQULdhxwt/Fk5TnQ1E6BD31chkMFQwdEdtdSy7z99rWXaeArExR6X4UM0I/+8236wlPZqg/fvNlMM5cSFGlUt3DKmzdJ34BpLVs3c/JUgBMRns0jsbfJ9ZU0eIEopo9LXnL8UG+24xjntvlR6o+HqdkxbUHeKGpNost4Q6j+P1yIU/ho6nW65XQFnmvUSZVD6e8nPmsLfq4x33iy8jjtONzWVtx2nKVMdhy9fySHHUcRoEj1mDLVXNA/G1/vXO4Rp6ci+mglxc9oq03aNqIQxazjzowSNR63Z4NmP06c+PJn5vU2cYI3O2ebtvdQZzhO3bxNtH6KZdFMif+DeK9ea7/pCHVKrRXPOk06DED8WcJEmIFaEDwZHha1K8uNqjApO86Iq2Wy48iWkySNntenEs8a3bCshB/M8OkOrZUSyG1OxqnfqgpSHJKy3GQ7LnqqmUITg6ltQ13Ue8mSfYiq0RSicce8HZZ/BCz1lQvxmc869js/alt/eNZp0nYpRCkqsoMZqIXBk+G5s/CWrDzcll12nIC24+ylIx/TdpxVETDpZFMtpx1n2zglhu65Om6UyyBF9uOS9nTuzMhKaB3LXcI0qUhGhiYpoZ+qaePa9Wa75tQmkF88GR5px+GKI9ra0m1tx1FVSHXluMLwsvNRtdx2nO2gxxZWF6ulP63yZCP3cemVhE05KURFsY/TbStTr5sOUnB+hlQsh0VlS0jvm+yySdccKASeDI+044jxTOpKmrspM45obMaRdpyktuPMbmrH2TJ8Qoq/55PWX20WDuqnOclxnOxSOU05YjDfXKufi1OctVeR9ky/pKCkIykVsBjztFrjGrGtPeIOiegqJsKt1BpOwC5aQDwZHsa24wyJcYVdWThMqSojG7Ed5w1tx5lVB+cDOR4JUszqQtXzKGcL5DpObDt2IUGRE3qbCMOgPeYR8Tl9TA3+rWNFSwXGiahQUw16n06KTFsGH4s+GpsOUSijLgvkC1/cGGrbcXh8oyuRF+w4+YDF7eyp3sx1kMLqFlqO7Mxs/3XBdvFs5XFi23Fc4xz1awhFs+Pkg/Z0wWGe4O5gldObDQqBL8Lz9Z4bdPKbr9MPXpyjyZtLNH/7Dt1ZWaN7ytfpy995U+/lA/gLS0eXLJPgcGdoISN/l+S4lA0KA+w5ABjii8oDgBdBeAAwBOEBwBCEBwBDEB4ADEF4ADAE4QHAEIQHAEMQHgAMQXgAMAThAcAQhAcAQxAeAAxBeAAwBOEBwBCEBwBDEB4ADEF4ADAE4QHAEIQHAEMQHgAMQXgAMAThAcAQhAcAQxAeAAxBeAAwBOEBwBCEBwBDEB4ADEF4ADAE4QHAEIQHAEMQHgAMQXgAMAThAcAQhAcAQxAeAAxBeAAwBOEBwBCEBwBDEB4ADEF4ADAE4QHAEIQHAEMQHgAMQXgAMAThAcAQhAcAQxAeAAxBeAAwBOEBwBCEBwBDEB4ADEF4ADAE4QHAEIQHAEMQHgAMQXgAMAThAcAQhAcAQxAeAAxBeAAwBOEBwBCEBwAjiP4fKEOK5J4xa90AAAAASUVORK5CYII="},4060:function(e,t,a){t.Z=a.p+"assets/images/4-4c1874d91afe328e9dcd37fcab563349.png"},1025:function(e,t,a){t.Z=a.p+"assets/images/5-30d21933262442a38ab03cf2265e9849.png"},1917:function(e,t,a){t.Z=a.p+"assets/images/6-a6f3ae1473e7b413ef8f2a13275aa60e.png"},622:function(e,t,a){t.Z=a.p+"assets/images/7-f13715e425636abba6b5f10e3d712505.png"},4501:function(e,t,a){t.Z=a.p+"assets/images/8-60f8ff540936422520383ca185596044.png"},4324:function(e,t,a){t.Z=a.p+"assets/images/9-d146505e50f8172d61287991f35c4e6a.png"}}]);