---
title: Managing Multiple GitHub Accounts
description: Managing Multiple GitHub Accounts with SSH- A Step-by-Step Guide
slug: managing-multiple-github-accounts
authors: [animesh]
tags: [github, ssh, multiple accounts]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

Working with multiple GitHub accounts, such as one for work and another for personal projects, can sometimes be tricky. If you've ever tried to clone a repository and accidentally used the wrong account, you know how frustrating it can be. Fortunately, SSH configuration makes managing multiple GitHub accounts seamless.

In this guide, we’ll walk you through setting up and using SSH keys to manage multiple GitHub accounts effectively. By the end, you'll be able to clone, push, and pull from repositories using the correct account without hassle.

<!-- truncate -->

## 1. Generate Separate SSH Keys for Each Account

Each GitHub account should have its own SSH key. Follow these steps to generate the keys:

- **Primary GitHub account (e.g., for work):**

  ```bash
  ssh-keygen -t rsa -b 4096 -C "your_official_email@example.com" -f ~/.ssh/github-primary
  ```

- **Secondary GitHub account (e.g., personal):**

  ```bash
  ssh-keygen -t rsa -b 4096 -C "your_personal_email@example.com" -f ~/.ssh/github-personal
  ```

This creates two key pairs:
- `~/.ssh/github-primary` and `~/.ssh/github-primary.pub`
- `~/.ssh/github-personal` and `~/.ssh/github-personal.pub`

---

## 2. Add SSH Keys to the SSH Agent

To ensure the keys are readily available for use, add them to the SSH agent:

```bash
ssh-add ~/.ssh/github-primary
ssh-add ~/.ssh/github-personal
```

---

## 3. Configure the SSH Config File

The SSH configuration file (`~/.ssh/config`) allows you to map specific SSH keys to different GitHub accounts. Open or create the file:

```bash
nano ~/.ssh/config
```

Add the following entries:

```plaintext
# Primary GitHub Account (Work)
Host github-primary
  HostName github.com
  User git
  IdentityFile ~/.ssh/github-primary

# Secondary GitHub Account (Personal)
Host github-secondary
  HostName github.com
  User git
  IdentityFile ~/.ssh/github-personal
```

Save the file and exit. These aliases (`github-primary` and `github-secondary`) will let you specify which SSH key to use when interacting with GitHub.

---

## 4. Add Public Keys to GitHub Accounts

Each SSH key has a corresponding public key (`.pub` file). Add these to your respective GitHub accounts:

- Copy the public key for your primary account:

  ```bash
  cat ~/.ssh/github-primary.pub
  ```

- Copy the public key for your secondary account:

  ```bash
  cat ~/.ssh/github-personal.pub
  ```

Log in to GitHub and navigate to **Settings > SSH and GPG keys > New SSH Key**. Paste the public key and give it a recognizable title.

---

## 5. Clone Repositories Using Specific Accounts

When cloning repositories, use the host alias specified in the SSH config file:

- **For your primary account:**

  ```bash
  git clone git@github-primary:organization/repository.git
  ```

- **For your secondary account:**

  ```bash
  git clone git@github-secondary:username/repository.git
  ```

By specifying `github-primary` or `github-secondary`, Git automatically uses the correct SSH key.

---

## 6. Update Remote URLs for Existing Repositories

If you've already cloned a repository but want to switch to a specific account, update the remote URL:

1. Navigate to the repository:

   ```bash
   cd repository-name
   ```

2. Update the remote URL:

   ```bash
   git remote set-url origin git@github-primary:organization/repository.git
   ```

3. Verify the remote URL:

   ```bash
   git remote -v
   ```

---

## 7. Test Your Setup

To confirm everything is configured correctly, test the SSH connection for each account:

- **Primary account:**

  ```bash
  ssh -T git@github-primary
  ```

- **Secondary account:**

  ```bash
  ssh -T git@github-secondary
  ```

If the setup is correct, you’ll see a message like:

```plaintext
Hi <username>! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## Conclusion

Managing multiple GitHub accounts doesn't have to be complicated. By configuring SSH keys and using a well-structured `~/.ssh/config` file, you can easily switch between accounts and ensure you're always using the right credentials for the task at hand.

Have questions or run into issues? Let us know in the comments below, and we’ll be happy to help!
