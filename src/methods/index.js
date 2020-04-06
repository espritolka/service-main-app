

export function selectOptionsConverter (array){
    let newArray = []
      array.map((item) => {
        item.value = item._id 
        item.label = item.name ? item.name : item.label
        newArray.push(item)
    })
    return newArray
}

export function getMonthText (month){
  const MapMonth = new Map([
        [1  , "Января"],
        [2  , "Февраля"],
        [3  , "Марта"],
        [4  , "Апреля"],
        [5  , "Мая"],
        [6  , "Июня"],
        [7  , "Июля"],
        [8  , "Августа"],
        [9  , "Сентября"],
        [10 , "Октября"],
        [11 , "Ноября"],
        [12 , "Декабря"],
    ])

    return MapMonth.get(month)
}