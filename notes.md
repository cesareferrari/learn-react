# Notes

## Video

[ React Tooling - 59:06 ]



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


PropTypes lets us specify what types are accepted inside a component when props
are passed to it.

It prevents bugs by validating data types, since Javascript is not a strongly
typed language.
