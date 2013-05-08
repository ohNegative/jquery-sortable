$ddr=jQuery.noConflict();
$ddr(document).ready(sortableList);

function sortableList(){
	dragDrop();
        indexList();
        removeItem();
}
	
function dragDrop () {
        $ddr( "#sortable > ul" ).sortable();
        $ddr( "#sortable > ul" ).disableSelection();
}

function indexList () {
    $ddr("#sortable > ul").sortable('toArray');
}

function getValue () {    
    var textBox = $ddr('#my-text').val();
    return textBox;
}

function getSize() {
    return $ddr ('.demo ul > li').size() + 1;
}

function doStuff()
{
   var value=getValue()
   var newID = "set_" + getSize()
   var li = '<li id="'+ newID + '">' + value + '<a href="#" class="delete">remove</a></li>'
   $ddr(li).appendTo('.demo ul');
}

function removeItem (){
    $ddr('.delete').live('click', function() {
        $ddr(this).parent('li').remove();
    });
}









