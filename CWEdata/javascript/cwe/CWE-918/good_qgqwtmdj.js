version: "2.1"

services:
    pg96:
        image: postgres:9.6
        restart: always
        environment:
            POSTGRES_PASSWORD: password
        ports:
            - 5432:5432
        volumes:
            - ../../packages/nocodb/tests/pg-cy-quick:/docker-entrypoint-initdb.d
        healthcheck:
            test: ["CMD-SHELL", "pg_isready -U postgres"]
            interval: 10s
            timeout: 5s
            retries: 5
version: "2.1"

services:
    pg96:
        image: postgres:9.6
        restart: always
        environment:
            POSTGRES_PASSWORD: password
        ports:
            - 5432:5432
        volumes:
            - ../../packages/nocodb/tests/pg-cy-quick:/docker-entrypoint-initdb.d
        healthcheck:
            test: ["CMD-SHELL", "pg_isready -U postgres"]
            interval: 10s
            timeout: 5s
            retries: 5