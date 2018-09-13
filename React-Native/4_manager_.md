## Login in redux

Redux will take care of the all logic

ciclo

- User types something
- -> Call Action Creator with text
- -> Action Creator returns an action
- -> Action sent to all reducers
- -> Reducers calculates new app state
- -> State sent to all components
- -> Components rerender with new state
- --> Wait for new changes
- --> User Types some action

