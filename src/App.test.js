import React from 'react';
import { render } from '@testing-library/react';
import {traerimagenes} from './helpers'

test('test Function traer imagen', async() => {
  let imagen=await traerimagenes()
  expect(typeof(imagen)).toEqual("string")
})



