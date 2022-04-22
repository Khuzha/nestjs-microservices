all:
	docker-compose up -d

re:
	docker-compose build
	docker-compose up -d