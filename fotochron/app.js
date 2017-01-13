var client_id = "UTZhSnNFdGpxSEFFREUwb01GYzlXZzpkNTRmOTk5NzQ2N2E3ZDAy";

function loadImage(image) {
  $(".img").click(function() {
     currentImage = 0;
     currentImage = images[image];
     var url = "https://a.mapillary.com/v3/images/" + images[image] + "?client_id=" + client_id;
     $.ajax({
       dataType: "json",
       url: url,
       success: function (data) {
         console.log(data.geometry.coordinates);
         lng = data.geometry.coordinates[0];
         lat = data.geometry.coordinates[1];
         map.flyTo({
             center: [lng, lat],
             zoom: 12
         });
       }
     });

     $("#mly").empty().append("<script>var mly = new Mapillary.Viewer('mly','UTZhSnNFdGpxSEFFREUwb01GYzlXZzpkNTRmOTk5NzQ2N2E3ZDAy',currentImage,{component: {attribution: false,cover: false,direction: {distinguishSequence: true,maxWidth: 460,minWidth: 180},imagePlane: {imageTiling: true},stats: true},renderMode: Mapillary.RenderMode.Fill});</script>");
     $("#content").empty().append("<h3 class='slideTitle'>" + titles[image] + "</h3>")
     $("#content").append("<p class='slideContent'>" + content[image] + "</p>")
     image = 77777777777777;
  });
};

$(document).ready(
  function() {

    $("#title").empty().append("<h1 style='padding: 10;'>" + project_title + "</h1>")
    $("#subtitle").empty().append("<h4 style='padding: 10;'>" + project_subtitle + "</h4>")
    $("#content").empty().append("<h3 class='slideTitle'>" + titles[0] + "</h3>")
    $("#content").append("<p class='slideContent'>" + content[0] + "</p>")
    for (i = 0; i < images.length; i++) {
      $("#gallery").append(
        "<div class='img'><img src='https://d1cuyjsrcm0gby.cloudfront.net/"+images[i]+"/thumb-320.jpg' href='#' onclick='loadImage(" + i + ")'/></div>"
      );
    }
    var url = "https://a.mapillary.com/v3/images/" + images[i] + "?client_id=" + client_id;
    $.ajax({
      dataType: "json",
      url: url,
      success: function (data) {
//        coords.push(data.geometry.coordinates);
        console.log(data.geometry.coordinates);
        lng = data.geometry.coordinates[0];
        lat = data.geometry.coordinates[1];
        map.flyTo({
            center: [lng, lat],
            zoom: 12
        });
      }
    });

  }
);
