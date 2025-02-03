# MongoDB $inc Operator and Non-Existent Documents

This example demonstrates an uncommon error in MongoDB update operations using the `$inc` operator.  When the `$inc` operator is used to increment a field, and the document being updated doesn't exist, the operation silently fails instead of throwing an error. This can lead to unexpected behavior in your application.

The solution involves using the `upsert` option in the `updateOne` method which will insert a new document if one doesn't exist before incrementing the value.