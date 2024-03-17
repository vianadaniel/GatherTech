up:
	docker-compose up
upd:
	docker-compose up -d mongodb
down:
	docker-compose down
logs:
	docker-compose logs app
test:
	docker-compose run app npm run test