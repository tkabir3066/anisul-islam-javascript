
//.Document Object Model - document object can access and manipulate HTML


     // Find/get
     //change
     //add, or
    // delete HTML elements



  // DOM Methods - getElementById()
  // DOM Properties = innerHTML,





  //.Find/ get                   Methods
                              //-----------
                            //   Document.getElementById(id)- Find element by Id
                            //   Document.getElementsByTagName(name) - Find elements by tag name
                            //   Document.getElementsByClassName(name) - Find elements by className
                            //or find by query selector



                            // Property
                        // --------------
                        // Element.innerHTML = new HTML content
                        // Element.attribute = new value
                        // Element.style.property = new style

                          // Method
                         //---------
                        //   Element.setAttribute(attribute, value) - change the attribute value of an html element

            
        // var link= document.getElementsByTagName("a")[0];   
        // link.innerHTML = "Hey tutul";  
        // link.style.textDecoration = "none";
        // link.style.color = "red";
        // link.style.fontSize = "1.5rem";
        // link.href = "https://studywithanis";





        //creating html element

        var heading3 = document.createElement("h1");
        var text = document.createTextNode("Programming Hero");

        heading3.appendChild(text);
        var myDiv = document.getElementById("my-div");
       myDiv.appendChild(heading3);

