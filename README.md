# How to run

### Before running

`npm install`

### 1. With Docker (preferable)

1. Get **Docker** installed and running;
2. Execute `docker-compose up -d --build`;
3. Execute `npm run start`;
4. Open `http://localhost:3000`;

------

### 2. With MongoDB installed on host

1. Create new `.env` file in the project root (see `.env.sample`);
2. Put your MongoDB credentials in there;
3. Execute `npm run start`;
4. Open `http://localhost:3000`;

# Running test

Just execute `npm run test`;
