# Notes

## Video

React Composition Patterns w/ Brian Kirkby
 
https://www.youtube.com/watch?v=e298MYkDhuY&list=PLWX9jswdDQ0V6vmoXMuB_ky3w6KHA6i8F&index=22&t=0s






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
