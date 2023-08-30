function follow(id){
    var parentElement = id.parentElement;
    var grandParentElement = parentElement.parentElement;
    
    // Remove the child element
    parentElement.parentNode.removeChild(parentElement);
    
    // Log IDs
    console.log("Grandparent ID:", grandParentElement.id);
    console.log("Parent ID:", parentElement.id);

    //Append in follow
    if(grandParentElement== document.getElementById("unfriend-container")){
        var follow =document.getElementById("friend-container");
        follow.appendChild(parentElement);
        id.innerHTML="unfollowed";
        id.style.backgroundColor= "red";
    }else if(grandParentElement== document.getElementById("friend-container")){
        var follow =document.getElementById("unfriend-container");
        follow.appendChild(parentElement);
        id.innerHTML="follow";
        id.style.backgroundColor= "blue";
    }  
}
