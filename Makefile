dry-run:
	python manage.py makemigrations --check --dry-run

build:
	python manage.py collectstatic 

run:
	gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers 1 --timeout 120