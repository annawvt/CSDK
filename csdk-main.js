
console.log("Loading from GithubCDN TESTESATAGDADGDA")
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
	

   		let modal = jQuery("#csdk-modal");
        console.log(title)
        modal.find(".header").empty().append(title);
        modal.find(".content").empty().append(content);
        jQuery("#csdk-modal").show()
		
}

function hideHelpModal(){
	jQuery("#csdk-modal").hide();
}

function findQuestionsOnPage()
{
//close if clicking close button
jQuery("#csdk-modal-close").click(()=>hideHelpModal())

//Close if clicking outside modal frame
jQuery("#csdk-modal").click(function(e) {
    e.target == this ? hideHelpModal() : console.log("B");
})
	jQuery(".Question").map(
    	function mapQuestions(){
        	let qid = jQuery(this).attr("questionid")
            let data = getIfKeyExists(qid, helpData)
            let template = jQuery("#csdk-help-icon").contents()
            
            console.log(data)
            if(data != null){
            	template.attr("title", `Click for help with this question.`)
            	jQuery(this).find(".QuestionText").prepend(template.clone())
                jQuery(this).find(".csdk-help-icon").click(()=>showHelpModal(data.title, data.content))
                
            }
            
    		return jQuery(this).attr("questionid")
    })
}


findQuestionsOnPage()
    