import emojiCanvas from '../../assets/emoji-canvas.gif'
import kino from '../../assets/kino.gif'
import tracklift from '../../assets/tracklift.gif'
import rollingGallery from '../../assets/emoji-canvas.gif'
import everydle from '../../assets/everydle.png'

import { ProjectsDataT } from './types'

export const KINO_DESC = `
A web application that exhibits trailers for recommended films that are available to stream on Amazon, YouTube, iTunes and GooglePlay. 

The backend utilises a Python Django Rest API framework to serve the website. Kafka and Python are used in an event stream framework to collect data from a number of public APIs. 

The web application, backend API, and data collection event stream are deployed to Digital Ocean’s cloud infrastructure using Docker, Kubernetes and Jenkins.
Version 2 aims to implement graph databases (Neo4J) and machine learning clustering algorithms to provide further recommendations and tailored suggestions based on user ratings.
`

export const EVENT_STREAM_REGISTRY_DESC = `
A React component for observing and monitoring event streams.

See more for more information in ARTICLES.
`

export const FASTAPI_TEMPLATE_DESC = `A template for building a production ready API using the best current technology, approaches and standards for a backend API in 2022.

The starter application provides 'out the box':

* An API web application (using FastAPI's web framework), which includes:
    * OpenAPI documentation endpoint - /docs
    * Health Check endpoint - /health

* Tests
    * Unit (using pytest and Coverage.py)
    * Integration (using pytest, test-containers, and Docker)
    * Acceptance (using pytest)
    * Load (using Locust)

* Code style checks
    * Linting (using Flake8)
    * Formatting (using black and isort)
    * Static type checking (using mypy)

* CI-CD
    * All tests, security, and code-style checks run on all pull requests to 'main' branch (using GitHub Actions)
    * Automatic pushing of Docker image on push to 'main' branch (using GitHub Actions and GitHub Container Registry)
    * Automatic deployment to kubernetes using (using GitHub Actions)
    * Schedules acceptance tests to run daily

* Other
    * Pre-commit hooks that run unit tests, checks security and code-style checks, and prevents merging to 'main'
    * Pull Request templating to encourage high quality Pull Requests
    * A Makefile that contains all available functionality in the repository
`

export const ROLLING_GALLERY_DESC = `
A react application, implementing react-three-fiber, to construct a three-dimensional land that can explored by the user through he character of a wandering ball.

The purpose of this project is to demonstrate how art can be shown and explored in other mediums. 

Further iterations of this work will look to further construct the landscape to make full use of the three-dimensional space, and introduce elements of VR through the use of the react-three/xr library. 

The application is deployed to Digital Ocean’s cloud infrastructure using Docker and Kubernetes. 
`

export const EVERYDLE_DESC = `
A simple react application that shows variants of the popular online game Wordle. 

Further iterations will introduce searchable tags to allow users to easily discover and explore the many Wordle variants. 
`

export const TRACKLIFT_DESC = `
A command lint tool for exporting playlists from NTS or BBC Sounds to Spotify.  

To make the tool more accessible, the next iteration will implement Kivy to construct a cross platform mobile application. 
`

export const PYTHON_TEMPLATE_DESC = ` 
A template for building a python project using the best current technology, approaches and standards in 2022.

The template provides 'out the box':

* Tests
    * Unit (using pytest and Coverage.py)
    * Integration (using pytest, test-containers, and Docker)

* Code style checks
    * Linting (using Flake8)
    * Formatting (using black and isort)
    * Static type checking (using mypy)

* CI-CD
    * All tests, security, and code-style checks run on all pull requests to 'main' branch (using GitHub Actions)

* Other
    * Pre-commit hooks that run unit tests, checks security and code-style checks, and prevents merging to 'main'
    * Pull Request templating to encourage high quality Pull Requests
    * A Makefile that contains all available functionality in the repos
`

export const EMOJI_CANVAS_DESC = `
A web application that allows users to build, edit and save artistic creations made from emojis. 

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
        name: "EVENT_STREAM_REGISTRY",
        src: undefined,
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
        url: undefined,
        platforms: []
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
        url: undefined,
        platforms: []
    },
    {
        name: "PYTHON_TEMPLATE",
        src: undefined,
        desc: PYTHON_TEMPLATE_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/python-template",
        url: undefined,
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
        name: "EVERYDLE",
        src: everydle,
        desc: EVERYDLE_DESC,
        githubUrl: "https://www.github.com/unruffled-nightingale/everydle",
        url: "https://everydle.unruffled-nightingale.com",
        platforms: ["Desktop", "Mobile"]
    },
]