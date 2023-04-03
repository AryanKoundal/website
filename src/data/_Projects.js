import React from "react";

const projects = [

  {
    category: "Project",
    title: "study-buddy",
    slug: "#study-buddy",
    imageUrl: "img/projects/loginpage.png",
    subtitle: "A project made using Django.",
    period: "July 2022",
    tech: "Django",
    description: (
      <>
        <p>
          StudyBuddy is a free messaging service. Users have the ability to communicate with text messaging, 
          media and files in private chats or as part of communities called "rooms".
        </p>
        {/* <p>
          <a
            href="https://github.com/AryanKoundal/mocha-chai-mongoose/workflows/Node.js%20CI/badge.svg"
            title="Node.js CI"
          >
            <img src="https://github.com/AryanKoundal/mocha-chai-mongoose/workflows/Node.js%20CI/badge.svg" />
          </a>
        </p> */}
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/AryanKoundal/StudyBuddy",
      },
    ],
  },


];

export default projects;
