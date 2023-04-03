module.exports = {
  docs: [
    {
      type: "doc",
      id: "contents",
    },
    {
      type: "doc",
      id: "reading-list",
    },
    // {
    //   type: "category",
    //   label: "Article Summaries",
    //   items: [" "],
    // },
    {
      type: "category",
      label: "API Documentation",
      items: [
        "using-googlemaps-api",
      ],
    },
    {
      type: "category",
      label: "Book Summaries",
      items: [
        "ikigai",
      ],
    },
    {
      type: "category",
      label: "Cloud and Networking",
      items: [ "network-model"],
    },
    {
      type: "category",
      label: "Programming",
      items: [
        "c-cheatsheet",
        "js-cheatsheet",
      ],
    },
    {
      type: "category",
      label: "Tooling and OS",
      items: [
        {
          Git: ["git-cheatsheet", "git-ignore-file"],
        },
        "os-ubuntu-cheatsheet",
      ],
    },
    {
      type: "category",
      label: "Web Development",
      items: [
        {
          MongoDB: ["mongodb-setup", "mongodb-cheatsheet"],
          NodeJS: ["nodejs-auto-reload", "nodejs-set-npm-run-shell"],
          Django: ["django-setup"],
        },
      ],
    },
  ],
  // apidocs : [
  //   {
  //     type: "category",
  //     label: "Web Development",
  //     items: [
  //       {
  //         MongoDB: ["mongodb-setup", "mongodb-cheatsheet"],
  //         NodeJS: ["nodejs-auto-reload", "nodejs-set-npm-run-shell"],
  //         Django: ["django-setup"],
  //       },
  //     ],
  //   },
  // ],
};
