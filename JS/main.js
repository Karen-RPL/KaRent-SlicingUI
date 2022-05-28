$("button")
  .click(function () {
    var $this = $(this);
    $this.toggleClass("following");
    if ($this.is(".following")) {
      $this.addClass("wait");
    }
  })
  .on("mouseleave", function () {
    $(this).removeClass("wait");
  });

$("button")
  .click(function () {
    var $this = $(this);
    $this.toggleClass("payment-method");
    if ($this.is(".payment-method")) {
      $this.addClass("wait");
    }
  })
  .on("mouseleave", function () {
    $(this).removeClass("wait");
  });
