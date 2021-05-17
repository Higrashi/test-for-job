export const assignCategory = (arr) => {
   let category = 1
   
   arr.reduce((acc,item) => {
    if(acc === 6) {
      acc = 0
      category += 1
    }
    item.category = category
    acc += 1
    return acc
  },0)
  return arr 
}

export const selectOptions = [
  {
    text: 'Категория 1',
    value: '1'
  },
  {
    text: 'Категория 2',
    value: '2'
  },
  {
    text: 'Категория 3',
    value: '3'
  },
  {
    text: 'Категория 4',
    value: '4'
  }
]



