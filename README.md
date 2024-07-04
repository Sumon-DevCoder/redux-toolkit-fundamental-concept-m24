# Redux

Redux is a predictable state container for JavaScript applications. It helps you manage the state of your application in a consistent way.

## Key Concepts

1. **Single Source of Truth**:

   - The state of your entire application is stored in a single object tree within a single store.
   - Easier to debug and inspect the state of your application.

2. **State is Read-Only**:

   - The only way to change the state is to dispatch an action, an object that describes what happened.
   - Ensures state changes are predictable and traceable.

3. **Changes are Made with Pure Functions**:

   - Use pure functions called reducers to specify how the state tree is transformed by actions.
   - A reducer takes the previous state and an action, and returns the next state.

4. **Middleware**:

   - Redux middleware provides a third-party extension point between dispatching an action and the moment it reaches the reducer.
   - Can be used for logging, crash reporting, or handling asynchronous actions.

5. **Integration with React**:

   - Redux can be used with any UI layer, but is most commonly used with React.
   - `react-redux` bindings make it easy to connect Redux with React components.

6. **DevTools**:
   - Powerful developer tools allow you to inspect every state and action payload.
   - Features include "time-traveling," and live-editing code without reloading the app.

# Why Use Redux?

## Benefits

1. **Predictable State Management**:

   - State changes are consistent and follow strict rules.

2. **Centralized State**:

   - Single source of truth for application state.
   - Easier to manage and debug.

3. **Time-Travel Debugging**:

   - Powerful tools for debugging, including "time-travel" to previous states.

4. **Server Rendering**:

   - Useful for managing state in server-rendered applications.

5. **Middleware for Async Actions**:

   - Consistent handling of asynchronous actions and side effects.

6. **Separation of Concerns**:

   - Clear separation between state management and UI components.

7. **Community and Ecosystem**:
   - Large community and rich ecosystem of tools and extensions.

## When to Use Redux

### Appropriate Use Cases

- Complex state shared across many components.
- Need for predictable state management and easier debugging.
- Handling complex asynchronous actions.
- Large-scale applications that need to be easily scalable.
- Team collaboration requiring consistent state management.

### When Not to Use

- Simple state management needs.
- Local component state can be managed with React's built-in state.
- The learning curve is not justified by application requirements.

## Alternatives

- **Context API**: For simpler state management needs.
- **MobX**: More opinionated, potentially simpler for some use cases.
- **Recoil**: Integrates more seamlessly with React.

# Inner Working Of Redux
![ Alt Text](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif).

# Redux Terminology

## Action
Actions are events triggered by the user. Each action has a corresponding reducer function that defines how the state should change in response to that action.

## Dispatch
Dispatching an action means sending the action object to the store. It triggers the corresponding reducer to update the state.

## Payload
Optional data attached to an action. It carries additional information needed to update the state.

## Reducer
A reducer is a pure function that takes the current state and an action as inputs and returns a new state. It defines how the application state changes in response to different actions.

## Store
The store holds the state of the application. It dispatches actions, maintains the state, and notifies subscribers about state changes.

# How to use redux in react application

# How to use redux in react application

###1. [Install vite](https://vitejs.dev/guide)

###2. [Install tailwind](https://tailwindcss.com/docs/guides/vite)

###3. [Install Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start)

