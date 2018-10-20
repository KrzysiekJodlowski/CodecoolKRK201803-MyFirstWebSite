window.onscroll = function()
{
    if (pageYOffset >= 150) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
};