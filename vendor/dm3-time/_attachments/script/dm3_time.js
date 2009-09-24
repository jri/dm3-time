function dm3_time() {

    // alert("Plugin dm3-time loaded!")

    this.name = "dm3-time"

    doctype_implementation("vendor/dm3-time/script/time_search_result.js")
    css_stylesheet("vendor/dm3-time/style/dm3-time.css")

    this.pre_create = function(doc) {
        // alert("dm3-time: pre_create triggered\ndoc=" + JSON.stringify(doc))
        var time = new Date()
        doc.time_created = time
        doc.time_modified = time
    }

    this.pre_update = function(doc) {
        // alert("dm3-time: pre_update triggered\ndoc=" + JSON.stringify(doc))
        var time = new Date()
        doc.time_modified = time
    }

    /* --- Search Modes --- */

    this.searchmode = function() {
        return "By time"
    }

    this.search_widget = function(searchmode) {
        // alert("search_widget triggered\nsearchmode=" + searchmode)
        if (searchmode == "By time") {
            var select = $("<select>").attr("id", "time_select")
            select.append($("<option>").text("Last week"))
            select.append($("<option>").text("Last month"))
            return select
        }
    }

    this.search = function(searchmode) {
        if (searchmode == "By time") {
            var time_mode = $("#time_select").val()
            var result = db.view("deepamehta3/by_time", {descending: true})
            // build result document
            var fields = [{id: "Title", content: '"' + time_mode + '"'}]
            var result_doc = create_topic_doc("Search Result", fields, "TimeSearchResult")
            result_doc.items = []
            for (var i = 0, row; row = result.rows[i]; i++) {
                result_doc.items.push({id: row.id, title: row.value, time_modified: row.key})
            }
            return result_doc
        }
    }
}
