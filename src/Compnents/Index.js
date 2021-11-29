import ScrollOut from "scroll-out";

ScrollOut({
  /* options */
});
ScrollOut({
    onShown: function(el) {
      // use the web animation API
      el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    },
    onHidden: function(el) {
      // hide the element initially
      el.style.opacity = 0;
    }
  });
  ScrollOut({
    onShown(el) {
      el.classList.add("animated");
    }
  });
  ScrollOut({
    onShown: function(el) {
      // remove the class
      el.classList.remove("animated");
  
      // force reflow
      void el.offsetWidth;
  
      // re-add the animated cl
      el.classList.add("animated");
    }
  });
  ScrollOut({
    scrollingElement: ".scrollable-pane"
  });  