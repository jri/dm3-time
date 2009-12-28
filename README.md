
DeepaMehta 3 Time Plugin
========================

Adds timestamps to documents and provides a "By Time" search mode.


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

3.  Activate the plugin by adding one line to DeepaMehta's `_attachments/javascript/plugins.js`:
        add_plugin("vendor/dm3-time/script/dm3_time.js")

4.  Add additional stuff by copying a directory:
        cp -r vendor/dm3-time/views/dm3-time views

5.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db


Usage
-----

1.  Visit DeepaMehta 3 in your webbrowser (resp. press reload):
        http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html

2.  You'll find an additional search mode "By Time" in the upper left corner.  
    Note: document timestamps are set for documents you create/edit from now on.


Version History
---------------

`v0.2` -- Dec  1, 2009 -- Basic functionality. Requires DeepaMehta 3 v0.2


------------
Jörg Richter  
Dec 28, 2009
