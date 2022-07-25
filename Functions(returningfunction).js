
      function test2() {
        let b = Math.random();
        if (b > 0.4) {
          return function () {
            document.write("Hey you win the Price of $100");
          };
        } else {
          return function () {
            document.write("ohhh You lost this time :(");
          };
        }
      }

      test2();
