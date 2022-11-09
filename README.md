# Commands for setting everything up

```console
> conda create -n jupyterlab-ext --override-channels --strict-channel-priority -c conda-forge -c nodefaults jupyterlab=3 cookiecutter nodejs jupyter-packaging git
> conda activate ext
> cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts
> cd [folder created by cookiecutter]
> python3 -m pip install -ve .
> jupyter labextension develop --overwrite .
> jupyter labextension develop --overwrite .
```

Now we update the ``src/index.ts`` files, and then:

```console
> jlpm add @jupyterlab/apputils
> jlpm add @jupyterlab/application
> jlpm run build
```

Add the new imports. Then:

```console
> jlpm add @lumino/widgets
```