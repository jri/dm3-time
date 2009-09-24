function(doc) {
    if (doc.type == "Topic") {
        emit(doc.time_modified || null, doc.fields[0].content)
    }
}
