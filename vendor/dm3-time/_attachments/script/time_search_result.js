function TimeSearchResult() {
}

TimeSearchResult.prototype = {

    __proto__: SearchResult.prototype,

    // override method
    render_result_item: function(item) {
        // call super
        var result_item = SearchResult.prototype.render_result_item(item)
        // append our own
        var time_div = $("<div>").addClass("result-item-time").append(this.format_time(item.time_modified))
        return result_item.append(time_div)
    },

    format_time: function(rfc3339_timestamp) {
        if (rfc3339_timestamp) {
            var date = rfc3339_timestamp.substr(0, 10).replace(/-/g, "/")
            var time = rfc3339_timestamp.substr(11, 5)
            return date + "&nbsp;&nbsp;&nbsp;" + time
        } else {
            return "?"
        }
    }
}
