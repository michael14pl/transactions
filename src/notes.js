//local store - console

let car = { name: 'mitshubishi', year: 2000 }
//undefined

car
//{name: "mitshubishi", year: 2000}

localStorage.setItem('my_car', JSON.stringify(car))
//undefined

let auto = localStorage.getItem('my_car')
//undefined

auto
//"{"name":"mitshubishi","year":2000}"

let car2 = JSON.parse(auto)
//undefined

car2
//{name: "mitshubishi", year: 2000}
car
//{name: "mitshubishi", year: 2000}