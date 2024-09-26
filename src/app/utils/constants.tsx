import { array, object, string } from 'yup'

export const METHOD = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

export const OPTION_VALIDATION = object()
  .shape({
    name: string().required('Required'),
    id: string().required('Required'),
  })
  .required('Required')

export const OPTIONS_VALIDATION = array()
  .of(
    object().shape({
      name: string().required('Required'),
      id: string().required('Required'),
    })
  )
  .required('Required')

//web page contents
