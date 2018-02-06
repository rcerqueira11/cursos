## Get id from query

```js
db.countries.find({'iso':'MX'})[0]._id.toString()
```

## use nested queries

```js
db.country_states.find({'country.$id':db.countries.find({'iso':'MX'})[0]._id})
```

##others

```js

db.country_states.find({'country.$id':db.countries.find({'iso':'MX'})[0]._id, 'name':{$eq:'Coahuila'}})

///
var result = []
db.users.find().forEach(function(u) { result.push(u.text) })

///
supo = db.configuration.find({'supportedCountries.country.$id':db.countries.find({'iso':'MX'})[0]._id})[0].supportedCountries
arr = []
supo.forEach(function(element){
    arr.push(element.country)
    //for (ele of element){
     //   arr.push(ele.country.$id)
    //}  
})
arr

```