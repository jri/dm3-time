function(doc) {
    emit(doc.time_modified || null, doc.fields[0].content)
}
