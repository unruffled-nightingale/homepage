import emojiCanvas from '../../assets/emoji-canvas.gif'
import esr from '../../assets/esr-demo.gif'
import kino from '../../assets/kino.gif'
import tracklift from '../../assets/tracklift.gif'
import rollingGallery from '../../assets/rolling-gallery.gif'
import everydle from '../../assets/everydle.png'

import { ProjectsDataT } from './types'

export const KINO_DESC = `
Co-creator of Kino, an application that exhibits trailers of critically acclaimed films and enables users to filter by rating, language, genre, release date, and runtime.

The backend utilises Python's Django Rest API framework. Kafka and Python are used in the collection of data from a number of public APIs. 

The web application, backend API, and data pipelines are deployed to Digital Ocean’s cloud infrastructure using Docker, Kubernetes and Jenkins.

Next I plan to improve the quality of the data, and introduce user accounts and ratings. With the ratings data I would like to explore the use of a graph database (Neo4J) and machine learning clustering algorithms to provide personalized recommendations.
`

export const EVENT_STREAM_REGISTRY_DESC = `
An open source event streaming platform built on top of Kubernetes, Kafka, Strimzi, Fission.io, Confluent Schema Registry, Grafana, Prometheus and Kowl.
Building upon an open-sourced tool developed by the Babylon Health team, this project aims to leverage the existing open-source tooling to create a control plane for deploying 
services and topics within a cluster.

This system allows users to create functions that specify input and output criteria, as well as configuration parameters. These functions can be utilized to
 create APIs, scheduled tasks, and stream processors, which can be managed through the control plane's UI or Kubernetes CRD.

See more for more information in ARTICLES.
`

export const FASTAPI_TEMPLATE_DESC = `A template for building a production ready API using the best current technology, approaches and standards for a backend API in 2022.

THe API web starter application (using FastAPI) includes "out the box":

* OpenAPI documentation endpoint - /docs

* Health Check endpoint - /health

* Test framework for unit (pytest), integration (pytest, test-containers, docker), and scheduled acceptance and load tests (pytest, Locust, GitHub Actions)

* A GitHub Actions deployment pipeline that checks linting, formatting, static type checking, test.
`

export const ROLLING_GALLERY_DESC = `
A 3D React application, using react-three-fiber, to explore ideas how art can be shown and explored in other mediums.

Further iterations of this work will look to further construct the landscape to make full use of the three-dimensional space, and introduce elements of VR through the use of the react-three/xr library. 

The application is deployed to Digital Ocean’s cloud infrastructure using Docker and Kubernetes. 
`

export const EVERYDLE_DESC = `
A simple react application that shows variants of the popular online game Wordle. 

The application is deployed to Digital Ocean’s cloud infrastructure using Docker and Kubernetes. 
`

export const TRACKLIFT_DESC = `
A command lint tool for exporting playlists from NTS or BBC Sounds to Spotify.  

Next steps are to add add subscriptions to channels to avoid having to run the application manually. Further iteration, would
be to create a Kivy cross mobile application to make the tool more accessible. 
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