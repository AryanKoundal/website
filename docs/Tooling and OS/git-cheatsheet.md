---
title: Git Cheatsheet
---
Published on March 23, 2023

Git is a version control system that allows developers to keep track of changes made to their codebase over time. With Git, developers can collaborate on projects, manage code changes, and track progress. This cheatsheet provides a quick reference guide to some of the most commonly used Git commands.

## Basic Commands

    git init: Initializes a new Git repository in the current directory.

    git clone <url>: Clones a remote repository to your local machine.

    git add <file>: Adds changes made to a specific file to the staging area.

    git add .: Adds all changes made to the current directory and its subdirectories to the staging area.

    git commit -m "message": Commits the changes in the staging area with a brief message describing the changes.
    
    git status: Shows the current state of the repository, including any changes that have been made but not yet committed.
    
    git log: Displays the commit history for the current branch.

## Branching Commands

    git branch: Lists all branches in the current repository.
    git branch <branch-name>: Creates a new branch with the specified name.
    git checkout <branch-name>: Switches to the specified branch.
    git merge <branch-name>: Merges the specified branch into the current branch.

## Remote Commands

    git remote add <name> <url>: Adds a new remote repository with the specified name and URL.
    git remote -v: Lists all remote repositories and their URLs.
    git push <remote> <branch>: Pushes changes in the specified branch to the specified remote repository.
    git pull <remote> <branch>: Pulls changes from the specified remote repository into the current branch.

## Miscellaneous Commands

    git diff: Shows the difference between the current state of the repository and the most recent commit.
    git reset <file>: Unstages changes made to the specified file.
    git reset --hard: Resets the current branch to the most recent commit and discards any changes that have not been committed.

## Conclusion

This cheatsheet provides a quick reference guide to some of the most commonly used Git commands. However, it is important to note that Git is a powerful and complex tool with many features and capabilities beyond what is covered in this cheatsheet. With practice and experience, developers can become proficient in using Git to manage their codebase and collaborate effectively with others.
