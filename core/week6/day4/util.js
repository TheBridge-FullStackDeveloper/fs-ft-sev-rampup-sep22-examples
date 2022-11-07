const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getFormValues = (selector) => [...$$(selector)].map(i => i.value)
       
const clone = (obj) => JSON.parse(JSON.stringify(obj))

const isEmpty = (collection) => !Boolean(Object.keys(collection).length) && collection