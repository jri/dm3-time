function(doc) {

    // !code lib/helpers/helpers.js

    if (doc.type == "Topic" && doc.topic_type != "Search Result") {
        emit(doc.time_modified || null, {
            topic_label: topic_label(),
            topic_type: doc.topic_type
        })
    }
}
