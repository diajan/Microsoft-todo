const initialState = {
  myday: [
    { ti: 'f', a: 2 },
    { ti: 'f', a: 2 },
    { ti: 'f', a: 2 },
  ],
  important: null,
  planned: null,
  tasks: null,
}



console.log(
  setStateWithKeys(initialState, 'mydcaay', { ti: 'father', a: '322323' })
)
console.log(setStateWithKeys(initialState, 'myday'))
