

export function selectOptionsConverter (array){
    let newArray = []
      array.map((item) => {
        item.value = item._id 
        item.label = item.name ? item.name : item.label
        newArray.push(item)
    })
    return newArray
}

export function selectOptionsConverterPrice (array){
  let newArray = []
    array.map((item) => {
      item.value = item._id 
      item.label = item.name ? item.name + ' (' + item.price + ' руб)': item.label
      newArray.push(item)
  })
  return newArray
}

export function getMonthText (month){
  const MapMonth = new Map([
        [0  , "Января"],
        [1  , "Февраля"],
        [2  , "Марта"],
        [3  , "Апреля"],
        [4  , "Мая"],
        [5  , "Июня"],
        [6  , "Июля"],
        [7  , "Августа"],
        [8  , "Сентября"],
        [9 , "Октября"],
        [10 , "Ноября"],
        [11 , "Декабря"],
    ])

    return MapMonth.get(month)
}