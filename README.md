
DeepaMehta 3 Time Plugin
========================

Adds timestamps to topics and provides a *By Time* search mode.


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

4.  Copy additional stuff:
        cp -r vendor/dm3-time/views/dm3-time views

5.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db

6.  Check if installation was successful: visit DeepaMehta 3 in your webbrowser (resp. press reload):  
    <http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html>  
    If you see the *By Time* entry in the search mode menu (center of upper toolbar) everything is OK.


Usage
-----

*   Select the *By Time* search mode and press the *Search* button.  
    The resulting topics will appear at the right side, ordered by timestamp.

    Note: timestamps are set for topics you create/edit from now on.


Updating
--------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3

2.  Update DeepaMehta 3 Time Plugin:
        couchapp vendor update dm3-time

3.  Copy additional stuff:
        cp -r vendor/dm3-time/views/dm3-time views

4.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db


Version History
---------------

**v0.3** -- Mar 6, 2010

* Compatible with DeepaMehta 3 v0.3

**v0.2** -- Dec 1, 2009

* Basic functionality
* Requires DeepaMehta 3 v0.2


------------
Jörg Richter  
Mar 6, 2009
