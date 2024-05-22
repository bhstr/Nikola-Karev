document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.struka-list li');

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const currentlyExpanded = document.querySelector('.expandable-content.expanded');
            const expandableContent = item.querySelector('.expandable-content');

            if (currentlyExpanded && currentlyExpanded !== expandableContent) {
                currentlyExpanded.classList.remove('expanded');
            }

            expandableContent.classList.toggle('expanded');
        });
    });
});
