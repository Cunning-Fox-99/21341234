const a = 1;

let c = true




let people = []
const man = 'Мужчина'
const woman = 'Женщина'

for (let i = 0; i < 10; i++) {

    if (0 === i % 2) {
        people.push(man)
        continue
    }

    people.push(woman)
}

let names = new Map()

names.set('Вася', man)
names.set('Петя', man)
names.set('Вольт', man)
names.set('Рино', man)
names.set('Ревенант', man)
names.set('Вуконг', man)
names.set('Нидус', man)
names.set('Эш', man)
names.set('Некрос', man)
names.set('Атлас', man)

names.set('Миса', woman)
names.set('Эмбер', woman)
names.set('Кора', woman)
names.set('Тринити', woman)
names.set('Эквинокс', woman)
names.set('Октавия', woman)
names.set('Нэчжа', woman)
names.set('Зефир', woman)
names.set('Хильдрин', woman)
names.set('Нова', woman)

let menIteration = 0;
let womenIteration = 0;

let menNames = Array.from(names).filter((obj)=> {
    return obj[1] === man
})

let womenNames = Array.from(names).filter((obj)=> {
    return obj[1] === woman
})



people.forEach(function (item, i, people) {

    item === man ? menIteration++ : menIteration
    item === woman ? womenIteration++ : womenIteration

  //  console.log(menIteration + '<- Мужчины')
  //  console.log(womenIteration + '<- Женщины')

    if (0 === menIteration % 3 && item === man) {
        people[i] = {
            gender: item,
            age: 30
        }
    } else if (0 === womenIteration % 2 && item === woman) {
        people[i] = {
            gender: item,
            age: 20
        }
    } else {
        people[i] = {
            gender: item,
            age: 13
        }
    }

    let items = item === man ? Array.from(menNames.values()) : Array.from(womenNames.values())
    // console.log(items)
    people[i]['name']=items[Math.floor(Math.random() * items.length)][0]
})

console.log(people)






