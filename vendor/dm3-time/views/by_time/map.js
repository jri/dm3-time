function(doc) {
    if (doc.type == "Topic" && doc.topic_type != "Search Result") {
        emit(doc.time_modified || null, doc.fields[0].content)
    }
}
