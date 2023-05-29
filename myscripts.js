rs(document).ready(function() {

    rs('#list').click(function(event){event.preventDefault();rs('#products .item').addClass('list-group-item');});

    rs('#grid').click(function(event){event.preventDefault();rs('#products .item').removeClass('list-group-item');rs('#products .item').addClass('grid-group-item');});

});
