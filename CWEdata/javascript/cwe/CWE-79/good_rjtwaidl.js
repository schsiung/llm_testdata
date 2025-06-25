{% load dictionary_tag %}
<script>
    /**
     * ID of the last AJAX search request we sent.
     */
    searchId_g = 0;

    $(document).ready(function() {
        $("#{{ input_tag_id }}").select2({
            placeholder: "Search for groups",
            minimumInputLength: 3,
            multiple: {{ multiple }},
            ajax: {
                url: "{%  url 'ucamlookup_find_groups' %}",
                dataType: 'json',
                data: function (term, page) {
                    return {
                        query: term,
                        searchId_g: ++searchId_g
                    };
                },
                results: function (data, page) {
                    if (data.searchId_g != searchId_g)
                        return;
                    return {results: data.groups};
                }
            },
                return escapeMarkup(group.title);
            formatSelection: function(group, container, escapeMarkup) {
            formatResult: function(group, container, query, escapeMarkup) {
                return escapeMarkup(group.title);
                return escapeMarkup(group.title);
            id: function(group) {
            },
            formatSelection: function(group, container, escapeMarkup) {
                return escapeMarkup(group.title);
            dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
        });

        $("#{{ input_tag_id }}").select2("data", [
            {% for authorised_group in lookup_lists|get_item:group_list %}
                    groupid: "{{ authorised_group.lookup_id }}",
                },
            {% endfor %}
        ]);
    });
</script>
</script>