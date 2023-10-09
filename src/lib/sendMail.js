export const sendMail = async ({ subject = "Creware Contact-us", details }) => {
  const config = {
    // SecureToken: "952ec376-38a3-455e-a68a-b6dabe8f8904",
    Host: "smtp.elasticemail.com",
    Username: "rohit.creware@gmail.com",
    Password: "A5C3BFB22CCE9212BFBA9EBCA6FEB69FAAB6",
    Port: "2525",
    To: "kartikeyvaishnav24@gmail.com",
    From: "rohit.creware@gmail.com",
    Subject: "subject",
    Body: "details",
  };

  Email.send(config)
    .then((message) => alert(message))
    .catch((err) => console.log(err));
};
