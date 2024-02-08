<a name="readme-top"></a>

<div align="center">

  <h1><b>Appointments App</b></h1>

</div>

<!-- TABLE OF CONTENTS -->

## 📗 Table of Contents

- [📖 Appointments App ](#-appointments-app-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [Kanban Board ](#kanban-board-)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Appointments App <a name="about-project"></a>

This is the Appointments App, a web application built with Ruby on Rails, PostgreSQL, JavaScript, React, and Redux. It allows users to manage appointments and schedule appointments with engineers.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
    <li><a href="https://rubyonrails.org/">Rails</a></li>
</details>
<details>
  <summary>Database</summary>
    <li><a href="https://www.postgresql.org/">Postgres</a></li>
</details>
<details>
  <summary>Client</summary>
    <li><a href="https://www.javascript.com/">Javascript</a></li>
    <li><a href="https://reactjs.org/">React</a></li>
    <li><a href="https://redux.js.org/">Redux</a></li>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

```
    - ruby >= 3.2.2
    - rails >= 7.1.3
    - postgres >= 14.7
    - bundler 2.5.1
    - node.js 19.6.0
    - yarn 3.4.1
```

### Setup

Clone this repository to your desired folder:

```bash
  git clone git@github.com:mohamedSabry0/appointments_app.git
```

### Install

Install this project with:

```bash
  cd appointments_app
  bundle install
  yarn install
```

You will need to follow these steps to have your own set of related project secrets:

- delete `config/credentials.yml.enc` file
- use this command `EDITOR="code --wait" bin/rails credentials:edit`
- under `secret_base_key` add this line `devise_jwt_secret_key:`
- in another terminal run `bundle exec rails secret`
- take the output and use it as value for `devise_jwt_secret_key`
- save the file and close it

it will install the required gemfile for running the project

run the following commands to create and migrate:

```bash
  rails db:create
  rails db:migrate
  rails db:seed
```

### Usage

to use this project:

```sh
   bin/dev
```

it will run the the server on `localhost:3000`

to run tests:

```sh
   rspec --format doc
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- KANBAN BOARD -->

## Kanban Board <a name="kanban-board"></a>

- [Project Board](https://github.com/users/mohamedSabry0/projects/13/views/1)
- ![Project Board](https://github.com/mohamedSabry0/appointments_app/assets/22299539/4d9cbc21-df6e-45d9-aaad-860f9144ada4)

- Our team consists of 3 members:
  [@erickma1](https://github.com/erickma1),
  [@MohammadYaser](https://github.com/MohammadYaser),
  [@mohamedSabry0](https://github.com/mohamedSabry0)

## 👥 Authors <a name="author"></a>

👤 **Mohammad Yaser Safi**

- GitHub: [@githubhandle](https://github.com/MohammadYaser)
- Twitter: [@twitterhandle](https://twitter.com/Yaser_Safi19)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/mohammad-yaser-safi-a12083270)

👤 **Eric**

- GitHub: [@erickma1](https://github.com/erickma1)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/eric-mawudeku-55b74883/)

👤 **Mohamed Sabry**

- GitHub: [@mohamedSabry0](https://github.com/mohamedSabry0)
- Twitter: [@mohsmh0](https://twitter.com/mohsmh0)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/mohamed-sabry0/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/mohamedSabry0/appointments_app/issues).
You are welcome to fork the repository and modify the code. We encourage pull requests.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

Give a star⭐️ or a thumbs up 👍 if you like this project! You can visit my GitHub profile for more of my projects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- Project supervised by [Microverse](https://www.microverse.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
**
