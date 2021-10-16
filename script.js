let selectedFilter;

$(".apply-filter").click(function() {
    let filter = $(".selected-filter").val();

    if (filter.toLowerCase() === "Harlem".toLowerCase()) {
        $("img").css("filter", "contrast(115%) brightness(120%)");
    } else if (filter.toLowerCase() === "Bushwick".toLowerCase()) {
        $("img").css("filter", "contrast(50%) brightness(180%)");
    } else if (filter.toLowerCase() === "SOMA".toLowerCase()) {
        $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");
    } else if (filter.toLowerCase() === "Sunset".toLowerCase()) {
        $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
    } else if (filter.toLowerCase() === "after yourself".toLowerCase()) {
        $("img").css("filter", "contrast(75%) hue-rotate(-50deg) saturate(150%) ");
    }
});

$(".apply-change").click(function() {
    let size = $(".selected-size").val();
    $("img").css("width", size);
});

$(".change-img").click(function() {
    let link = $(".selected-img").val();
    $("img").attr("src", link);
});

$(".reset").click(function() {
    $("img").css("filter", "");
    $("img").css("width", "");
    $("img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg");
});