function evdragstart(ev) {
    ev.dataTransfer.setData("text",ev.target.id);	 
}
function evdragover (ev) {
    ev.preventDefault();
}
function evdrop(ev,el) {
    ev.stopPropagation();
    ev.preventDefault();
    data=ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
