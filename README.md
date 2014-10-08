emberchaos
==========

How use this project
--------------------

```
cd rails
bundle install
cd ../ember
npm install
bower install
```


How this project has been created
--------------------------------

Ruby, rails, Node, Npm, Postgres were already installed, next:

```
npm install -g ember-cli
rails new railschaos -B -S -d postgresql
mv railschaos rails
ember new railschaos --skip-git
mv railschaos ember
git add .
git commit -m "initialization"
git push origin master
rm -rf rails/app/assets
```

In rails/Gemfile remove the following:

```
coffee-rails
jquery-rails
turbolinks
jbuilder
```

And add :

```
gem 'active_model_serializers'

group :development, :test do
  gem 'sqlite3'
end

group :production do
  gem 'pg'
end
```

Next, run in rails:

```
bundle install
```


Run ember server
-----------------

cd ember
ember server

Voir les tests: http://localhost:4200/tests