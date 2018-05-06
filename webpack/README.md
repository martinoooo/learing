### Global Assets
The coolest part of everything mentioned above, is that loading assets this way allows you to group modules and assets together in a more intuitive way. Instead of relying on a global /assets directory that contains everything, you can group assets with the code that uses them. For example, a structure like this can be very useful:

    - |- /assets
    + | – /components
    + |    |– /my-component
    + |    |    |– index.jsx
    + |    |    |– index.css
    + |    |    |– icon.svg
    + |    |    |– img.png

This setup makes your code a lot more portable as everything that is closely coupled now lives together. Let's say you want to use /my-component in another project, simply copy or move it into the /components directory over there. As long as you've installed any external dependencies and your configuration has the same loaders defined, you should be good to go.

However, let's say you're locked into your old ways or you have some assets that are shared between multiple components (views, templates, modules, etc.). It's still possible to store these assets in a base directory and even use aliasing to make them easier to import.
