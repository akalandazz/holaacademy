# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Install system dependencies (e.g., libpq-dev for PostgreSQL, if you're using it)
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry (you can adjust this version if needed)
RUN curl -sSL https://install.python-poetry.org | python3 -

# Add Poetry to the PATH
ENV PATH="/root/.local/bin:$PATH"

# Copy poetry.lock and pyproject.toml to the container
COPY pyproject.toml poetry.lock /app/

# Install dependencies using Poetry
RUN poetry install --no-dev --no-root  # Install only dependencies (omit development packages)

# Copy the rest of the application code into the container
COPY . /app/

# Expose the port that Django will run on
EXPOSE 8000

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Run Django migrations and start the server
CMD ["bash", "-c", "make run-prod"]
