let Slide = function(){

    this.elems = document.querySelectorAll('#main div');
    this.gotopageButtons = document.querySelectorAll('.navigation ul li');
    this.nbElements = this.elems.length;

    this.setElementVisibility = function(element,visible) {

        if(typeof visible === "boolean" && element instanceof HTMLElement) {
            if(visible === true) {
                if (element.classList.contains("hidden")) {
                element.classList.remove("hidden");
                }
            } else {
                if (!element.classList.contains("hidden")) {
                element.classList.add("hidden");
                }
            }
        }
    };

    this.bindButton = function(Elements, compteur){

        let that = this;    
        that.gotopageButtons.forEach(function(button) {
            button.addEventListener('click', function(){
                if((button.getAttribute("class") === "prev") && (compteur !== 0)){
                    compteur--;
                } 
                if((button.getAttribute("class") === "next") && (compteur !== (that.nbElements - 1))){
                    compteur++;
                } 
                that.display(compteur);            	
            });
        });
    };

    this.display = function(element)
    {

        let that = this;	
        that.setElementVisibility(that.gotopageButtons[0], true);
        that.setElementVisibility(that.gotopageButtons[1], true);	

        for (var i = 0, l = that.nbElements; i < l; i++) {
            that.setElementVisibility(that.elems[i], false);
        }
        that.setElementVisibility(that.elems[element], true);
        if(element === 0){
            that.setElementVisibility(that.gotopageButtons[0], false);
        }
        if(element === (that.nbElements - 1)){
            that.setElementVisibility(that.gotopageButtons[1], false);
        }
    };

	this.init = function(depart)
    {

    let that = this;
    switch(depart) {
        case depart === undefined :
            depart = 0;
        break;
        case depart > that.nbElements : 
            depart = that.nbElements - 1;
        break;
        default :
            if (isNaN(depart)){
            depart = 0;
            }
        break;
    }
    that.display(depart);
    that.bindButton(that.elems, depart);
    };
};

const slideLuiggi = new Slide();
if(slideLuiggi !== undefined){
    slideLuiggi.init("sds");
}