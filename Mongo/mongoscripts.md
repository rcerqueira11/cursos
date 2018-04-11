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
supo = db.configuration.find({})[0].supportedCountries
arr = []
supo.forEach(function(element){
    
    if (element.country.$id.toString() == db.countries.find({'iso':'VE'})[0]._id.toString()){
        //arr.push(element.bps.minmunPrice)
        var categories = element.bps.categories
        categories.forEach(function(catego){
            arr.push(catego.distance)
            })
        
        }
    
})
arr

//

var result = []
db.users.find().forEach(function(u) { result.push(u.text) })
```

### Saving things

Instead of putting just :
```js
user = db.users.findOne({userName:"And"})
```
I did just :
```js
  var user = db.users.findOne({userName:"And"})
```
and user._id returns the ObjectId("someId") , if I want to keep it in some variable I do:

```js
var Id = user._id. 
```


## Decompose Recompose Script

```js
// Where you need to change the values
var newPrices = {
    'minimumPrice': 90000,
    '0.0_to_0.5': 0, //this value is 0 by default
    '0.5_to_3.0': 123,
    '3.0_to_5.0': 0912380,
    '5.0_to_10.0': 1313,
    '10.0_to_20.0': 1231,
    '20.0_to_35.0': 123123123,
    '35.0_to_inf': 123123123
}

//Code to change the values
newSupportedCountries = db.conf.find({})[0].SC

newSC.forEach(function (element) {

    if (element.country.$id.toString() == db.countries.find({ 'iso': 'VE' })[0]._id.toString()) {

        //Change minimunPrice
        element.bps.minimumPrice = newPrices['minimumPrice'];

        //Change prices of the categories
        var categories = element.bps.categories
        categories.forEach(function (catego) {
            if (catego.distance.min == 0.0 && catego.distance.max == 0.5) {
                catego.price = newPrices['0.0_to_0.5'];
            }
            if (catego.distance.min == 0.5 && catego.distance.max == 3.0) {
                catego.price = newPrices['0.5_to_3.0'];
            }
            if (catego.distance.min == 3.0 && catego.distance.max == 5.0) {
                catego.price = newPrices['3.0_to_5.0'];
            }
            if (catego.distance.min == 5.0 && catego.distance.max == 10.0) {
                catego.price = newPrices['5.0_to_10.0'];
            }
            if (catego.distance.min == 10.0 && catego.distance.max == 20.0) {
                catego.price = newPrices['10.0_to_20.0'];
            }
            if (catego.distance.min == 20.0 && catego.distance.max == 35.0) {
                catego.price = newPrices['20.0_to_35.0'];
            }
            if (catego.distance.min == 35.0 && catego.distance.max == Infinity) {
                catego.price = newPrices['35.0_to_inf'];
            }

        })

    }

})
newSC
//db.configuration.update({}, { $set: { 'supportedCountries': newSupportedCountries }})

```