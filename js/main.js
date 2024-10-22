(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);


















function showContent(serviceId, boxId) {
    // Hide all content sections
    var contents = document.querySelectorAll('.service-content');
    contents.forEach(function(content) {
      content.style.display = 'none';
    });
  
    // Remove 'active' class from all boxes
    var boxes = document.querySelectorAll('.service-box');
    boxes.forEach(function(box) {
      box.classList.remove('active');
    });
  
    // Show the clicked content
    var activeContent = document.getElementById(serviceId);
    activeContent.style.display = 'block';
  
    // Add 'active' class to the clicked box
    var activeBox = document.getElementById(boxId);
    activeBox.classList.add('active');
  }
  
  // Show logistics content by default
  window.onload = function() {
    showContent('logistics', 'box-logistics');
  };
  




  function checkInput(inputElement) {
    const addButton = inputElement.nextElementSibling;  // Find the "+" button next to the input
    if (inputElement.value.trim() === "") {
      addButton.classList.add('disabled');
      addButton.style.pointerEvents = "none";  // Disable click
    } else {
      addButton.classList.remove('disabled');
      addButton.style.pointerEvents = "auto";  // Enable click
    }
  }

  // Function to add a new drop location input
//   function addLocation(button) {
//     const inputField = button.previousElementSibling; 
//     if (inputField.value.trim() === "") {
//       return;  
//     }

//     const droplocationsContainer = document.getElementById('droplocationsContainer');

//     const locationWrapper = document.createElement('div');
//     locationWrapper.classList.add('location-wrapper', 'location-field');

//     const input = document.createElement('input');
//     input.type = 'text';
//     input.class = 'form-control p-4';
//     input.name = 'dropLocation[]';
//     input.placeholder = 'Enter drop location';
//     input.required = true;
//     input.oninput = function () {
//       checkInput(input);
//     };

//     const addBtn = document.createElement('span');
//     addBtn.classList.add('add-btn', 'disabled', 'p-2', 'bg-greyishblue', 'rounded-circle');
//     addBtn.textContent = '+';
//     addBtn.onclick = function() {
//       addLocation(addBtn);
//     };

//     const removeBtn = document.createElement('span');
//     removeBtn.classList.add('remove-btn');
//     removeBtn.textContent = '-';
//     removeBtn.onclick = function() {
//       locationWrapper.remove();
//     };

//     locationWrapper.appendChild(input);
//     locationWrapper.appendChild(addBtn);
//     locationWrapper.appendChild(removeBtn);

//     droplocationsContainer.appendChild(locationWrapper);
//   }