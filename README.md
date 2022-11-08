# Commands for setting everything up

```console
> conda create -n jupyterlab-ext --override-channels --strict-channel-priority -c conda-forge -c nodefaults jupyterlab=3 cookiecutter nodejs jupyter-packaging git
> conda activate ext
> cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts
```