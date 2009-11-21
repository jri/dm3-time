function dm3_time() {

    doctype_implementation("vendor/dm3-time/script/time_search_result.js")
    css_stylesheet("vendor/dm3-time/style/dm3-time.css")

    this.init = function() {
        $("#searchmode_select").append($("<option>").text("By time"))
    }

    this.search_widget = function(searchmode) {
        if (searchmode == "By time") {
            return ui.menu("time_select", undefined, [
                {label: "Last week"},
                {label: "Last month"}
            ])
        }
    }

    this.search = function(searchmode) {
        if (searchmode == "By time") {
            var time_mode = ui.menu_val("time_select").label
            var result = db.view("deepamehta3/by_time", {descending: true})
            // build result document
            var fields = [{id: "Title", content: '"' + time_mode + '"'}]
            var view = {icon_src: "images/bucket.png"}
            var result_doc = create_raw_topic("Search Result", fields, view, "TimeSearchResult")
            result_doc.items = []
            for (var i = 0, row; row = result.rows[i]; i++) {
                result_doc.items.push({id: row.id, title: row.value, time_modified: row.key})
            }
            return result_doc
        }
    }

    //

    this.pre_create = function(doc) {
        var time = new Date()
        doc.time_created = time
        doc.time_modified = time
    }

    this.pre_update = function(doc) {
        var time = new Date()
        doc.time_modified = time
    }
}
