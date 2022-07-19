
console.log("Loading from JSFiddle")
//Simulated JSON data for questions, to load in extra info.
let helpData = {
	"Q3" : {
    	title : "About Q3",
        content : "Here's some info about Q3."
    },
    "Q2" : {
    	title : "About Q2",
        content : "Here's some info about Q2."
    }
    
}

function getIfKeyExists(key, dictionary){
	try{
    	let data = dictionary[key];
        data["key"] = key; // add the key to the returned values for ease of access later
    	return data
    }
	catch(e){
     console.log(e);
     return null
    }

}



function showHelpModal(title, content){
	

   		let modal = $("#csdk-modal");
        console.log(title)
        modal.find(".header").empty().append(title);
        modal.find(".content").empty().append(content);
        $("#csdk-modal").show()
		
}

function hideHelpModal(){
	$("#csdk-modal").hide();
}

function findQuestionsOnPage()
{
//close if clicking close button
$("#csdk-modal-close").click(()=>hideHelpModal())

//Close if clicking outside modal frame
$("#csdk-modal").click(function(e) {
    e.target == this ? hideHelpModal() : console.log("B");
})
	$(".Question").map(
    	function mapQuestions(){
        	let qid = $(this).attr("questionid")
            let data = getIfKeyExists(qid, helpData)
            let template = $("#csdk-help-icon").contents()
            
            console.log(data)
            if(data != null){
            	template.attr("title", `Click for help with this question.`)
            	$(this).find(".QuestionText").prepend(template.clone())
                $(this).find(".csdk-help-icon").click(()=>showHelpModal(data.title, data.content))
                
            }
            
    		return $(this).attr("questionid")
    })
}


findQuestionsOnPage()
    