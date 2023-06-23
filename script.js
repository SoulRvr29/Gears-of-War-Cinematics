var galleryNr = 6;
let darkMode = localStorage.getItem("darkMode");
console.log(darkMode);
$(document).ready(function () {
  $("#description_button").click(function () {
    $("#description" + galleryNr).slideToggle(500);
  });

  $(".go_up").click(function () {
    $("main").animate(
      {
        scrollTop: $("body").offset().top,
      },
      400
    );
  });

  $(".thumbial").hover(
    function () {
      $("img", this).css({ scale: "120%", filter: "brightness(130%)" });
      $("h2", this).css({ opacity: "100%", scale: "100%" });
      // $('h2',this).css({'opacity':'100%', 'font-size':'1.3rem'});
    },
    function () {
      $("img", this).css({ scale: "100%", filter: "brightness(100%)" });
      $("h2", this).css({ opacity: "0%", scale: "20%" });
      // $('h2',this).css({'opacity':'0%', 'font-size':'0.5rem'});
    }
  );

  // // var sidebarOnOff=true;
  // // $('#sidebar_title').click(function(){
  // // 	if(sidebarOnOff==true)
  // // 	{
  // // 		$('#sidebar').slideToggle(200);
  // // 		$('#site').css('grid-template-rows','50px 60px 1fr 25px 0px 30px');
  // // 		sidebarOnOff=false;
  // // 	}
  // // 	else
  // // 	{
  // // 		$('#sidebar').slideToggle(200);
  // // 		$('#site').css('grid-template-rows','50px 60px 1fr 25px 120px 30px');
  // // 		sidebarOnOff=true;
  // // 	}
  // });
});

var x = true;

function mode() {
  // if(x==true) document.getElementById("style_location").innerHTML = '<link rel="stylesheet" href="style2.css">';
  // else document.getElementById("style_location").innerHTML = '<link rel="stylesheet" href="style.css">';
  // x = !x;
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  console.log(darkMode);
}
const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
  console.log(darkMode);
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
  console.log(darkMode);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

function desc_button_show_hide() {
  if (galleryNr == 5 || galleryNr == 6) $("#description_button").show();
  else $("#description_button").hide();
}

/////////////////////////////// ON CLICK FUNCTIONS ////////////////////////////////////////

function cinematics(c) {
  $("#description" + galleryNr).slideUp(500);
  if (c == 1) {
    $("#content_video").html(
      '<iframe class="video" src="https://www.youtube.com/embed/-N_mh8hcccw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
    galleryNr = 1;
  }

  if (c == 2) {
    $("#content_video").html(
      '<iframe class="video" src="https://www.youtube.com/embed/ODvvOgEusVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
    galleryNr = 2;
  }

  if (c == 3) {
    $("#content_video").html(
      '<iframe class="video" src="https://www.youtube.com/embed/qXP67xUkba4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
    galleryNr = 3;
  }

  if (c == 4) {
    $("#content_video").html(
      '<iframe class="video" src="https://www.youtube.com/embed/-MOxCeqacf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
    galleryNr = 4;
  }

  if (c == 5) {
    $("#content_video").html(
      '<iframe class="video" src="https://www.youtube.com/embed/is4SBR4jnpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
    galleryNr = 5;
  }

  if (c == 6) {
    $("#content_video").html(
      '<iframe class="video" src="https://www.youtube.com/embed/ylp4L6g2MOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
    galleryNr = 6;
  }
  $("#content").animate({ scrollTop: 0 }, 500);
  desc_button_show_hide();
}

function p_levels(p) {
  if (p == 1) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/VxOM-6ywK9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }

  if (p == 2) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/mPMGTws8BAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }

  if (p == 3) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/nZGnDh1ZkZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br> <br> <iframe class="video" src="https://www.youtube.com/embed/xAJbXGmSC-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }

  if (p == 4) {
    document.getElementById("content_video").innerHTML =
      'Timgad barricade - gameplay <br><br><iframe class="video" src="https://www.youtube.com/embed/5-8CRGrtxNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }

  if (p == 5) {
    document.getElementById("content_video").innerHTML =
      'City of Destruction - new gameplay <br><br> <iframe class="video" src="https://www.youtube.com/embed/batZLfb0lys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br><br> Old gameplay <br> <br> <iframe class="video" src="https://www.youtube.com/embed/IpOACZxEFhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }
  $("#content").animate({ scrollTop: 0 }, 500);
  galleryNr = 0;
  desc_button_show_hide();
}

function t_levels(t) {
  if (t == 1) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/FnEuF23MFLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }

  if (t == 2) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/U-Mkg62Lj-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }

  if (t == 3) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/8UPSs7uoJ9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }
  $("#content").animate({ scrollTop: 0 }, 500);
  galleryNr = 0;
  desc_button_show_hide();
}

function trailer(tr) {
  if (tr == 1) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/PvT7Wuh9Iu0?list=PLJ3KNw-bnSVbvXDP97aMuGpwXIwq9hpgk" title="City of Destruction trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }

  if (tr == 2) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/eajJsERR4ZU?list=PLJ3KNw-bnSVbvXDP97aMuGpwXIwq9hpgk" title="Channel trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }
  $("#content").animate({ scrollTop: 0 }, 500);
  galleryNr = 0;
  desc_button_show_hide();
}

function gameplay(g) {
  if (g == 1) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/Ifr2ZGPKl48?list=PLJ3KNw-bnSVbvXDP97aMuGpwXIwq9hpgk" title="Gears of War 4 - versus gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }

  if (g == 2) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/X5KUmvWRukI?list=PLJ3KNw-bnSVbvXDP97aMuGpwXIwq9hpgk" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }

  if (g == 3) {
    document.getElementById("content_video").innerHTML =
      '<iframe class="video" src="https://www.youtube.com/embed/KjFUBM3RLsI?list=PLJ3KNw-bnSVbvXDP97aMuGpwXIwq9hpgk" title="Gears 5 -  Horde gameplay #2  PC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }
  $("#content").animate({ scrollTop: 0 }, 500);
  galleryNr = 0;
  desc_button_show_hide();
}
