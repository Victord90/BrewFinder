$(document).ready(function (){


let queryURL = "https://content.guardianapis.com/search?q=breweries&api-key=633aec89-5021-4996-9f22-c733936a76d9&show-fields=thumbnail,headline,shortUrl"



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

         for( let i = 0; i < response.response.results.length; i++) {

            let pic = response.response.results[i].fields.thumbnail;
            let headline = response.response.results[i].fields.headline;
            let url = response.response.results[i].webUrl;
            
            
            let carouselItem = $("<div class='carousel-item'>");
            if (i === 0) carouselItem.addClass("active");
            let image = $("<img class='d-block w-100'>");
            image.attr("src", pic);
            image.attr("alt", "artical image");
            let caption = $("<div class='carousel-caption d-none d-md-block'>");
            let h2 = $("<h2 class='headline'>").text(headline);
            caption.append(h2);
            carouselItem.append(image);
            carouselItem.append(caption);

            let preButton = $("<a class='carousel-control-prev' href='#beer-slides' role='button' data-slide='prev'>")
            let span = $("<span class='carousel-control-prev-icon' aria-hidden='true'>");
            let span2 = $("<span class='sr-only'>");
            preButton.append(span);
            preButton.append(span2);

            let nxtButton = $("<a class='carousel-control-next' href='#beer-slides' role='button' data-slide='next'>")
            let nxtSpan = $("<span class='carousel-control-next-icon' aria-hidden='true'>");
            nxtButton.append(nxtSpan);
            nxtButton.append(span2);

            carouselItem.append(preButton);
            carouselItem.append(nxtButton);

            $(".carousel-inner").append(carouselItem);
         
            // $(".carousel-inner").append(carouselItem);

            caption.on("click", function(){
 
             window.open(url, "_blank")
                
            })

          
             
            
        
            }

        
      
        

    })





})