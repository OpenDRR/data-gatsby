## OpenDRR Documentation

# English

Configure Gatsby pages

Breaking down the code:

**`gatsby-node.js`**:

```
const fs = require("fs")
const yaml = require("js-yaml")


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const details = yaml.load(fs.readFileSync("./content/data/yaml/details.yaml", "utf-8"))
  details.forEach(element => {
    createPage({
      path: element.path,
      component: require.resolve("./src/templates/datasetDetails.js"),
      context: {
        details: element.details
      },
    })
  })

```


1. import file sync(fs) & js-yaml
2. Load the 'details.yaml' and parse the content
3. Using Gatsby's createPage() [API]('https://www.gatsbyjs.com/docs/reference/config-files/actions/#createPage'),
 we create pages programmatically from the parsed file.


4. Using the context property we pass our data into the page as a special prop named 'details', allowing it to be consumed. Read more on contexts [here]('https://www.gatsbyjs.com/docs/creating-and-modifying-pages/') 

Create a template 
To finish the page generation process of the sourced content, we must create a template for producing dynamic pages from data

**`src/templates/datasetDetails.js`**
```
import React from "react"
import { Link } from "gatsby"
const basicTemplate = props => {
  const { pageContext } = props
  const { details } = pageContext

  return (
    <div>
      <ul>
        {details.map((data, index) => {
          return <li key={`content_item_${index}`}>{data.item}</li>
        })}
      </ul>
    </div>
  )
}
export default basicTemplate
```

Running gatsby develop in the terminal and opening a browser window to http://localhost:8000/ you’ll see a page with content that was sourced from a YAML file used to generate your site.



# Working with page templates



**`pages/British-Columbia.en.js`**:

```
import React from "react";
import BCMapComponent from "../svg/BC-Generalized.svg";
import YAMLData from "../../content/data/yaml/prov-terr.yaml";
import { Link } from "gatsby";
import { Accordion, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";



````
Using [QGIS](''https://qgis.org/en/site/) we created a generalized .shp file that was then converted into an .svg file showing the economic regional boundaries of each province or territory.

**`src/svg/BC-Generalized.svg`**:

![BC Generalized](screenshot-example.png)



---

# Français


Configurer les pages Gatsby

Décomposer le code :

**`gatsby-node.js`** :

```
const fs = require("fs")
const yaml = require("js-yaml")


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const details = yaml.load(fs.readFileSync("./content/data/yaml/details.yaml", "utf-8"))
  details.forEach(element => {
    createPage({
      path: element.path,
      component: require.resolve("./src/templates/datasetDetails.js"),
      context: {
        details: element.details
      },
    })
  })

```


1. importez file sync(fs) & js-yaml
2. Chargez le fichier 'details.yaml' et analysez son contenu.
3. Utiliser la fonction createPage() [API]('https://www.gatsbyjs.com/docs/reference/config-files/actions/#createPage') de Gatsby,
 nous créons des pages de façon programmatique à partir du fichier analysé.


4. En utilisant la propriété contextuelle, nous transmettons nos données à la page sous la forme d'une propriété spéciale nommée "details", ce qui permet de les consommer. En savoir plus sur les contextes [ici]('https://www.gatsbyjs.com/docs/creating-and-modifying-pages/') 

Créer un modèle 
Pour terminer le processus de génération de pages à partir du contenu source, nous devons créer un modèle pour produire des pages dynamiques à partir de données.

**`src/templates/datasetDetails.js`**
```
import React from "react"
import { Link } from "gatsby"
const basicTemplate = props => {
  const { pageContext } = props
  const { details } = pageContext

  return (
    <div>
      <ul>
        {details.map((data, index) => {
          return <li key={`content_item_${index}`}>{data.item}</li>
        })}
      </ul>
    </div>
  )
}
export default basicTemplate
```

En exécutant gatsby develop dans le terminal et en ouvrant une fenêtre de navigateur sur http://localhost:8000/, vous verrez une page dont le contenu provient d'un fichier YAML utilisé pour générer votre site.



# Travailler avec des modèles de pages



**`pages/Colombie-Britannique.fr.js`` :

```
import React from "react";
import BCMapComponent from "../svg/BC-Generalized.svg";
import YAMLData from "../../content/data/yaml/prov-terr.yaml";
import { Link } from "gatsby";
import { Accordion, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";



````
En utilisant [QGIS](''https://qgis.org/en/site/), nous avons créé un fichier .shp généralisé qui a ensuite été converti en un fichier .svg montrant les frontières économiques régionales de chaque province ou territoire.

**`src/svg/BC-Generalized.svg`** :

![BC Generalized](screenshot-example.png)

---

## 🚀 Quick start
1. ** Clone the repo **
    ```shell
    git clone https://github.com/OpenDRR/data.git
    cd data
    yarn install // npm install
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `opendrr-geospatial` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

Note this manual integration of Leaflet was taken from: https://robyremzy.github.io/blog/2016/leaflet-inside-a-post/

<!-- USAGE EXAMPLES -->
## Usage

_For more examples, please refer to the [Documentation](https://github.com/OpenDRR/data/tree/main/documentation)_

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/OpenDRR/data/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### Prerequisites

* GitLFS installed (https://git-lfs.github.com)

### Steps

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Joost Van Ulden - [jvanulde](https://github.com/jvanulde) - joost.vanulden@canada.ca

Nicky Hastings - nicky.hastings@canada.ca

Project Link: [https://github.com/OpenDRR/data](https://github.com/OpenDRR/data)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Web Experience Toolkit](https://github.com/wet-boew/wet-boew)
* [Gatsby](https://www.gatsbyjs.com/)
* [Leaflet](https://leafletjs.com/)
* [GitHub Pages](https://pages.github.com)
