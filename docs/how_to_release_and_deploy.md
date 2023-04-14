# How to Release and Deploy

This document describes how to deploy a new version of the website.

## Prerequisites

* You have a working [development environment](how_to_setup.md).

## Steps

1. Make sure you have the latest version of the code:

    ```bash
    git pull
    ```

2. Release a new version of the code:

    ```bash
    # yarn release:{major,minor,patch} # where {} is the type of release

    # e.g.
    yarn release:patch
    ```

3. Push the new version to your repository:

    ```bash
    git push
    ```

4. Deploy the new version to the website:

    ```bash
    yarn firebase:deploy
    ```
