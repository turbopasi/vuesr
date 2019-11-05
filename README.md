![vueser - vue user dashboard](https://raw.githubusercontent.com/turbopasi/vue-user-dashboard/master/readme/header-logo.png)

![](https://img.shields.io/badge/-Vue-green)  ![](https://img.shields.io/badge/made%20with-%E2%9D%A4-red) ![https://img.shields.io/badge/-under%20development-orange](https://img.shields.io/badge/-under%20development-orange)

# vuesr
This project originated from using `@vue/cli` starter template. Its goal is to give a starting point for web apps which requires a simple user/admin dashboard frontend. I made it mainly for myself since I don't want to start from scratch everytime. It will include a login/sign-up view, a mainmenu-sidebar, a topbar, content-containers and a modal system. It also includes `vue-router` and `vuex` for navigation and store management. The project also already includes `bulma/buefy` css framework but I did not include any samples on how one might use any of its ready to use components (like forms or lists). It's basically the skeleton for a user/admin dashboard. How you use it, how you plan to implement authentication, how you plan to implement a database or any API is up to you entirely. Have fun ❤.

If you don't know what *Vue* is, I suggest taking a quick look at its [documentation](https://vuejs.org/v2/guide/). It's awesome and I love it !

![vueser - vue user dashboard](https://raw.githubusercontent.com/turbopasi/vue-user-dashboard/master/readme/template-preview-1.png)

## Install template

### Option 1 : Install as plugin to an existing project
First, use vue-cli to create a new project, then add the vue-cli plugin "vuesr". This will setup a project structure with all necessary components.
You need `vue-cli`, install it, if you haven't yet

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

Then create a new project with `vue create`. In the end just add the plugin with `vue add vuesr`. This should create the necessary components, project structure and install dependencies.

```
vue create my-project-name
cd my-project-name
vue add vuesr
```

### Option 2 : Install as preset along project creation
```
vue create --preset turbopasi/vue-cli-plugin-vuesr my-project-name
```

## project structure
coming soon
