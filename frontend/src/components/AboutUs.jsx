import React from "react";
import Cards from "./Cards.jsx";

import "./css/AboutUs.css";

const data = {
  suvidhi: {
    name: "Suvidhi",
    work: "Hey! I am Suvi. alongside Web development, I love to sketch and I'm sports and fitness freak!",
    personImg:
      "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    emailLink: "/",
    githubLink: "/",
    twitterLink: "/",
    linkedinLink: "/",
  },

  johar: {
    name: "Harshpreet Singh Johar",
    work: "Hi, I am a web developer with a strong will to learn new techs, looking forward to work for something big",
    personImg:
      "https://drive.google.com/file/d/1P9uw3PkX2IG6zaUTdygNUpou3P6qzAJ_/view?usp=sharing",
    emailLink: "/",
    githubLink: "/",
    twitterLink: "/",
    linkedinLink: "/",
  },

  uttam: {
    name: "Uttam Mittal",
    work: "Data Science, ML Enthusiast and Extremely passionate about every field of Mathematics",
    personImg:
      "https://images.unsplash.com/photo-1605194173943-9167005d9dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTk5JTIwbnVtYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    emailLink: "/",
    githubLink: "/",
    twitterLink: "/",
    linkedinLink: "/",
  },

  ken: {
    name: "Manjot Singh Oberoi",
    work: "I am an open source contributor who is hunting enthusiasts and I love coding and gaming OwO",
    personImg:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    emailLink: "/",
    githubLink: "/",
    twitterLink: "/",
    linkedinLink: "/",
  },

  ishwar: {
    name: "Ishwarendra Jha",
    work: "Full time competitive Programmer, part Time Web Developer ヾ(＠⌒ー⌒＠)ノ",
    personImg:
      "https://images.unsplash.com/photo-1475319122043-5ca9eeceefaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    emailLink: "/",
    githubLink: "/",
    twitterLink: "/",
    linkedinLink: "/",
  },
};

function makeGDriveLinkUsable(s)
{
    var new_link = s.slice(0, 25);
    new_link += "uc?export=view&id=";
    
    for(var i = 32; i < s.length; i++)
    {
        if (s[i] === '/')
            break;
        new_link += s[i];
    }

    return new_link;
}

export default function AboutUs() {
  return (
    <>
      <div className="about-us-heading">MEET THE CREATORS</div>

      <div className="about-us-container">
        <div className="item">
          <Cards
            name={data.suvidhi.name}
            work={data.suvidhi.work}
            personImg={data.suvidhi.personImg}
            emailLink={data.suvidhi.emailLink}
            githubLink={data.suvidhi.githubLink}
            twitterLink={data.suvidhi.twitterLink}
            linkedinLink={data.suvidhi.linkedinLink}
          />
        </div>

        <div className="item">
          <Cards
            name={data.johar.name}
            work={data.johar.work}
            personImg={makeGDriveLinkUsable(data.johar.personImg)}
            emailLink={data.johar.emailLink}
            githubLink={data.johar.githubLink}
            twitterLink={data.johar.twitterLink}
            linkedinLink={data.johar.linkedinLink}
          />
        </div>

        <div className="item">
          <Cards 
            name={data.uttam.name}
            work={data.uttam.work}
            personImg={data.uttam.personImg}
            emailLink={data.uttam.emailLink}
            githubLink={data.uttam.githubLink}
            twitterLink={data.uttam.twitterLink}
            linkedinLink={data.uttam.linkedinLink}
          />
        </div>

        <div className="item">
          <Cards 
            name={data.ken.name}
            work={data.ken.work}
            personImg={data.ken.personImg}
            emailLink={data.ken.emailLink}
            githubLink={data.ken.githubLink}
            twitterLink={data.ken.twitterLink}
            linkedinLink={data.ken.linkedinLink}
          />
        </div>

        <div className="item">
          <Cards 
            name={data.ishwar.name}
            work={data.ishwar.work}
            personImg={data.ishwar.personImg}
            emailLink={data.ishwar.emailLink}
            githubLink={data.ishwar.githubLink}
            twitterLink={data.ishwar.twitterLink}
            linkedinLink={data.ishwar.linkedinLink}
          />
        </div>
      </div>
    </>
  );
}
