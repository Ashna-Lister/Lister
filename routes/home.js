const express = require('express');
let expresss = require('express');
let router = express.Router();

router.get("/", function(req,res,next){
    res.render('pages/home.html',{
        home: [
            {
                imgSrc: "https://9b74456f2e4bcbc20970-51751c7e8fb38e7c8b474cab6c7dc602.ssl.cf5.rackcdn.com/2020-12/swoogo_1920x1080_4.jpg",
                cardHoverText: "Use automation to simplify data protection and governance by controlling identities, applications, and data across the information lifecycle.",
                cardTitle: "Data Privacy & Protection",
                cardSubTitle:"The Art of Protecting Data"
            },
            {
                imgSrc: "https://9b74456f2e4bcbc20970-51751c7e8fb38e7c8b474cab6c7dc602.ssl.cf5.rackcdn.com/2020-12/swoogo-1920x1080_4.jpg",
                cardHoverText: "Bolster your security posture with a next-generation SOC that combines the strength of your threat hunters with our faster-than-human machine analysis.",
                cardTitle: "Next-Gen Security Operations",
                cardSubTitle:"Intelligent Security â€“ A Step Ahead"
            },
            {
                imgSrc: "https://9b74456f2e4bcbc20970-51751c7e8fb38e7c8b474cab6c7dc602.ssl.cf5.rackcdn.com/2020-08/rpa_image_3.png",
                cardHoverText: "Micro Focus Robotic Process Automation gives you the power to build, secure, and scale automated processes, from legacy to modern, across the enterprise.",
                cardTitle: "Blog",
                cardSubTitle:"Integrate RPA Bots into your existing tool chain"
            }
        ]
    })})

module.exports = router