module.exports = {
    name: "Code Stitch Web Designs",
    email: "andrewachkarbusiness@gmail.com",
    phoneForTel: "REDACTED FOR PRIVACY",
    phoneFormatted: "REDACTED FOR PRIVACY",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Toronto",
        state: "ON",
        zip: "L4L4L4",
        country: "CAN",
        mapLink: "https://www.google.com/maps/place/CN+Tower/@43.6425701,-79.3896317,17z/data=!3m1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m15!1m8!3m7!1s0x882b34d68bf33a9b:0x15edd8c4de1c7581!2sCN+Tower!8m2!3d43.6425662!4d-79.3870568!10e1!16zL20vMDF0d3M!3m5!1s0x882b34d68bf33a9b:0x15edd8c4de1c7581!8m2!3d43.6425662!4d-79.3870568!16zL20vMDF0d3M?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
