# Backend

To start the backend-services, navigate into the backend folder and type in

```bash
cd ./backend
docker compose up --force-recreate --build -d
```

Start database for container tests:

```bash
docker run --name mysql-docker-whatamiwatching -d -p 3306:3306 --env MYSQL_ROOT_USERNAME=root --env MYSQL_ROOT_PASSWORD=secret --env MYSQL_DATABASE=whatamiwatching -v C:\\Users\nikla\Documents\GitProjects\SE4\whatamiwatching\backend\database\create.sql:/docker-entrypoint-initdb.d/1.sql mysql:8.0
```

This starts all backend services (currently nameserver, admin, gateway, movie and user).

Currently avaiable routes are:

- http://localhost:8888 (admin)
- http://localhost:8761 (nameserver)
- http://localhost:8080 (gateway)
- http://localhost:8080/api/user/login?username={username}&password={password} (login)
- http://localhost:8080/api/movie/movies/discover?genreID={genreID}&runtime={runtime} (get movies) WARNING: genreID and runtime are optional
- http://localhost:8080/api/movie/movieOfTheDay?userID={userID} (get movies of the day) WARNING: userID is optional
- http://localhost:8080/api/movie/movie?movieID={movieID} (movie details)
- http://localhost:8080/api/genre/list (genres)
- http://localhost:8080/api/genre/favorite?userID={userID} (favorite genre)
- http://localhost:8080/api/genre/favorite?userID={userID}&genreID={genreID} (change favorite genre) WARNING: POST-Request
