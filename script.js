function sendJSON(){ 
               
               
            // Creating a XHR object 
            let xhr = new XMLHttpRequest(); 
            let url = "https://christmasapp9190.herokuapp.com/contestant/getContestants"; 
        
            // open a connection 
            xhr.open("GET", url, true); 
  
            // Set the request header i.e. which type of content you are sending 
            xhr.setRequestHeader("Content-Type", "application/json"); 
			xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
			xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
            // Create a state change callback 
            xhr.onreadystatechange = function () { 
                if (xhr.readyState === 4 && xhr.status === 200) { 
  
                    // Print received data from server 
                    result.innerHTML = this.responseText; 
  
                } 
            }; 
  
            // Converting JSON data to string 
            //var data = JSON.stringify({ "description": description.value, "color": color.value, "size":size.value, "price":price.value }); 
  
            // Sending data with the request 
            console.log(xhr.send()); 
        } 