// Load this script when page loads
$(document).ready(function(){

 // Set up a listener so that when anything with a class of 'tab' 
 // is clicked, this function is run.
 $('.tab').click(function () {

  // Remove the 'active' class from the active tab.
  $('#tabs_container > .tabs > li.active')
	  .removeClass('active');
	  
  // Add the 'active' class to the clicked tab.
  $(this).parent().addClass('active');

  // Remove the 'tab_contents_active' class from the visible tab contents.
  $('#tabs_container > .tab_contents_container > div.tab_contents_active')
	  .removeClass('tab_contents_active');

  // Add the 'tab_contents_active' class to the associated tab contents.
  $(this.rel).addClass('tab_contents_active');

 });
});


// ----------------------------- Accordion ---------------------------------------------------
function openAccordionSection(e) {
	
        // Grab current anchor value
        var currentAttrValue = $(e.currentTarget).attr('href');
 
 		//If the accordion section is open..
        if($(e.target).is('.active')) {
			//..close it
            close_accordion_section();
        } else {
			//Else make it active and open it
            // Add active class to section title
            $(e.target).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
        e.preventDefault();
    }



//Function to close an accordion section
function close_accordion_section() {
	$('.accordion .accordion-section-title').removeClass('active');
	$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
}

//Function to mark a task as complete
	function completeTask(e){
		$(e.target).parent().css({
			'background' : '#f7f7f7',
			'text-decoration': 'line-through'
		});
		$(e.target).parent().parent().css({
			'background' : '#f7f7f7',
			'text-decoration': 'line-through', 
			'opacity': '0.2'
		});
	}
	

$(document).ready(function() {
   
 
    $('.accordion-section-title').click(function (e){openAccordionSection(e)});
	
	$('.accordion-section-content').click(function (){close_accordion_section()});
	 
	$('.complete').click(function (e){completeTask(e)});
	
	
	
// --------------------------- Task deletion ----------------------------
	
//To delete the task without asking for a confirmation	
/*	$(".delete").click(function(){
    $(this).parent().remove();
	});
	*/

// ----------------------- Delete Confirmation Popup -------------------- 	

	//Declaring a global variable to hold the current target
	var taskToDelete;
	
	//open popup
	$('.delete').on('click', function(event){
		taskToDelete = $(event.currentTarget).parent().parent();
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});

	//Function to delete an element with a parameter
	function deleteFunction($param){
		$param.hide();
	}
	
	//Deleting the task on clicking the 'Yes' button
	$("#yes").click(function(event){
		$('.cd-popup').removeClass('is-visible');
		deleteFunction($(taskToDelete));
	});
		
	//Closing the popup on clicking the 'No' button
	$("#no").click(function(){
		$('.cd-popup').removeClass('is-visible');
	});
	
	//Closing the popup on clicking anywhere outside it
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	
	//Closing the popup on clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
	
});

// ------------------- Adding a new task ------------------------------------------------------

function newPersonalTaskCreation(){
	
	
	
	var taskTitle = prompt("Please enter Task Name (Eg. Buy Groceries)", "");
	
	if(taskTitle != "" && taskTitle != null){
	
		var newPersonalTask = document.createElement("div");
		$(newPersonalTask).attr("id","personalTask-8");
		$(newPersonalTask).addClass("accordion-section");
		
		$(newPersonalTask).html('<a class="accordion-section-title" href="#accordion-8">'+taskTitle+'<img src="delete.png" class="delete"><img src="complete.png" class="complete"></a><div id="accordion-8" class="accordion-section-content"><div class="task" id="task8"><p><h4>Due at :</h4> 7:00 am, 15 Oct 2016<br><h4>Assigned to :</h4>	Myself<br><h4>Category :</h4>	Home<br><h4>Priority :</h4>	High</div></div>');
		
		
		 
		 
		var tabElementSelectedId = $(".active.tab_element").attr("id");
	
		if (tabElementSelectedId == "personal_tab"){
		
		document.getElementById("personalAccordion").appendChild(newPersonalTask);
		} else {
		document.getElementById("groupAccordion").appendChild(newPersonalTask);
		}

		 $('#personalTask-8 .accordion-section-title').click(function (e){openAccordionSection(e)});
		document.getElementById("personalTask-8").addEventListener("click", deleteNewTask);
		$('#personalTask-8 .complete').click(function (e){completeTask(e)});
		
	}
}
/*
// ------------------- Adding a new group task ------------------------------------------------------


function newGroupTaskCreation(){
	var newGroupTask = document.createElement("div");
	$(newGroupTask).addClass('accordion-section');
	
	var groupTaskTitle = prompt("Please enter Task Name", "Buy Groceries");
	
	
	$(newPersonalTask).html('<a class="accordion-section-title" id="sectionTaskTitle" href="#accordion-g2">'+groupTaskTitle+'<img src="delete.png" class="delete"><img src="complete.png" class="complete"></a><div id="accordionNewGroupTask" class="accordion-section-content"><div class="task" id="task1"><p><h4>Due at :</h4> 7:00 am, 15 Oct 2016<br></div></div>');

document.getElementById("groupAccordion").appendChild(newGroupTask);

document.getElementById("accordionNewTask").addEventListener("click", deleteNewTask);

}
*/

// ------------------------------ Deleting a newly created task -----------------------------------------


function deleteNewTask() {
    //Declaring a global variable to hold the current target
	var taskToDelete;
	
	//open popup
	$('.delete').on('click', function(event){
		taskToDelete = $(event.currentTarget).parent().parent();
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});

	//Function to delete an element with a parameter
	function deleteFunction($param){
		$param.hide();
	}
	
	//Deleting the task on clicking the 'Yes' button
	$("#yes").click(function(event){
		$('.cd-popup').removeClass('is-visible');
		deleteFunction($(taskToDelete));
	});
		
	//Closing the popup on clicking the 'No' button
	$("#no").click(function(){
		$('.cd-popup').removeClass('is-visible');
	});
	
	//Closing the popup on clicking anywhere outside it
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	
	//Closing the popup on clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
	
}

