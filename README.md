
DeepaMehta 3 Time Plugin
========================


Requirements
------------

* A DeepaMehta 3 installation  
  <http://github.com/jri/deepamehta3>


Installation
------------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3
2.  Download DeepaMehta 3 Time Plugin:
        couchapp vendor install git://github.com/jri/dm3-time.git
3.  Add plugin to DeepaMehta 3 by inserting a line to `_attachments/javascript/plugins.js`
        add_plugin("vendor/dm3-time/script/dm3_time.js")
4.  Add additional stuff by copying a directory:
        cp -r vendor/dm3-time/views/by_time views
5.  Upload changes to CouchDB:
        couchapp push --atomic http://localhost:5984/deepamehta3-db


Usage
-----

1.  Visit DeepaMehta 3 in your webbrowser (resp. press reload):
        http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html
2.  You'll find an additional search mode "By time" in the upper left corner.  
    Note: document timestamps are set for documents you create/edit from now on.


------------
Jörg Richter  
20.9.2009
