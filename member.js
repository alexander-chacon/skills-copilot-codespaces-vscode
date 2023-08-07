function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;

    if (memberValue == "yes") {
        document.getElementById("memberSkills").style.display = "block";
        document.getElementById("memberSkills").required = true;
    } else {
        document.getElementById("memberSkills").style.display = "none";
        document.getElementById("memberSkills").required = false;
    }
}