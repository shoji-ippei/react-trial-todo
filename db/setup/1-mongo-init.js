const user = {
    user: "kakapo",
    pwd: "nightparrot",
    roles: [
      {
        role: "dbOwner",
        db: "todo_trial"
      }
    ]
  };
  
db.createUser(user);
db.createCollection('todos');