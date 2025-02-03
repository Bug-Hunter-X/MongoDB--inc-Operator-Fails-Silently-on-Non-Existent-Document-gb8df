```javascript
// Incorrect usage of $inc operator in MongoDB update query
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } });
// Problem: If the document with name "John" doesn't exist, the update operation will fail silently instead of throwing an error.
```