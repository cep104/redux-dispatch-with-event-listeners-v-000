// add code snippets from README
let state;

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = reducer(state, action);
  render();
}
//state new equals the outcome of reducer, this now changes our state to increase the count to 1 if we run
// dispatch({type: 'INCREASE_COUNT'})
//enter state in console to see if the change was made
function render() {
  let container = document.getElementById("container");
  container.textContent = state.count;
}

dispatch({ type: "@@INIT" });
//runs dispatch so it hits the default value, can be any word you want inside just not an action word that is being used. Just needs to hit the default to display zero.

let button = document.getElementById("button");
//grab button and define it
button.addEventListener("click", () => {
  dispatch({ type: "INCREASE_COUNT" });
});
//every time the button is clicked run dispatch with increase count action.
