### CRUD operation with mongodb using shell command

##### Step 1: create a folder

```javascript
mkdir folderName
```

```javascript
cd folderName
```

##### Step 2: check if mongosh is in your Machine

```javascript
mongosh;
```

##### Step 3: create a database folder and collection

create ur database name by typing <mark>use + ur choice name</mark>

```javascript
use project //as ur database name
```

```javascript
db.createCollection("Staff");
```

##### Step 4: Create data

```javascript
> db.staff.insertOne({name: name, age: age, email: email})
//Or
> db.staff.insertMany([{name: name, age: age, email: email}, {name: name, age: age, email: email}])
```

##### Step 5: Read data

```javascript
> db.staff.find(age: age)
//Or
> db.staff.findOne({name: name})
```

##### Step 6: Update data

```javascript
> db.staff.updateOne({name: name}, {$set:{name: name}})
//Or
> db.staff.updateMany({age: age}, {$set:{age: age}})
// if you have user with the same age you can use updateMany to change their age once
```

##### Step 7: Delete data

```javascript
> db.staff.deleteOne({name: name})
//Or
> db.staff.deleteMany({age: age})
```
