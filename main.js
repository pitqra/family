var image = 
[
    "family_guy_mila_kunis_2x.jpg", "family_guy_alex_borstein_2x.jpg",
    "unnamed.jpg","girl.jpg"];
    var names = ["Family Book", "Maahi Purohit", "Hetal Purohit", "Jatin Purohit", "Aastha Purohit"];

    var i = 0;
    function update()

    {
        i++
        var numbers_of_family_member_in_array = 5
        if(i > numbers_of_family_member_in_array)
        {
            i = 0;
        }
        var updatedImage= image[i];
        var updatedName = names[i];
        document.getElementById("family_member_image").src = updatedImage;
        document.getElementById("family_member_name").innerHTML = updatedName;
    }
    