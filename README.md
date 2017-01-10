# Employee Profile

##Styling
* This project uses [Sass](http://sass-lang.com/) as a CSS preprocessesor.
* [BEM](http://getbem.com/) methodology is used as the standard naming convention

	**You need to run this Sass command in your termial before you can edit the stylesheets**

1. Open terminal
2. Go to the project file directory 

	```
	cd employee-profile
	```
3. Watch all your .scss files for changes

	```
	sass --watch .:.
	```


##Component Types
*There are 2 types of components which are 'presentational' and 'containers'*

1. **presentational components**
	* Are concerned with how things look.
	* May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
	* Often allow containment via this.props.children.
	* Have no dependencies on the rest of the app, such as Flux actions or stores.
	* Don’t specify how the data is loaded or mutated.
	* Receive data and callbacks exclusively via props.
	* Rarely have their own state (when they do, it’s UI state rather than data).
	* Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.

2. **containers components**
	* Are concerned with how things work.
	* May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
	* Provide the data and behavior to presentational or other container components.
	* Call Flux actions and provide these as callbacks to the presentational components.
	* Are often stateful, as they tend to serve as data sources.
	* Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.

Source is from ['Presentational and Container Components'](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.3j6kjwvgv), an article in Medium by Dan Abramov.
