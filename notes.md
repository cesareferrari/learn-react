# No1tes

## Video

HTTP/AJAX II
https://youtu.be/I4XcgsHvats?t=1



When we deal with state, we want to change state only at the application level.

## Adding a method to a class component

The way we add a method to a class component is to simply create an identifier
inside the class definition and assign a function to this identifier.

We assign an arrow function.
The identifier represents the name of the method.


```
class App extends React.Component {

  toggleItem = itemId => {
  }

}
```

How do we use a class method? We probably need to pass it down to a child
component and the way we do this is to add a property when we define the child
component in the parent component. We add a property of toggleItem that has the
value of this.toggleItem, which is the identifier that returns the method
previously defined in the class component:

```
<GroceryList
  groceries={this.state.groceries}
  toggleItem={this.toggleItem}
/>
```
If we have to pass it down again to another child, we can reference the same
identifier but we need to reference it via props, because it was passed to
GroceryList from App through props:

```
{
  props.groceries.map(item => {
    return (
      <GroceryItem
        item={item}
        key={item.id}
        toggleItem={props.toggleItem}
      />
    )
  })
}
```

## Assign a class based on a property of an object

We use a ternary operator to check if the item has a property of purchased set
to true. If it does, we add the class 'purchased' to the div.
We can then style the purchased class differently, for example with a
line-through.

```
<div className={props.item.purchased ? 'purchased' : ''}>
```

The example above assumes we don't have any other class on the div.
What if we already have some class name and need to add an additional purchased
class?

In this case we can use a string iterpolation syntax with the backticks, like
this:

```
<div className={`item${props.item.purchased ? ' purchased' : ''}`} >
```
We add the item css class, and then interpolation and inside the brackets we
check the value of purchased and if it's true we add a space and the purchased
class, otherwise we add an empty string.








## onClick event handler

```
onClick={ () => {props.toggleItem(props.item.id)} } 
```

The onClick event handler is assigned to an arrow function. The function body
calls props.toggleItem, which is the function that was defined in the parent component and passed down through props.
toggleItem is given an argument of the item id, also passed down through the
props.

Why don't we simply assign the toggleItem function to the event handler lke so:

```
onClick={ props.toggleItem(props.item.id) }
```
Is it because we need to hold on to the event?



## Updating purchased property of an item

When we click on an item we want to update the purchased property of that item.
We call the toggleItem function and inside it we call setState.
setState merges the object we pass to it with the current state, and re-renders
the components that need rendered.

We can't directly update the state, because the state should be immutable, so we
need to create a new object with the new state.
We do this by using the map method on the groceries array.
map will return a new array, so we don't update the existing array but return a
new one.

Inside the map method we take each item in turn.
We check if the item id is the same as the item id that we pass in.
If it it's not, we return the item unchanged.

If it is we return an object that has all the properties of the item we passed
in, but one property changed, the purchased property.
We assign the purchased property the value of the opposite of the current
purchased property. So, if the current purchased property is set to true, we set
it to the opposite, which is false. If it's false we set to the opposite, which
is true.

In effect we are toggling the property.

```
  toggleItem = itemId => {
    console.log("itemId: ", itemId);
    this.setState({
      groceries: this.state.groceries.map(item => {
        if (itemId === item.id) {
          return { ...item, purchased: !item.purchased }
        }

        return item;
      })
    });
  }
```


## Comments in JSX

Here's how to comment in JSX: User regular Javascript comments /* */ but include them
in curly braces.

    { /* <button onClick={(event) => { props.clearPurchased(event) }} > */ }




## PropTypes

Javascript is not a strongly typed language. Javascript functions are happy
to accept data of different types than what we expected when we declared the function.
For example, we can pass a number to a function that expects a string. What
Javascript will do is try to convert the number into a string and go on to the next
operation.

This may be what we want, but it may also lead to bugs and errors in the code
when the operations performed on a piece of data are not what we thought we were
doing because the data passed in is of a different type.

PropTypes is a technology that tries to minimize this problem in React by
checking the types passed in the props object against a specification we set
beforehand and to raise a warning if the types passed don't match the types expected.

To use PropTypes we need to import the library at the top of the component where
we want to use it, like so:

```
import PropTypes from 'prop-types';
```

Next, we call the propTypes property on our component and pass it an object that
specifies the props object expected types.

For example, we may have a Pokemons component that is passed an array of
pokemons objects. Since we know that pokemons must be an array, we can use
PropTypes to enforce this type.

At the bottom of our component file, we add this code:

```
Pokemons.propTypes = {
  pokemons: PropTypes.array
}
```

Now if we passed pokemons as a different type we would get a warning in the
Javascript console in our browser.

To learn more about PropTypes you can check out the documentation here:

Typechecking With PropTypes

https://reactjs.org/docs/typechecking-with-proptypes.html



Checking that the pokemons prop is indeed an array is helpful, but PropTypes
goes deeper. It can check the content of the array and make sure it's an
expected type.

pokemons is expected to be an array of objects, so we can check that all
elements of the array are objects with this syntax:

```
Pokemons.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object)
}
```

If one of the elements is not an object, PropTypes would give us a warning in
the console.


PropTypes lets us go further and describe the shape of an object, that is the
inner structure of an object, so our data is validated more thoroughly.
We do that with the shape() method of PropTypes.
shape() takes an object and validates the types inside the object.

```
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    base_stamina: PropTypes.number,
    base_defense: PropTypes.number
  })
}
```

We can also specify if a property is required in the props object by adding
isRequired at the end, like so:


```
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number.isRequired  // required property
  })
}
```









## React lifecycle methods

componentDidMount is placed inside a class component. It can't be placed inside
a functional component because a functional component only renders JSX and does
nothing else. 

componentDidMount is run after the component has been rendered on the page.
It is the place where we usually fetch the data from an external data source.

In the constructor we initialize the state to something empty, then we fetch the
data inside componentDidMount, once the component has been rendered.


```
  constructor() {
    console.log('Pokemons constructor called.')
    super();

    this.state = {
      pokemons: [] 
    }
  }
```

componentDidMount looks like this: we set the state from the data (imagine
pokemonData is what is returned by the external API call.

```
  componentDidMount() {
    this.setState({pokemons: pokemonData})
  }
```






The next lifecycle method that is called is componentDidUpdate().
componentDidUpdate takes as the first two arguments the previous props and the previous state.
Inside the method we can do something if some condition is met.
For example, here we check if the previous state and the current state are
different. Since they are, the console log statement will be run.

```
  componentDidUpdate(prevProps, prevState) {
    if (prevState.pokemons !== this.state.pokemons) {
      console.log('pokemons state has changed.')
    }
  }
```

Note that if you call setState inside componentDidUpdate you need to do it
inside of an if condition, because otherwise setState() would be called recursively
every time componentDidUpdate() is called, and create an infinite loop.

An example of when to use componentDidUpdate() is to call an external API if the
previous state and the new state are different. If not, it's not necessary to
call the API. The call of the API would be inside a condition that checks if the
two states have changed.











## Fetching from external API

If we don't have props on a class component, and we only need to set the state,
we can omit the constructor in the class.
We just add state as a variable on the class and it will be set correctly.

```
class Dogs extends React.Component {
  state = {
    dogs: [],
    dogText: ''
  }
  ...
}
```

Typically, the state is initialized and set to empty values, and then in 
componentDidMount() we fetch external API data and update the state with the
initial real data. In this example we use the fetch() method to retrieve images.
fetch() works asyncronously.
After we get the data we convert the response to json and in the next .then call
we set the state with what is returned. We also print out a message on the
console to see the first element that is returned.
If there are errors, we print out an error in the catch call.

```
componentDidMount() {
  console.log('Dogs CDM called')
  fetch('https://dog.ceo/api/breed/husky/images')
    .then(res => res.json())
    .then(dogs => {
      this.setState({dogs: dogs.message});
      console.log(this.state.dogs[0]);
    })
    .catch(err => console.log('Error:', err));
}
```










## Higher order components and currying

A higher order component allows us to take in a component, add some
functionality to it and return it changed.

The concept of higher order component is based on the concept of currying or
partially applied functions.

Here's an example of currying. We define a function called multiply that takes
one argument, x.
This function returns another anonymous function that takes one argument, y.

When we call the multiply function with the argument of 3, we obtain a function
that ultimately returns 3 * y.

Our multiply(3) function is a function that takes one argument and
multiplies it by 3.

If we assign multiply(3) to an identifier called multiplyByThree, this will
return a multiplyByThree function that takes an argument and multiplies it by 3.

```
function multiply(x) {
  return function(y) {
    return x * y
  }
}

let multiplyByThree = multiply(3);

console.log(multiplyByThree(6));  // 18
console.log(multiplyByThree(4));  // 12
```

We can use arrow function syntax to make function definition shorter, although
it may be a little more difficult to understand. The code below is the same as
the code above:


```
let multiply = x => y => x * y;
```

We can also call the multiply function directly without creating an intermediate
function.
In the code below we invoke multiply passing 2 and then we invoke the resulting function passing 10.
The final result is 2 * 10 = 20

```
multiply(2)(10)  // 20
```


## >>>> TODO Material for articles below






## ReactStrap, css in JS


https://reactstrap.github.io

ReactStrap is a way to add Bootstrap styling in a React application.

Install ReactStrap  and Bootstrap with the command below. Note that Reactstrap
does not include Bootstrap, so we need to install both in our project.

```
npm install --save reactstrap
npm install --save bootstrap
```

There is no need to use --save option anymore. It was used to update
package.json, but this is the default behavior now, so there is no need to add
that.
```
npm install reactstrap
npm install bootstrap
```

Include Bootstrap in index.js file:

```
import 'bootstrap/dist/css/bootstrap.min.css';
```

At this point, Reactstrap is ready to use. We import the Reactstrap components we want in the components we need them with this syntax:


```
import { Button, Alert } from 'reactstrap';
```

And we use components like normal

```
<Button color="primary">Default button</Button>
```

See the documentation for all the options.


## Styled components

https://www.styled-components.com

Styled components is a way to create your own styles inside Javascript.
This works differently from Reactstrap, in the way that it lets you define
styles for components inside the Javascript file.

In the example below, the identifies styled comes from the library. We call `a`
on it, so it's like an anchor tag, followed by backticks.
Backticks in this context are a tagged template literal.
styled.button is a function and the arguments are passed inside the backticks.
Inside the backticks you define the css styles

```
const StyledButton = styled.button`
  background-color: gray;
  border: 1px solid black;
  padding: 4px 10px;
  color: white;
  border-radius: 6px;
`

render(
  <div>
    <StyledButton>Styled component button</StyledButton>
  </div>
)
```

Inside the backticks we can also add Javascript code that performs actions, so
these styles become dynamic.

Install styled components with this syntax:

```
npm install --save styled-components
```

Then we need to import it into our file:

```
import styled from 'styled-components';
```

The way we structure these styles, we can create separate styled components that
have component and styles in the same file, save the files in a `styled`
directory inside the `components` directory and pull them into the components where
they are needed.

We can extend the css for those styled components with this syntax:
 
```
const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid palevioletred;
  padding: 4px 10px;
  border-radius: 6px;

  ${ props => 
      props.primary && 
      css`
        background: palevioletred;
        color: white;
      `
  }
`
```

This is saying, if we have the primary prop as true, then add that extra css.

To make this work, we need to pull in css, which is a function from
styled-components.

```
import styled, { css } from 'styled-components';
```

Note that you can use SASS syntax and nest the elements:

```
  &:hover {
    background-color: #9c274e;
    color: white;
  }
```


We can extend those styled components by passing the original component to
the styled function. The styled function is a high order function that takes a
component and returns another component, with the styles extended that we
define.

In the code below we are defining a TomatoButton component that takes the styles
from StyledButton and extends them with extra styles. 
We then use TomatoButton in our code.
Remember we need to import styled from styled-components for this to work.

```
import styled from 'styled-components';


const TomatoButton = styled(StyledButton)`
  color: tomato;
  border-color: tomato;
`
```


## Emotion css in js

https://emotion.sh/
https://github.com/emotion-js/emotion

This is another system for adding CSS in js that is supposed to be better than
styled-components.



## React routing

To use React routing we need to install the router library into our project:

```
npm install react-router-dom
```

and then import the router. this syntax renames BrowserRouter to simply Router
inside our module.

```
import { BrowserRouter as Router } from 'react-router-dom';
```

We then wrap our App inside the <Router> component:

```
render () {
  return (
    <Router>

      <div className="App">
        <TodoList todos={this.state.todos} />
      </div>

    </Router>
  );
}
```

To use the router, we need to import the Route component:

```
import { BrowserRouter as Router, Route } from 'react-router-dom';
```

This gives us a Route component that we can use to specify the component to
render when we hit a certain path.
In the example below, when the path is exactly /styling we render the Styling component.

Routes that don't have this path in the URL won't render the Styling component.

```
<Route exact path="/styling" component={Styling} />
```


## Links to navigate the React app
The ideas of Links is to be able to navigate inside the React application
without having to reload the page.

We first import the Link as part of the react-router-dom library.

```
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
```

Then we use it inside the application as a component:

```
<Link exact to="/pokemons" >Pokemons</Link>
```

We set the to property of the Link component to the location we want to reach.
Link will create an a tag with the href set to the to location.

The to property of a Link component can include javascript interpolation like
the example below:

```
<Link to={`/books/${props.book.id}`}>
```



## Pass information to rendered components on route

A route renders a component, but how can we pass information (props) to this
component?

Here's what we have so far, this route renders the Store component.

```
<Route exact path="/styling" component={Store} />
```

Our goal is to be able to pass properties to the Store component. If instead of
using component on the route we use render, we can pass a function that returns
a component.

```
<Route path="/store" render={() => <Store />} />
```

When we use Route in this way, we can pass to the component properties coming
from the state, like books in this case:

```
<Route path="/store" render={() => <Store books={this.state.books} />} />
```

When we use Route with the component syntax, Route also passes some important properties like history, location and match by default.

But using Route with render  will not pass down those properties unless we do it
manually.
These properties are passed down by the props, so we can pass the props to the
anonymous component created by Route and add them inside the component with the
spread operator.

```
<Route
  path="/store"
  render={props => <Store {...props} books={this.state.books} />}
/>
```



## Nested routes

We can use nested routes inside our component, if we have a Book component we
can render different children based on the path.
If we go to the regular book/id path we render the description.
If we go to 'book/id/shipping' we render shipping information instead.

```
<nav className="book-nav">
  <Link to={`/books/${book.id}`}>Description</Link>  
  <Link to={`/books/${book.id}/shipping`}>Shipping</Link>
</nav>


  <Route
    exact={true}
    path="/books/:id"
    render={props => <BookDescription {...props} book={book} />}
  />

  <Route
    path="/books/:id/shipping"
    render={props => <BookShipping {...props} book={book} />}
  />
```

The route in the App component need not to have the exact property.
When it did, the shipping component would not display.

```
<Route path="/books/:id" component={Book} /> 
```


## NavLink

NavLink adds a class name of active to the one that is currently being used.
active is used for styling purposes so we know which link is active in a list of
links.

```
<NavLink exact to={`/books/${book.id}`}>Description</NavLink>  
<NavLink exact to={`/books/${book.id}/shipping`}>Shipping</NavLink>
```

With NavLink we can use the exact property in the same way as Route. It helps us
match a route exactly so it adds the active class correctly.


## History

Route has an history property that helps us navigate programmatically between
pages. The history matches the history property of the browser, and its' similar
to an array that we can add items by pushing it.

In this example we have a button and when we click on the button we want to push
onto the history the new location. We add an onClick event listener and run
the routeToShop() function when the button is clicked.

```
<button onClick={routeToShop}>Shop now</button>
```

```
const routeToShop = e => {
  e.preventDefault();
  props.history.push('/store')
}
```


## How to grab data from external API
Promises are a way for the browser to defer the execution of something in an
asyncronous fashion so that the UI doesn't get locked up.

This is how normally functions work:

```
function howdy() {
  return 'hi'
}

let response = howdy();

console.log(response);
```

The problem with this is when what we are doing inside a function takes a lot of
time, like calling an API server or doing some work that takes a lot of time.

The let expression will wait until the function is finished. So it will make the
application not responsive to the user, until the function is done.


A way to solve this problem is with a callback.
In the code below we define howdy to take a callback.
We move the code that takes a long time to execute inside the callback.

At this point, howdy gets called and in turn it calls the callback.
howdy returns immediately, so it doesn't lock up the interface.
The work that takes time is delegated to the callback, and when the callback is
finished it will return its result and it's put into the UI.

```
function howdy(callback) {
  callback('hi');
}

let cb = greetResponse => console.log(greetResponse);

howdy(cb);
```

This works but if we have a series of callbacks it becomes complicated to keep
track and hard to read and prone to bugs.

Promises solve this callback hell problem.

### Axios

Axios is a way to make http requests and to deal with responses.

First we import axios at the top of the file

```
import axios from 'axios';
```

then we use it inside componentDidMount()

```
componentDidMount() {
  axios.get('http://localhost:3333')
    
}
```

Axios returns back a promise and promises when they are successfull call the
then() method passing in the response.
If errors are returned, it calls the catch method passing in the error.

```
componentDidMount() {
  axios.get('http://localhost:3333/items')
    .then(response => this.setState({items: response.data}))
    .catch(err => console.log(err))
}
```


### Promises

```
function makePromise(isGood) {
  return new Promise((resolve, reject) => {
    if (isGood) {
      resolve('all good');
    } else {
      reject('all bad');
    }
  });
}

let p = makePromist(true);

console.log(p); // all good
```
This promise has been resolved so it prints all good because isGood is true.


The promise below is pending because the function passed in the promise definition has not called resolve or reject.

```
console.log(new Promise(() => {}));
// Promise { <pending> }
```

If the promise is not resolved yet, it sits there in a pending state. That could
happen if you are making an external API call and the call takes a while to
resolve.

The way to get the values out of a promise is to use the .then syntax.

```
p = makePromise(true);
console.log(p); // Promise { 'all good' }


p = makePromise(false);
console.log(p); // Promise { <rejected> 'all bad' }


p
  .then(goodValue => console.log(goodValue)) // all good
  .catch(badValue => console.log(badValue))  // all bad
```

If we add more .then, the result of a promise is wrapped inside another promise
and sent to the next .then method.



## Display error message

Initialize state with errorMessage as an empty string.

```
  state = {
    books,
    items: [],
    errorMessage: ''
  }
```

Inside componentDidMount, in the catch clause, if there is an error update the
state with the error message.

```
componentDidMount() {
  axios.get('http://localhost:3333/items')
    .then(response => this.setState({items: response.data}))
    .catch(err => {
      console.log(err);
      this.setState({errorMessage: err.message});
    })
}
```

Create a condition where if there is an error message it displays it with the
shortcut operator && .

```
{ this.state.errorMessage && <h3 className="error"> { this.state.errorMessage } </h3> }
```
