import { createReducer } from 'redux-act'

const defaultState = ['mcdonalds', 'adidas', 'tnt', 'greenpeace', 'philips', 'elements']

export default createReducer({}, defaultState)
