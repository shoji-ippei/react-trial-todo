echo "init data import"
mongoimport -u kakapo -p nightparrot --authenticationDatabase admin --db todo_trial --collection todos --file /docker-entrypoint-initdb.d/todos.json --jsonArray