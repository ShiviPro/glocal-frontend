{
  let sendShopKeeperDetails = function () {
    let shopKeeperSignUpForms = $("#shopkeeperSignup");

    shopKeeperSignUpForms.submit(function (e) {
      e.preventDefault(shopKeeperSignUpForms.serialize());

      $.ajax({
        type: "post",
        url: "http://localhost:3000/api/shops",
        data: shopKeeperSignUpForms.serialize(),
        success: function (data) {
          localStorage.setItem("shopKeeper", JSON.stringify(data));

          setTimeout(() => {
            localStorage.removeItem("shopKeeper");
          }, 1800000);
        },
        error: function (error) {
          console.log(error.responseText);
        },
      });
    });
  };
  sendShopKeeperDetails();
}
