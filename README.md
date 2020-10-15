# How to run

### 1. With MongoDB installed on host

1. Create new `.env` file in the project root (see `.env.sample`);
2. Put your MongoDB credentials in there;
3. Execute `npm run start`;
4. The app is running on `APP_PORT` (3000 by default);

------

### 2. With Docker

1. Get **Docker** installed and running;
2. Execute `docker-compose up -d --build`;
3. Execute `npm run start`;
4. The app is running on `APP_PORT` (3000 by default);

-----

### Cross-Origin

By default origin is set up to `http://localhost:8080`
Just add `ORIGIN` variable into `.env` file if you want to change it.

# Running test

Just execute `npm run test`;
