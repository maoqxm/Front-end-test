function getElementsByClassName(element, names){
    var children = element.getElementsByTagName('*');
    var elements = [];
    var child, attr_class_name, flag;
    names = names.split(' ');
    for (var i = 0; child = children[i]; i++) {
        attr_class_name = ' ' + child.className + ' ';
        flag = true;
        for (var j = 0, name; name = names[j]; j++) {
            if (attr_class_name.indexOf(' ' + name + ' ') == -1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            elements.push(child);
        }
    }
    return elements;
}
