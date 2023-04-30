document.addEventListener("DOMContentLoaded", function(event) {

    var track = {
      entries: [
        {
          foodname: "pizza",
          calorie: 600
        }
      ],
      totalCal: 0,
  
      addFoodCal: function(ev) {

        ev.preventDefault();
  
        var calTrack = {
          foodname: document.getElementById("fname").value,
          calorie: parseInt(document.getElementById("calorie").value)
        };
  
        this.entries.push(calTrack);
        this.totalCalCa();
        document.forms[0].reset();
      },
  
      totalCalCa: function() {
        this.totalCal = 0;

        var tc = document.getElementById("tCalorie");

        for (var i = 0; i < this.entries.length; i++) {
          this.totalCal += this.entries[i].calorie;
          console.log("Index: " + i + ", Food name: " + track.entries[i].foodname + ", Calories: " + track.entries[i].calorie);
        }

        tc.value = this.totalCal;

        
      }
    };
  
    var submitBtn = document.querySelector("input[type='submit']");
    submitBtn.addEventListener("click", track.addFoodCal.bind(track));
  
  });
  