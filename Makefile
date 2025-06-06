postgres-on-docker:
	docker run -d \
	--name twenty_pg \
	-e POSTGRES_USER=postgres \
	-e POSTGRES_PASSWORD=postgres \
	-e ALLOW_NOSSL=true \
	-v twenty_db_data:/var/lib/postgresql/data \
	-p 5432:5432 \
	postgres:16
	@echo "Waiting for PostgreSQL to be ready..."
	@until docker exec twenty_pg psql -U postgres -d postgres \
		-c 'SELECT pg_is_in_recovery();' 2>/dev/null | grep -q 'f'; do \
		sleep 1; \
	done
	docker exec twenty_pg psql -U postgres -d postgres \
		-c "CREATE DATABASE \"default\" WITH OWNER postgres;" \
		-c "CREATE DATABASE \"test\" WITH OWNER postgres;"

redis-on-docker:
	docker run -d --name twenty_redis -p 6379:6379 redis/redis-stack-server:latest

clickhouse-on-docker:
	docker run -d --name twenty_clickhouse -p 8123:8123 -p 9000:9000 -e CLICKHOUSE_PASSWORD=clickhousePassword clickhouse/clickhouse-server:latest \
