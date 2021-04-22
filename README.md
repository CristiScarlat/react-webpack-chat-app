This is a chat app build with ReactJS, you can test it by open multiple instances of the app in multiple tabs or browsers instances.
When the app is started the landing page will ask you to register your self with a name.
Names of all online users are displayed in the left side of the chat window.
To be able to chat with the online users the registration with just your name is mandatory

The app uses SOCKET IO client in the react app and SOCKET server on the backend.
Backend is an Express app that manages the SOCKET IO clients connections and messages.

For starting the server side navigate to the root of the project and:

cd client
yarn dev

For starting the client side navigate to the root of the project and:

cd server
yarn dev

For building the react app navigate to the root of the project and:

cd client
yarn build

in /dist you can find the builded project
