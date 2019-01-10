## package-delivery

a [Sails v1](https://sailsjs.com) application


## Project setup
### Test coverage
npm test --coverage

### Lints and fixes files
npm run lint

## Instructions to run
#### 1. Config mysql database
/config/datastore.js

#### 2. Set Google Maps api key (enable Distance Matrix API)
export GOOGLE_API_KEY=KEY

#### 3. Run project
sails lift

#### 4. Create warehouses
http://localhost:1337/warehouse/init

#### 5. Create 1000 random packages
http://localhost:1337/package/addRandomPackages

#### 6. Send packages from main office to warehouse
http://localhost:1337/logistic/sendPackagesToWarehouse

#### 7. Send packages from warehouse to destination address
http://localhost:1337/logistic/sendPackagesToDestination

Notes: for tests purpose, the package's delivery dates are the day which the test is run.

