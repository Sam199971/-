

    var changeindex = 0;

    $(document).ready(function () {
        $("#about").click(function () {
            $(".main").fadeOut(1000);
            setTimeout(function () { $(".main").fadeIn("slow"); }, 999);
        });
    });

    if (changeindex == 0) {
        $(document).ready(function () {
            $("#search").click(function () {
                $(".main").fadeOut(1000);
                setTimeout(function () { $(".main").fadeIn("slow"); }, 1000);
            });
        });
        changeindex--;
    }

    function changeToAbout() {
        setTimeout(function () { document.getElementById("first").innerHTML = "關於汪柏"; }, 1000);
        document.getElementById("first").href = "#floor1";
        setTimeout(function () { document.getElementById("second").innerHTML = "教學概況"; }, 1000);
        document.getElementById("second").href = "#floor2";
        setTimeout(function () { document.getElementById("third").innerHTML = "聯絡"; }, 1000);
        document.getElementById("third").href = "#floor6";
        setTimeout(function () { document.getElementById("mainimg").src = "./w3.jpg"; }, 1000);
    }
    function changeToSearch() {
        setTimeout(function () { document.getElementById("first").innerHTML = "論文著作"; }, 1000);
        document.getElementById("first").href = "#floor3";
        setTimeout(function () { document.getElementById("second").innerHTML = "研習活動"; }, 1000);
        document.getElementById("second").href = "#floor4";
        setTimeout(function () { document.getElementById("third").innerHTML = "指導學生"; }, 1000);
        document.getElementById("third").href = "#floor5";
        setTimeout(function () { document.getElementById("mainimg").src = "./wall-1.png"; }, 1000);
    }

    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
        var papertwo = document.getElementById("papertwo");
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
            papertwo.style.display = "inline";
        } else {
            papertwo.style.display = "none";
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
