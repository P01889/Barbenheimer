const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration : 1000,
};
ScrollReveal().reveal("section_subheader",{
    ...scrollRevealOption,
    delay: 500,});
ScrollReveal().reveal(".center-section",{
    ...scrollRevealOption,
    delay:800,
});
ScrollReveal().reveal(".section img",{
    ...scrollRevealOption,
    origin: "left",
    
});
