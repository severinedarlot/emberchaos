emberchaos
==========

How use this project
--------------------

```
bundle install
rake db:create db:migrate db:seed // just one time
rails s
cd ember
npm install
bower install
ember server --proxy http://localhost:3000
```

See the client part: http://localhost:4200/
See the client tests: http://localhost:4200/tests

How deploy this project
-----------------------

Put the ember build result in rails public directory:

```
./build.sh
```

Use Shelly (https://shellycloud.com/documentation/quick_start) to deploy :

```
gem 'shelly-dependencies'  // just one time
```


How this project has been created
--------------------------------

Ruby, rails, Node, Npm, Postgres were already installed, next:

```
rails new emberchaos -B -S -d postgresql
npm install -g ember-cli
cd emberchaos
ember new emberchaos --skip-git
mv emberchaos ember
git add .
git commit -m "initialization"
git push origin master
rm -rf app/assets
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

Documentation
--------------

Devise: http://givan.se/p/00000000
