## Introduction

- Check an answer
- Accept an answer
- No possible solutuion
- Redraws
- Win/Lose

## Verifying an Answer 

- Difference between randomNumbersOfStars and Sum of selectedNumbers array
- Sums of the array could be done with the reduce operation, and start it with 0 in case the array is false

```js

<Button selectedNumbers={selectedNumbers}
          				checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect}/>

checkAnswer = () => {
  	//answerIsCorrect
    this.setState(prevState => ({
    	answerIsCorrect: prevState.randomNumberOfStars ===
      	prevState.selectedNumbers.reduce((acc, n)=> acc + n, 0)
    	
    }));
  }

```

### Changing the button

```js
const Button = (props) => {
	let button;
  switch (props.answerIsCorrect){
  	case true:
    	button=
      <button className="btn btn-success">
      	<i className="fa fa-check"></i>
      </button>;
    break;
    case false:
    	button=
      <button className="btn btn-danger">
      	<i className="fa fa-times"></i>
      </button>;
    break;
    default:
    	button=
      <button className="btn" 
      				onClick={props.checkAnswer}
      				disabled={props.selectedNumbers.length === 0} >
      	=
      </button>;
      	
    break;
  }
	return (
  	<div className="col-2">
      {button}
    </div>
  )

}

```

## Accepting an Answer

- usedNumbers should be marked as used
```js
acceptAnswer = ()=> {
  	this.setState(prevState => ({
    	usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect:null,
      randomNumberOfStars: 1 + Math.floor(Math.random()*9),
    }));
  };

  case true:
    	button=
      <button className="btn btn-success" onClick={props.acceptAnswer}>
      	<i className="fa fa-check"></i>
      </button>;
    break; 
```

## Redraws

```js
redraw = ()=>{
  	if (this.state.redraws === 0) {return;}
  	this.setState(prevState => ({
    	
    	randomNumberOfStars: 1 + Math.floor(Math.random()*9),
      selectedNumbers: [],
      answerIsCorrect:null,
      redraws : prevState.redraws - 1,
    }));
  };


  <Button selectedNumbers={selectedNumbers}
          				checkAnswer={this.checkAnswer}
                  acceptAnswer={this.acceptAnswer}
                  redraw={this.redraw}
                  redraws={redraws}
                  answerIsCorrect={answerIsCorrect}/>

const Button = (props) => {
	let button;
  switch (props.answerIsCorrect){
  	case true:
    	button=
      <button className="btn btn-success" onClick={props.acceptAnswer}>
      	<i className="fa fa-check"></i>
      </button>;
    break;
    case false:
    	button=
      <button className="btn btn-danger">
      	<i className="fa fa-times"></i>
      </button>;
    break;
    default:
    	button=
      <button className="btn" 
      				onClick={props.checkAnswer}
      				disabled={props.selectedNumbers.length === 0} >
      	=
      </button>;
      	
    break;
  }
	return (
  	<div className="col-2 text-center">
      {button}
      <br/>
      <br/>
      <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={props.redraws===0}>
        <i className="fa fa-refresh" ></i> {props.redraws}
      </button>
    </div>
  )

}
```

## The Done Status

```js

//use ternari statment
{ doneStatus ? 
    <DoneFrame doneStatus={doneStatus}/> :
            <Numbers selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}
            usedNumbers={usedNumbers}/>
}

const DoneFrame = (props) => {
	return(
  	<div className="text-center">
  	  <h2>{props.doneStatus}</h2>
  	</div>
  );
};
```

## Winning and Losing the Game

- this.setState(first argument, ~second argument)
- this second argument is a call back function that will execute once the setState function have ended 


## Finish Code

```js
var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

const Stars = (props) => {
	//const numberOfStars = 1 + Math.floor(Math.random()*9);
  
	return (
  	<div className="col-5">
    {_.range(props.numberOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
    )}
		</div>
  )

}

const Button = (props) => {
	let button;
  switch (props.answerIsCorrect){
  	case true:
    	button=
      <button className="btn btn-success" onClick={props.acceptAnswer}>
      	<i className="fa fa-check"></i>
      </button>;
    break;
    case false:
    	button=
      <button className="btn btn-danger">
      	<i className="fa fa-times"></i>
      </button>;
    break;
    default:
    	button=
      <button className="btn" 
      				onClick={props.checkAnswer}
      				disabled={props.selectedNumbers.length === 0} >
      	=
      </button>;
      	
    break;
  }
	return (
  	<div className="col-2 text-center">
      {button}
      <br/>
      <br/>
      <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={props.redraws===0}>
        <i className="fa fa-refresh" ></i> {props.redraws}
      </button>
    </div>
  )

}

const Answer = (props) => {
	return (
  	<div className="col-5">
    	{ props.selectedNumbers.map((number,i)=>
      	<span key={i} onClick={() => props.unselectNumber(number)}>
        {number}
        </span>
      )}
    </div>
  )

}

const Numbers = (props) => {
	const numberClassName = (number) => {
  	if(props.usedNumbers.includes(number)){
    	return 'used';
    }
  	if(props.selectedNumbers.includes(number)){
    	return 'selected';
    }
  }
 	return (
  	<div className="card text-center">
  	  <div>
  	    {Numbers.list.map((number,i)=>
        <span key={i} className={numberClassName(number)}
          onClick={() => props.selectNumber(number)}>
          {number}
        </span>
        )}
  	  </div>
  	</div>
  )
}

Numbers.list = _.range(1,10);

const DoneFrame = (props) => {
	return(
  	<div className="text-center">
  	  <h2>{props.doneStatus}</h2>
      <button className="btn btn-primary" onClick={props.resetGame}>
      	Play Again
      </button>
  	</div>
  );
};

class Game extends React.Component {
//will manage all states of a single game
	static randomNumber = () => 1 + Math.floor(Math.random()*9);
  
  static initialState = () => ({
  	selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5,
    doneStatus: null,
  });
  
	state = Game.initialState();
  
  selectNumber = (clickedNumber)=> {
  		if(this.state.selectedNumbers.includes(clickedNumber)) {return;}
  		if(this.state.usedNumbers.includes(clickedNumber)) {return;}
      this.setState(prevState => ({
      	answerIsCorrect: null,
				selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    	})	);
  };
  unselectNumber = (clickedNumber)=> {
  		if(!this.state.selectedNumbers.includes(clickedNumber)) {return;}
      this.setState(prevState => ({
     		answerIsCorrect: null,
      	selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
      }));
  };
  checkAnswer = () => {
  	//answerIsCorrect
    this.setState(prevState => ({
    	answerIsCorrect: prevState.randomNumberOfStars ===
      	prevState.selectedNumbers.reduce((acc, n)=> acc + n, 0)
    	
    }));
  };
  acceptAnswer = ()=> {
  	this.setState(prevState => ({
    	usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect:null,
      randomNumberOfStars: Game.randomNumber(),
    }),this.updateDoneStatus);
  };
  
  redraw = ()=>{
  	if (this.state.redraws === 0) {return;}
  	this.setState(prevState => ({
    	
    	randomNumberOfStars: Game.randomNumber(),
      selectedNumbers: [],
      answerIsCorrect:null,
      redraws : prevState.redraws - 1,
    }),this.updateDoneStatus);
  };
  possibleSolutions = ({randomNumberOfStars,usedNumbers}) => {
  	const possibleNumbers =_.range(1,10).filter(number => 
    	!usedNumbers.includes(number)
    );
    
    return possibleCombinationSum(possibleNumbers, randomNumberOfStars)
  };
  updateDoneStatus = () =>{
  	this.setState(prevState => {
    	if(prevState.usedNumbers.length === 9){
      	return {doneStatus: 'Done. Nice!'};
      }
      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)){
      	return {doneStatus: 'Game Over!'};
      	
      }
    })
  };
  resetGame = () => this.setState(Game.initialState());
  
	render() {
  	const { 
    	selectedNumbers, 
    	randomNumberOfStars, 
      usedNumbers,
      answerIsCorrect,
      redraws,
      doneStatus
    } = this.state;
  	return(
    	<div className="container">
    	  <h3>Play Nine</h3>
        <hr/>
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
        	<Button selectedNumbers={selectedNumbers}
          				checkAnswer={this.checkAnswer}
                  acceptAnswer={this.acceptAnswer}
                  redraw={this.redraw}
                  redraws={redraws}
                  resetGame={this.resetGame}
                  answerIsCorrect={answerIsCorrect}/>
        	<Answer selectedNumbers={selectedNumbers}
          				unselectNumber={this.unselectNumber}/>
        </div>
        <br />
        { doneStatus ? 
        	<DoneFrame doneStatus={doneStatus}/> :
					<Numbers selectedNumbers={selectedNumbers}
        				 selectNumber={this.selectNumber}
                 usedNumbers={usedNumbers}/>
        }
        
    	</div>
    )
  }
}


class App extends React.Component {
	render() {
  	return(
    	<div>
    	  <Game />
      </div>
    )
  }
}



ReactDOM.render(<App />,mountNode); 

```


## Summary

- Verfiy and accept answer
- 5 redraws to balance the level
- No possible solutions
- Done status (win/lose)

### Whats next?
- [React Page](https://facebook.github.io/react/)
- Add play timer to the game
- Get players information and stored somewhere else
- Create leader board
#### GraphQL working with data !Important
- [Building Scalable APIs with GraphQL](https://app.pluralsight.com/player?course=graphql-scalable-apis&author=samer-buna&name=graphql-scalable-apis-m1&clip=0&mode=live)
#### Advanced Node.js
- Easiest option to render server-side HTML from the same React applications tat you write for yout clients