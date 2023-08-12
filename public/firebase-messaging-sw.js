importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {  
apiKey: "AIzaSyD5QQbkcSdHlwxSZ4Ti_yoBEmtG5oVWTig",
authDomain: "codebrew-contacts.firebaseapp.com",
projectId: "codebrew-contacts",
storageBucket: "codebrew-contacts.appspot.com",
messagingSenderId: "238415444352",
appId: "1:238415444352:web:04ae38370b5aa261ee2965",
measurementId: "G-TXBXW801K6"};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});