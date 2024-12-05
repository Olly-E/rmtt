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

export const TEAM_MEMBER_OPTIONS = [
  { id: "1", name: "Olivia Smith" },
  { id: "2", name: "David Johnson" },
  { id: "3", name: "Emma Brown" },
  { id: "4", name: "Liam Davis" },
  { id: "5", name: "Sophia Wilson" },
  { id: "6", name: "James Martinez" },
];