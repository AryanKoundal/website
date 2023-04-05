"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[477],{10:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"/2023/02/28/docusaurus-gh-action","metadata":{"permalink":"/blog/2023/02/28/docusaurus-gh-action","editUrl":"https://github.com/AryanKoundal/kaya-folio/tree/main/website/blog/2023-02-28-docusaurus-gh-action.md","source":"@site/blog/2023-02-28-docusaurus-gh-action.md","title":"Deployment blog","description":"I got tired of deploying my Docusaurus website to GitHub Pages manually, and decided to do something about it using GitHub Action.","date":"2023-02-28T00:00:00.000Z","formattedDate":"February 28, 2023","tags":[{"label":"tag1","permalink":"/blog/tags/tag-1"},{"label":"tag2","permalink":"/blog/tags/tag-2"},{"label":"tag3","permalink":"/blog/tags/tag-3"},{"label":"tag4","permalink":"/blog/tags/tag-4"}],"readingTime":1.53,"hasTruncateMarker":true,"authors":[{"name":"Aryan Koundal","title":"Pre-Final year Computer Science and Engg Student at NIT Hamirpur","url":"https://github.com/AryanKoundal","imageURL":"https://github.com/AryanKoundal.png"}],"frontMatter":{"title":"Deployment blog","author":"Aryan Koundal","author_url":"https://github.com/AryanKoundal","author_title":"Pre-Final year Computer Science and Engg Student at NIT Hamirpur","author_image_url":"https://github.com/AryanKoundal.png","tags":["tag1","tag2","tag3","tag4"]},"nextItem":{"title":"This is the title of the blog","permalink":"/blog/2023/02/23/sample-blog"}},"content":"I got tired of deploying my Docusaurus website to GitHub Pages manually, and decided to do something about it using GitHub Action.\\r\\n\\r\\nInitially, I was planning to follow the [official guide](https://v2.docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) on doing so. However, it was actually much more complicated than I liked. I did not really want to generate and store a SSH key on GitHub. Too much effort man.\\r\\n\\r\\nI decided it was better off for me to write my own script. Here it is:\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n## deploy-docusaurus.yml\\r\\n\\r\\n:::caution\\r\\n\\r\\nThe script below assumes that your Docusaurus website resides at `/website` of your repo. If that is not the case for you, you will need to:\\r\\n\\r\\n- Change `cd website` to `cd <docu_site_root>`, or delete the entire line if your Docusaurus website is at the root of your repo `/`\\r\\n- Change `build_dir`\'s value from `website/build` to `<docu_site_root>/build`, or `build` if your Docusaurus website is at the root of your repo `/`\\r\\n\\r\\n:::\\r\\n\\r\\n```yml\\r\\nname: deploy-docusaurus\\r\\n\\r\\non:\\r\\n  push:\\r\\n    branches: [main]\\r\\n  pull_request:\\r\\n    branches: [main]\\r\\n\\r\\n  # Allows you to run this workflow manually from the Actions tab\\r\\n  workflow_dispatch:\\r\\n\\r\\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\\r\\njobs:\\r\\n  publish:\\r\\n    runs-on: ubuntu-latest\\r\\n    steps:\\r\\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\\r\\n      - name: Check out repo\\r\\n        uses: actions/checkout@v2\\r\\n      # Node is required for npm\\r\\n      - name: Set up Node\\r\\n        uses: actions/setup-node@v2\\r\\n        with:\\r\\n          node-version: \\"12\\"\\r\\n      # Install and build Docusaurus website\\r\\n      - name: Build Docusaurus website\\r\\n        run: |\\r\\n          npm install \\r\\n          npm run build\\r\\n      - name: Deploy to GitHub Pages\\r\\n        if: success()\\r\\n        uses: crazy-max/ghaction-github-pages@v2\\r\\n        with:\\r\\n          target_branch: gh-pages\\r\\n          build_dir: website/build\\r\\n        env:\\r\\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\\r\\n```\\r\\n\\r\\n:::note\\r\\n\\r\\nGitHub will automatically add `GITHUB_TOKEN` to Secrets. You need not do so. See [this](https://docs.github.com/en/actions/reference/authentication-in-a-workflow) for more information.\\r\\n\\r\\n:::\\r\\n\\r\\nTo see this script in action, visit my [personal website repo](https://github.com/AryanKoundal/kaya-folio/actions)."},{"id":"/2023/02/23/sample-blog","metadata":{"permalink":"/blog/2023/02/23/sample-blog","editUrl":"https://github.com/AryanKoundal/kaya-folio/tree/main/website/blog/2023-02-23-sample-blog.md","source":"@site/blog/2023-02-23-sample-blog.md","title":"This is the title of the blog","description":"This is the summary","date":"2023-02-23T00:00:00.000Z","formattedDate":"February 23, 2023","tags":[{"label":"tag1","permalink":"/blog/tags/tag-1"},{"label":"tag2","permalink":"/blog/tags/tag-2"},{"label":"tag3","permalink":"/blog/tags/tag-3"},{"label":"tag4","permalink":"/blog/tags/tag-4"}],"readingTime":0.045,"hasTruncateMarker":true,"authors":[{"name":"Aryan Koundal","title":"Pre-Final year Computer Science and Engg Student at NIT Hamirpur","url":"https://github.com/AryanKoundal","imageURL":"https://github.com/AryanKoundal.png"}],"frontMatter":{"title":"This is the title of the blog","author":"Aryan Koundal","author_url":"https://github.com/AryanKoundal","author_title":"Pre-Final year Computer Science and Engg Student at NIT Hamirpur","author_image_url":"https://github.com/AryanKoundal.png","tags":["tag1","tag2","tag3","tag4"]},"prevItem":{"title":"Deployment blog","permalink":"/blog/2023/02/28/docusaurus-gh-action"}},"content":"This is the summary\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nThis is the content"}]}')}}]);