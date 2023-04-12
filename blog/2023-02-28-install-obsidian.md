---
title: How to Install Obsidian On Linux | Set it's $PATH variable
author: Aryan Koundal
author_url: https://github.com/AryanKoundal
author_title: Computer Science and Engg Student at NIT Hamirpur
author_image_url: https://github.com/AryanKoundal.png
tags: [ubuntu, obsidian, linux]
---

In this blog we will learn about

1. How to download Obsidian App Image.
1. How to install and set up the $PATH for obsidian.

Let's get started.

## Downloading

- First of all, install the AppImage from the [link](https://obsidian.md/download). This file will probably be downloaded in your `Home/Downloads` folder.

## Installing

- Now open a terminal in your `Home/Downloads` folder.
- You have to make this AppImage an executable file by using

```
sudo chmod +x Obsidian-1.1.9.AppImage
```

- After that you have to rename the _Obsidian-1.1.9.AppImage_ to _obsidian_ using

```
mv Obsidian-1.1.9.AppImage obsidian
```

- Then you'll have to create a new folder for obsidian at `usr/bin` and then copy the _obsidian_ file to that folder.

```
sudo mkdir /usr/bin/obsidian
sudo cp obsidian /usr/bin/obsidian/obsidian
```

- Now to add the PATH. You have to set the variable name in  ~/.profile. This can be done by using

```
gedit ~/.profile (any text precessor)
export PATH=$PATH:/usr/bin/obsidian
```

in the terminal to open the file. Then adding line `export PATH=$PATH:/usr/bin/obsidian` at the end of your ~/.profile file.

- Save and then close the file. You also have to restart the device to use these changes.
- Now you can run obsidian from Application Launcher by Alt + F2 then typing obsidian. And from terminal by `Ctrl + Alt + T` then typing obsidian.
