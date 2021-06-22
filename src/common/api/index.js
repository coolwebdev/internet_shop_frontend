import * as R from 'ramda'
import axios from 'axios'

import phones from 'api/mockPhones'
// import categories from 'api/mockCategories'
// import {when} from 'ramda'

export const fetchPhones = async () => {
  // ----- Fetching from mock API -----

  // return new Promise((resolve, reject) => {
  //   resolve(phones)
  //   // reject('error')
  // })


  // ----- Fetching from API -----

  try {
    const resp = await axios.get(
      // 'https://run.mocky.io/v3/f556fedc-dd92-4145-a8e5-7f76d3a518d3'
      // 'https://run.mocky.io/v3/a7db78ba-6aa5-481a-b8ff-345f63397519'
      'https://run.mocky.io/v3/48f8f3c9-b6a8-4722-b39b-ffc6410e0751'
    )
    return resp.data.phones
  } catch (err) {
    return err
  }
}

export const loadMorePhones = async ({offset}) => {
  return new Promise((resolve, reject) => {
    resolve(phones)
  })
}

export const fetchPhoneById = async (id) => {
  // ----- Fetching from mock API -----

  // return new Promise((resolve) => {
  //   const phone = R.find(R.propEq('id', id), phones)
  //   resolve(phone)
  // })

  // ----- Fetching from API -----

  try {
    const resp = await axios.get(
      'https://run.mocky.io/v3/48f8f3c9-b6a8-4722-b39b-ffc6410e0751'
    )
    return R.find(R.propEq('id', id), resp.data.phones)
  } catch (err) {
    return err
  }
}

export const fetchCategories = async () => {
  // ----- Fetching from mock API -----

  // return new Promise((resolve, reject) => {
  //   resolve(categories)
  // })

  // ----- Fetching from API -----

  try {
    const resp = await axios.get(
      'https://run.mocky.io/v3/04c03d4a-b3ab-4d4c-98e0-5a12be057b31'
    )
    return resp.data.categories
  } catch (err) {
    console.log(err)
    return err
  }
}
