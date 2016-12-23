import { createReducer } from 'redux-act'

const defaultState = [
  {
    name: 'barcelona',
    where: 'Barcelona, ES',
    texts: [
      'We recieve and organize different events related to development, learning is sharing.',
      'Work together with an international team. Constant communication and team work.',
      'All disciplines are covered. We can offer an ‘all in one’ service for any claim of one of our beloved clients'
    ],
  },
  {
    name: 'almere',
    where: 'Almere, NL',
    texts: [
      'The core of Elements is in Almere. This is the headquarter of this young company.',
      'Feel welcome to bring your own insight into big projects, at Elements we are open to new bright ideas.',
      'At this moment we are proud to say that we are a big team but this is not enough. We wan’t to grow.'
    ],
  }
]

export default createReducer({}, defaultState)
