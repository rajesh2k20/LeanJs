
var shop ={

     Name: "Prem Kiryana Store",
     Owner: "Santosh and Prem Kumar Gupta",
     Rating: " 5 star Shop in locality",
     Address:{
          LankMark: "Sun Shine Public School",
          Location: "Tikri Boader",
          State: "Delhi",
          Pin_code: 110041,
          Country: "India",

     },

     categories: ["Grouseries", "Ready Mate Items"],
     About: function(){
       console.log("Hello Welcome to My Shop , I am Prem your Shopkeeper");
     },

};
console.log(shop);
//get
console.log(shop.Address);
// .................................................................................................................................
                 // Update

shop.Name="Rajesh";
console.log(shop);

      //  Set the New Key In the object

shop.variety=["1","2",3];
console.log(shop);


 //   for in loop

 for( let key in shop){

   console.log(shop[key]);
 }
