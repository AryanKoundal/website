const math = require("remark-math");
const katex = require("rehype-katex");

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-koundal-5b217b202/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/AryanKoundal",
  },
  email: {
    label: "Email",
    href: "mailto:aryankoundal474@gmail.com",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
  resume: {
    label: "Resume",
    href: "",
  },
};

module.exports = {
  title: "Aryan Koundal",
  tagline:
    "I am a Full Stack Web Developer.",
  url: "https://AryanKoundal.github.io",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  favicon: "img/logo.png",
  organizationName: "AryanKoundal",
  projectName: "website",
  trailingSlash: false,
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Aryan Koundal",
      logo: {
        alt: "Aryan Koundal",
        src: "img/logo.png",
        target: "_self",
      },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Tutorials",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "right" },
        // {
        //   href: "https://drive.google.com/drive/folders/1VQLWubjgx4TpCxw401KPAOwLsNZ5D8JL",
        //   label: "Resume",
        //   position: "right",
        // },
      ],
    },
    footer: {
      // links: [
      //   {
      //     title: "Connect",
      //     items: [
      //       internetProfiles.linkedin,
      //       internetProfiles.github,
      //       internetProfiles.padlet,
      //       internetProfiles.email,
      //     ],
      //   },
      //   {
      //     title: "Discover",
      //     items: [
      //       internetProfiles.blog,
      //       internetProfiles.docs,
      //       internetProfiles.projects,
      //       internetProfiles.resume,
      //     ],
      //   },
      // ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to website :)
      copyright: `<a href="https://github.com/AryanKoundal">Design by Aryan Koundal</a> `,
      // • <a href="https://github.com/AryanKoundal/kaya-folio/commits/main">Updated ${new Date().toLocaleDateString()}</a>
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/AryanKoundal/kaya-folio/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};
