function catFact(){
    window.location.reload();}
    var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch("https://catfact.ninja/fact", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            var factsAboutCats = JSON.parse(result);
            console.log(factsAboutCats);
            var display =
              "Fact: " +
              factsAboutCats.fact +
              "<br>" +
              "Length: " +
              factsAboutCats.lenght
            document.getElementById("display").innerHTML = display;
          })

          .catch((error) => console.log("error", error));