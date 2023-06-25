import emojiCanvas from '../../assets/emoji-canvas.webp'
import esr from '../../assets/esr-demo.webp'
import kino from '../../assets/kino.webp'
import tracklift from '../../assets/tracklift.webp'
import rollingGallery from '../../assets/rolling-gallery.webp'
import everydle from '../../assets/everydle.png'
import treasureHunt from '../../assets/treasure-hunt.webp'
import bordle from '../../assets/bordle.webp'
import wallpaper from '../../assets/wallpaper.jpeg'

import { ProjectsDataT } from './types'

export const KINO_DESC = `
Co-creator of Kino, an application that exhibits trailers of critically acclaimed films and enables users to filter by rating, language, genre, release date, and runtime.

The backend utilises Python's Django Rest API framework. Kafka and Python are used in the collection of data from a number of public APIs. 

The web application, backend API, and data pipelines are deployed to Digital Ocean’s cloud infrastructure using Docker, Kubernetes and Jenkins.

Next I plan to improve the quality of the data, and introduce user accounts and ratings. With the ratings data I would like to explore the use of a graph database (Neo4J) and machine learning clustering algorithms to provide personalized recommendations.
`

export const EVENT_STREAM_REGISTRY_DESC = `
An open source event streaming platform built on top of Kubernetes, Kafka, Strimzi, Fission.io, Confluent Schema Registry, Grafana, Prometheus and Kowl.

Building upon an open-sourced tool developed by the Babylon Health team, this project aims to leverage existing open-source tooling to create a control plane for deploying 
services and topics within a cluster.

This application allows users to create functions that specify input and output criteria, as well as configuration parameters. These functions can be utilized to
 create APIs, scheduled tasks, and stream processors, which can be managed through the control plane's UI or Kubernetes CRD.

See ARTICLES for more information.
`

export const FASTAPI_TEMPLATE_DESC = `A template for building a production ready API using the best current technology, approaches and standards for a backend API.

THe API web starter application is build on FastAPI and includes "out the box":


ENDPOINTS 

* OpenAPI documentation endpoint - /docs

* Health Check endpoint - /health


TESTS 

* Unit tests (using pytest and Coverage.py)

* Integration tests (using pytest, test-containers, and Docker)

* Acceptance tests (using pytest, and GitHub Actions)


CODE STYLE CHECKS 

* Linting (using Flake8)

* Formatting (using black and isort)

* Static type checking (using mypy)


CI-CD

* All tests, security, and code-style checks run on all pull requests to 'main' branch (using GitHub Actions)
`

export const ROLLING_GALLERY_DESC = `
A 3D React application, using react-three-fiber, to explore ideas how art can be shown and explored in other mediums.

The application is deployed to Digital Ocean’s cloud infrastructure using Docker and Kubernetes. 
`

export const EVERYDLE_DESC = `
A simple react application that shows variants of the popular online game Wordle. 

The application is deployed to Digital Ocean’s cloud infrastructure using Docker and Kubernetes. 
`

export const TRACKLIFT_DESC = `
A command line tool for exporting playlists from NTS or BBC Sounds to Spotify.  

Next steps are to add add subscriptions to channels to avoid having to run the application manually. Further iteration, would
be to create a Kivy cross mobile application to make the tool more accessible. 
`

export const PYTHON_TEMPLATE_DESC = ` 
A template for building a python project using the best current technology, approaches and standards.

The template provides 'out the box':


TESTS 

* Unit tests (using pytest and Coverage.py)

* Integration tests (using pytest, test-containers, and Docker)


CODE STYLE CHECKS 

* Linting (using Flake8)

* Formatting (using black and isort)

* Static type checking (using mypy)


CI-CD

* All tests, security, and code-style checks run on all pull requests to 'main' branch (using GitHub Actions)


OTHER

* Pre-commit hooks that run unit tests, checks security and code-style checks, and prevents merging to 'main'

* Pull Request templating to encourage high quality Pull Requests

* A Makefile that contains all available functionality in the repos
`

export const EMOJI_CANVAS_DESC = `
A web application that allows users to build, edit and save artistic creations made from emojis. 

The application is deployed to Digital Ocean’s cloud infrastructure using Docker and Kubernetes. 
`

export const WALLPAPER_DESC = `
A Python application that helps you learn a language by updating your desktop background daily. 

Utilizing a combination of public APIs for translation, verb extraction, and conjugation, this application updates your desktop background daily, displaying a phrase or quote in your 
target language, along with the present, future, and imperfect conjugations of the extracted verb.
`

export const TREASURE_HUNT_APPLICATION_DESC = `A React application for designing and building custom treasure hunts.

Utilizing a data-driven approach, users can easily define clues, prizes, and styling using JSON.
The application also features an interactive map displaying clue locations and user progress.

The application is deployed to Digital Ocean’s cloud infrastructure using Docker and Kubernetes.
`

export const BORDLE_DESC = `
A web application that tests your knowledge of geography.

Try and traverse the globe by crossing connected border. 

The application is deployed to Digital Ocean’s cloud infrastructure using Docker and Kubernetes. 
`


export const PROJECTS_DATA: ProjectsDataT[] = [
    {
        name: "KINO",
        src: kino,
        desc: KINO_DESC,
        url: "https://kino.unruffled-nightingale.com",
        platforms: ["Desktop"]
    },
    {
        name: "EVENT_STREAM_REGISTRY (WIP)",
        src: esr,
        desc: EVENT_STREAM_REGISTRY_DESC,
        githubUrl: "https://github.com/unruffled-nightingale/event-stream-registry-ui",
        url: "https://unruffled-nightingale.github.io/event-stream-registry-ui/",
        platforms: ["Desktop"]
    },
    {
        name: "FASTAPI_TEMPLATE",
        src: undefined,
        desc: FASTAPI_TEMPLATE_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/fastapi-template",
        url: "https://www.github.com/unruffled-nightingale/fastapi-template",
        platforms: []
    },
    {
        name: "BORDLE",
        src: bordle,
        desc: BORDLE_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/bordle",
        url: "https://bordle.unruffled-nightingale.com",
        platforms: ["Desktop", "Mobile"]
    },
    {
        name: "ROLLING_GALLERY",
        src: rollingGallery,
        desc: ROLLING_GALLERY_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/rolling-gallery",
        url: "https://simms.unruffled-nightingale.com",
        platforms: ["Desktop", "Mobile"]
    },
    {
        name: "TRACKLIFT",
        src: tracklift,
        desc: TRACKLIFT_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/tracklift",
        url: "https://www.github.com/unruffled-nightingale/tracklift",
        platforms: []
    },
    {
        name: "PYTHON_TEMPLATE",
        src: undefined,
        desc: PYTHON_TEMPLATE_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/python-template",
        url: "https://www.github.com/unruffled-nightingale/python-template",
        platforms: []
    },
    {
        name: "EMOJI_CANVAS",
        src: emojiCanvas,
        desc: EMOJI_CANVAS_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/fastapi-template",
        url: "https://emojiart.unruffled-nightingale.com",
        platforms: ["Desktop"]
    },
    {
        name: "TREASURE_HUNT_APPLICATION",
        src: treasureHunt,
        desc: TREASURE_HUNT_APPLICATION_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/treasure_hunt",
        url: "https://treasure-hunt-demo.unruffled-nightingale.com",
        platforms: ["Mobile"]
    },
    {
        name: "LANGUAGE_WALLPAPER",
        src: wallpaper,
        desc: WALLPAPER_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/language_wallpaper",
        url: "https://www.github.com/unruffled-nightingale/language_wallpaper",
        platforms: []
    },
    {
        name: "EVERYDLE",
        src: everydle,
        desc: EVERYDLE_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/everydle",
        url: "https://everydle.unruffled-nightingale.com",
        platforms: ["Desktop", "Mobile"]
    },
]