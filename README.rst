RTL support for ExtJS 3.0
=========================

For testing the correct behavior, took some examples from ExtJS's
and adjusted widgets for RTL support.

To enable the support, put the files under `src` on your web server,
and add them to the `head` section, right after ExtJS section. for
example::

    <script type="text/javascript" src="some_path/extjs_rtl.js"></script>
    <link rel="stylesheet" type="text/css" href="some_path/resources/css/extjs_rtl.css"/>

Don't forget to apply RTL for your page, for example adding `dir="rtl"` to `body`.
See the `examples` folder for more info.

Meir Kriheli <meir@mksoft.co.il>