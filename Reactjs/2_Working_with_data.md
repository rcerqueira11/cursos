## Introduction
- work with api
- render multiple cards 
- inputs
- [react dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)
## Build a Github Card Component

### First and Advices
   - Component Struncture
   - How many componets to use
   - What each component should describe 
   - good to start from bottom to top
   - top to botto when you know most of the components in the tree.
   - if components will not have any interact with the user (not clicking) and not a top level component where a state needs to be managed, stard that component as a function component.
   - function components have more advantage that class components
   - Only use class-based components when:
        - you need to manage a state object, which is usually done on a top-level component
        - need to personalized event handlers
    - test the smallest increment that you can find
```js
  const Card = (props) => {
	return (
  	<div>
  	  <img src="http://placehold.it/75" />
      <div>
        <div>Name here...</div>
        <div>Company Name here ...</div>
      </div>
  	</div>
  );
};


ReactDOM.render(<Card />,mountNode)

```

### Styling react components
- we can include a css file as normal and use the element class to select and style any element
    - need to use className instead of class property

```js
<div className="info" >Name here...</div>
```

- but as we can write HTML with javascript we can write CSS with javascript as well

```js
const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
  	  <img src="http://placehold.it/75" />
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>Name here...</div>
        <div>Company Name here ...</div>
      </div>
  	</div>
  );
};

```
- feels like inline style but is different
    - this is javaScript, not strings
    - so we can generate it and reuse it
- its okay to use a mix of js styles and global styles    

```js
const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
  	  <img width="75" src={props.avatar_url} />
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>
        	{props.company}
        </div>
      </div>
  	</div>
  );
};

let data = [
	{
  	name:"Paul O’Shannessy",
    avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
    company:"Facebook",
  },
	{
  	name:"Ben Alpert",
    avatar_url:"https://avatars.githubusercontent.com/u/6820?v=4",
    company:"Facebook",
  },
	{
  	name:"Paul O’Shannessy",
    avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
    company:"Facebook",
  },
]

const CardList = (props) => {
	return (
  	<div>
    	#map array of objects into an array of Card components
  	  {props.cards.map(card => <Card {...card}/>)}
  	</div>
  );
};
ReactDOM.render(<CardList cards={data}/>,mountNode)


```

- we can use the spread operator: spread the card object with these three dots
- this makes all the properties of the card object available as props in the Card component, and our data will render exactly as we want it.

```js
const CardList = (props) => {
	return (
  	<div>
  	  {props.cards.map(card => <Card {...card}/>)}
  	</div>
  );
};
```



## Taking Input from the user

- since we want to the data be rendered every time is updated we need to put it on the state of a component 

```js
class App extends React.Component {
	state= {
  	cards: [
      {
        name:"Paul O’Shannessy",
        avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
        company:"Facebook",
      },
      {
        name:"Ben Alpert",
        avatar_url:"https://avatars.githubusercontent.com/u/6822",
        company:"Facebook",
      },
      {
        name:"Paul O’Shannessy",
        avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
        company:"Facebook",
      },
    ]
  }
	render () {
  	return (
    	<div>
	    	<Form />
 	      <CardList cards={this.state.cards}/>
    	</div>
    )
  }
}
```

- Every react event function receives an event argument
    - this event wrapper is around the native JavaScript event object, all methods are available here.

```js
// so the page do not refresh and loose the code of the page
handleSubmit = (event) => {
  	//
    event.preventDefault();
  };
```


### ref 
- this property takes in a function that will be executed when the input element is mounted to the dom
    - receives a reference to the element so we can store the reference in the component istance

```js
<input type="text" 
ref={(input) => this.userNameInput = input} placeholder="Github username" required/>
```

### react state controller onChange

- this way when we type into the text box, React will be aware of this element state change and it will reflect that change back to the element itself because it's a regular React state change.

```js
class Form extends React.Component {

	state = { userName: '' }
  
	handleSubmit = (event) => {
    event.preventDefault();
    console.log('Evente: form submit', this.userNameInput.value);
  };
	render(){
  	return(
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text" 
        	value={this.state.userName}
          onChange= {(event) => this.setState({ userName: event.target.value})}
          placeholder="Github username" required/>
        <button type="submit"> Add Card </button>
    	</form>
    );
  }
}
```

- axios library excelent for AJAX requests

- if the app component passes a funtion reference to the Form component, we can change the state of the App component in that function and the Form component will e able to invoke that function becouse it will be part of its props object 


```js
class App extends React.Component {
	state= {
  	cards: [
      {
        name:"Paul O’Shannessy",
        avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
        company:"Facebook",
      },
      {
        name:"Ben Alpert",
        avatar_url:"https://avatars.githubusercontent.com/u/6822",
        company:"Facebook",
      },
      {
        name:"Paul O’Shannessy",
        avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
        company:"Facebook",
      },
    ]
  }
  
  addNewCard = (cardInfo) => {
  	console.log(cardInfo);
  }; 
  
	render () {
  	return (
    	<div>
	    	<Form onSubmit={this.addNewCard}/>
 	      <CardList cards={this.state.cards}/>
    	</div>
    )
  }
} 

```

### finish code

```javascript
const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
  	  <img width="75" src={props.avatar_url} />
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>
        	{props.company}
        </div>
      </div>
  	</div>
  );
};


const CardList = (props) => {
	return (
  	<div>
  	  {props.cards.map(card => <Card key={card.id} {...card}/>)}
  	</div>
  );
};

class Form extends React.Component {

	state = { userName: '' }
  
	handleSubmit = (event) => {
    event.preventDefault();
    //axio give us a promisethat we can now use to see the response coming from github
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    	.then(resp => {
      	this.props.onSubmit(resp.data);
      	this.setState({ userName: '' });
      });
  };
	render(){
  	return(
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text" 
        	value={this.state.userName}
          onChange= {(event) => this.setState({ userName: event.target.value})}
          placeholder="Github username" required/>
        <button type="submit"> Add Card </button>
    	</form>
    );
  }
}

class App extends React.Component {
	state= {
  	cards: []
  }
  
  addNewCard = (cardInfo) => {
		this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }))
	}; 
  
	render () {
  	return (
    	<div>
	    	<Form onSubmit={this.addNewCard}/>
 	      <CardList cards={this.state.cards}/>
    	</div>
    )
  }
}
ReactDOM.render(<App />,mountNode)
```


## Summary

- Components
    - <Card />: to render information
    - <CardList />: to convert an array of records into an array of card components
    - <Form />: to read input from the user
    - <App />: to manage the relation between all the other components

- state.cards => [<Card />,<Card />,...]
- Refs and controlled components
- Passing functions to child components
    - can be regular primitive values 
    - or functions references that the child can invoke up the chain on the parent component itself