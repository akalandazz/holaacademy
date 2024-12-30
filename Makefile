IMAGENAME = "holaacademy"
VERSION ?= "undefined" #Default version
SOURCE_IMAGE = $(IMAGENAME):$(VERSION)
PROJECT_ID = ""
REPO_NAME = ""
REGION = ""



dry-run:
	python manage.py makemigrations --check --dry-run

build:
	python manage.py collectstatic

build-and-push:
	@echo ">>> Building docker image"
	docker build -t $(SOURCE_IMAGE) .

	@echo ">>> Tagging docker image"
	docker tag $(SOURCE_IMAGE) "$(REGION)-docker.pkg.dev/$(PROJECT_ID)/$(REPO_NAME)/$(SOURCE_IMAGE)"

	@echo ">>> Performing authentication to registry"
	gcloud auth configure-docker "$(REGION)-docker.pkg.dev"

	@echo ">>> Pushing image to registry"
	docker push "$(REGION)-docker.pkg.dev/$(PROJECT_ID)/$(REPO_NAME)/$(SOURCE_IMAGE)"

	@echo ">>> Image push completed!"

run-prod:
	poetry run gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers 1 --timeout 120

run-local:
	python manage.py makemigrations
	python manage.py migrate
	python3 manage.py runserver