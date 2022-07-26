

      const cat = {
        name: "Mew",
        Weight: "3kg",
        Color: "White",
        Sumup() {
         return document.write(
            this.name + "<br>" + this.Weight + "<br>" + this.Color
          );
        },
      };

      cat.Sumup();
