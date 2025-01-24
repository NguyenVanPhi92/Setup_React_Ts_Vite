**V1 Redux Context**
https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md?fbclid=IwZXh0bgNhZW0CMTEAAR3ZALmCcaemoF0-BdC6xIXLuiAN8j1oz9LMX4EprboZqOUuBCL4wf-euM0_aem_9Q94JWbsCBvOZnqZGIhAEA

src
|
+-- app # application layer containing:
| | # this folder might differ based on the meta framework used
| +-- routes # application routes / can also be pages
| +-- app.tsx # main application component
| +-- provider.tsx # application provider that wraps the entire application with different global providers - this might also differ based on meta framework used
| +-- router.tsx # application router configuration
+-- assets # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components # shared components used across the entire application
|
+-- config # global configurations, exported env variables etc.
|
+-- features # feature based modules
|
+-- hooks # shared hooks used across the entire application
|
+-- lib # reusable libraries preconfigured for the application
|
+-- stores # global state stores
|
+-- testing # test utilities and mocks
|
+-- types # shared types used across the application
|
+-- utils # shared utility functions

📦v3
┣ 📂app
┃ ┣ 📂routes
┃ ┣ 📜app.tsx
┃ ┣ 📜provider.tsx
┃ ┗ 📜router.tsx
┣ 📂assets
┣ 📂components
┣ 📂config
┣ 📂features
┣ 📂hooks
┣ 📂libs
┣ 📂stores
┣ 📂testing
┣ 📂types
┣ 📂utils
┗ 📜index.tsx
