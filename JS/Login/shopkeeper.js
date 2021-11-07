//sign up
{
    let Register = function () {
      let shopKeeperSignUpForm = $("#shopkeeperSignup");
  
      shopKeeperSignUpForm.submit(function (e) {
        e.preventDefault(shopKeeperSignUpForm.serialize());
  
        $.ajax({
          type: "post",
          url: "http://localhost:3000/api/shops",
          data: shopKeeperSignUpForm.serialize(),
          success: function (data) {
            console.log(data);
          },
          error: function (error) {
            console.log(error.responseText);
          },
        });
      });
    };
    Register();
}

//sign in
{
    let Login = function () {
      let shopKeeperSignInForm = $("#shopkeeperSignin");
  
      shopKeeperSignInForm.submit(function (e) {
        e.preventDefault(shopKeeperSignInForm.serialize());
  
        $.ajax({
          type: "post",
          url: "http://localhost:3000/api/auth",
          data: shopKeeperSignInForm.serialize(),
          success: function (data) {
            console.log(data.data);
            localStorage.setItem("glocal-shop-auth-token", JSON.stringify(data));
            setTimeout(() => {
              localStorage.removeItem("glocal-shop-auth-token");
            }, 1800000);
          },
          error: function (error) {
            console.log(error.responseText);
          },
        });
      });
    };
    Login();
}
